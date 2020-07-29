/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { deepCopy } from '@ziiircom/common';

const preprocessOutput = (output, set = {}) => {
  const text = output.replace(/<<\s*([\w.]+)\s*=\s*(.+?)\s*>>/g, (match, name, value) => {
    // eslint-disable-next-line no-param-reassign
    set[name] = value;
    return '';
  });
  return { text, set };
};

const preprocessIntent = _intent => {
  const intent = deepCopy(_intent);
  const { output } = intent;
  if (Array.isArray(output)) {
    output.forEach((o, i) => {
      if (o.type === 'condition') {
        o.children.forEach((c, j) => {
          // eslint-disable-next-line no-param-reassign
          const { text, set } = preprocessOutput(c.text, c.set);
          if (Object.keys(set).length === 0) {
            intent.output[i].children[j] = { ...c, text };
          } else {
            intent.output[i].children[j] = { ...c, set, text };
          }
        });
      } else {
        const { text, set } = preprocessOutput(o);
        intent.output[i] = { set };
        if (Object.keys(set).length === 0) {
          intent.output[i] = text;
        } else {
          intent.output[i] = { set, text };
        }
      }
    });
  } else {
    const { text, set } = preprocessOutput(output);
    if (Object.keys(set).length === 0) {
      intent.output = text;
    } else {
      intent.output = { set, text };
    }
  }

  return intent;
};

const getValue = (_value, entities) => {
  let value = _value;
  /* istanbul ignore next */
  if (value === '*') {
    [{ value }] = entities;
  }
  return value;
};

const renderTemplate = (template, context, entities) => {
  const set = {};
  const response = template.replace(/{{\s*([\w.]+)\s*(=\s*(.+?)\s*)*}}/g, (match, _name, eq, replace) => {
    const name = _name.trim();
    if (eq) {
      set[name] = getValue(replace, entities);
    }
    const value = set[name] || context[name] || '';
    return value;
  });
  return { response, set };
};

const htmlRenderer = message => {
  const html = message.replace(/https?:\/\/\S*|\[(.*?)\]\((.*?)\)/gi, (match, complexLabel, complexUrl) => {
    let url = match;
    let label = url;
    if (complexLabel) {
      label = complexLabel;
      url = complexUrl;
    }
    if (url.match(/\.(jpg|jpeg|gif|png)$/gi)) {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer"><img src="${url}" alt="${label}" /></a>`;
    }
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  });
  return html;
};

const simpleMatch = (sentenceA, sentenceB) => sentenceA.toLowerCase() === sentenceB.toLowerCase();

const extractAndMatch = (input, text) => {
  const entities = [];
  let match;
  let value = text;
  if (input === '*') {
    entities.push({ type: 'any', value, offset: 0 });
    match = true;
  } else if (input.indexOf('{{') > -1) {
    // Extract entities
    input.replace(/{{\s*([\w.]*)\s*(=?)\s*@(any|email)\s*}}/g, (m, name, eq, type, offset) => {
      if (offset > 0) {
        // TODO
        value = undefined;
      }
      if (type === 'any') {
        match = true;
      } else if (type === 'email' && value && value.match(/\b(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})\b/gi)) {
        match = true;
      }
      if (match) {
        entities.push({ name, type, value, offset });
      }
    });
  } else {
    match = simpleMatch(input, text);
    if (match) {
      entities.push({ type: 'all', value, offset: 0 });
    }
  }
  return [match, entities];
};

const Dialog = (_intents, initialContexts) => {
  let resp;
  const contexts = initialContexts || {};
  const buildOutput = ({ matchs, context: c = {}, userId }, renderer = htmlRenderer) => {
    let context = deepCopy(c);
    let match;
    if (matchs && matchs.length > 1) {
      matchs.forEach(m => {
        if (!m.any && !match && m.intent.topic === context.topic) {
          match = m;
        }
      });
    }
    if (!match && matchs[0]) {
      [match] = matchs;
    }
    let response = [];
    let entities;
    if (match) {
      const { intent } = match;
      ({ entities } = match);
      // Store in context all variables changed
      if (intent.set) {
        context = { ...context, ...intent.set };
      }
      // handle condition #129
      let { output } = intent;
      if (Array.isArray(output)) {
        output.forEach(o => {
          if (o.type === 'condition') {
            output = null;
            let value;
            o.children.forEach(child => {
              if ((!output || !value) && (child.value === context[child.name] || !child.value)) {
                ({ value } = child);
                output = child;
              }
            });
          } /* else {
            output = o;
          } */
        });
      }
      let text = output;
      if (output.text) {
        ({ text } = output);
      }
      entities.forEach(e => {
        if (e.name) {
          context[e.name] = e.value;
        }
      });
      if (!Array.isArray(text)) {
        text = [text];
      }
      text.forEach(t => {
        const r = renderTemplate(t, context, entities);
        response.push(r.response);
        if (Object.keys(r.set).length) {
          context = { ...context, ...r.set };
        }
        if (output.set) {
          Object.keys(output.set).forEach(name => {
            context[name] = getValue(output.set[name], entities);
          });
        }
      });
    } else {
      response.push("I don't understand");
    }
    contexts[userId] = deepCopy(context);
    response = response.map(m => renderer(m));
    return { response, context, entities };
  };
  if (_intents && Array.isArray(_intents) && _intents.length) {
    const intents = _intents.map(i => preprocessIntent(i));
    let m;
    let entities;
    const matchIntent = (message, userId = 'user') => {
      const context = contexts[userId] || {};
      const matchs = [];
      intents.forEach(intent => {
        let i = Array.isArray(intent.input)
          ? intent.input.findIndex(input => {
              [m, entities] = extractAndMatch(input, message.text);
              return m;
            })
          : -1;
        if (i === -1 && typeof intent.input === 'string') {
          [m, entities] = extractAndMatch(intent.input, message.text);
          i = m ? 0 : -1;
        }
        if (i >= 0) {
          m = { intent, inputIndex: i, entities };
          if (entities.length === 1 && entities[0].type === 'any') {
            m.any = true;
          }
          matchs.push(m);
        }
      });
      return { matchs: matchs.sort((a, b) => (a.intent.order || 0) - (b.intent.order || 0)), context, userId };
    };
    resp = [matchIntent, buildOutput];
  }

  return resp;
};

export default Dialog;
