/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { deepCopy } from '@ziiircom/common';

const preprocessOutput = (output, set = {}) => {
  const text = output.replace(/<<\s*([\w.]+)\s*=\s*(.+)\s*>>/g, (match, name, value) => {
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
    entities.forEach(e => {
      /* istanbul ignore next */
      if (e.type === 'any') {
        ({ value } = e);
      }
    });
  }
  return value;
};

const renderTemplate = (template, context, entities) => {
  const set = {};
  const response = template.replace(/{{\s*([\w.]+)\s*(=\s*(.+)\s*)*}}/g, (match, _name, eq, replace) => {
    const name = _name.trim();
    if (eq) {
      set[name] = getValue(replace, entities);
    }
    const value = set[name] || context[name] || '';
    return value;
  });
  return { response, set };
};

const simpleMatch = (sentenceA, sentenceB) => sentenceA.toLowerCase() === sentenceB.toLowerCase();

const Dialog = (_intents, initialContexts) => {
  let resp;
  const contexts = initialContexts || {};
  const buildOutput = ({ matchs, context: c = {}, userId }, renderer = message => message) => {
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
    let response;
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
      let set;
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
          } else {
            output = o;
          }
        });
      }
      let text = output;
      if (output.text) {
        ({ text } = output);
      }
      ({ response, set } = renderTemplate(text, context, entities));
      if (Object.keys(set).length) {
        context = { ...context, ...set };
      }
      if (output.set) {
        Object.keys(output.set).forEach(name => {
          context[name] = getValue(output.set[name], entities);
        });
      }
    } else {
      response = "I don't understand";
    }
    contexts[userId] = deepCopy(context);
    response = renderer(response);
    return { response, context, entities };
  };
  if (_intents && Array.isArray(_intents) && _intents.length) {
    const intents = _intents.map(i => preprocessIntent(i));
    const matchIntent = (message, userId = 'user') => {
      const context = contexts[userId] || {};
      const matchs = [];
      intents.forEach(intent => {
        let any = false;
        let i = Array.isArray(intent.input)
          ? intent.input.findIndex(input => {
              if (input === '*') {
                any = true;
                return true;
              }
              return simpleMatch(input, message.text);
            })
          : -1;
        if (i === -1 && typeof intent.input === 'string') {
          if (intent.input === '*') {
            any = true;
            i = 0;
          } else if (simpleMatch(intent.input, message.text)) {
            i = 0;
          }
        }
        if (i >= 0) {
          const m = { intent, any, inputIndex: i };
          if (any) {
            m.entities = [{ type: 'any', value: message.text }];
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
