/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { deepCopy } from '@ziiircom/common';

const preprocessSentence = (sentence, set = {}) => {
  const text = sentence.replace(/<<\s*([\w.]+)\s*=\s*(.+?)\s*>>/g, (match, name, value) => {
    // eslint-disable-next-line no-param-reassign
    set[name] = value;
    return '';
  });
  return { text, set };
};

const preprocessOutput = (output) => {
  let sentence;
  if (Array.isArray(output)) {
    // Sentence is an Array
    sentence = output.map((s) => preprocessOutput(s));
  } else if (output.text) {
    // Sentence is an object
    sentence = output;
    if (Array.isArray(sentence.text)) {
      // Sentence.text is an array
      sentence.text.forEach((t, j) => {
        ({ text: sentence.text[j], set: sentence.set } = preprocessSentence(t, sentence.set));
      });
    } else {
      // Sentence.text is a string
      ({ text: sentence.text, set: sentence.set } = preprocessSentence(sentence.text, sentence.set));
    }
    if (Object.keys(sentence.set).length === 0) {
      delete sentence.set;
    }
  } else {
    // Sentence is a string
    const { text, set } = preprocessSentence(output);
    if (Object.keys(set).length) {
      sentence = { text, set };
    } else {
      sentence = text;
    }
  }
  return sentence;
};

const preprocessIntent = (_intent) => {
  const intent = deepCopy(_intent);
  const { output } = intent;
  if (Array.isArray(output) && output.length && output[0].type === 'condition') {
    intent.output = intent.output.map((o) => ({ ...o, children: preprocessOutput(o.children) }));
  } else {
    intent.output = preprocessOutput(output);
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

const htmlRenderer = (message) => {
  const html = message.replace(/https?:\/\/\S*|\[(.*?)\]\((.*?)\)/gi, (match, complexLabel, complexUrl) => {
    let url = match;
    let label = url;
    if (complexLabel) {
      label = complexLabel;
      url = complexUrl;
    }
    let imgUrl = url.match(/\.(jpg|jpeg|gif|png|svg)$/gi) ? url : undefined;
    if (!imgUrl && label.match(/\.(jpg|jpeg|gif|png|svg)$/gi)) {
      imgUrl = label;
      label = label.substring(label.lastIndexOf('/') + 1, label.lastIndexOf('.'));
    }
    if (imgUrl) {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer"><img src="${imgUrl}" alt="${label}" /></a>`;
    }
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  });
  return html;
};

const simpleMatch = (sentenceA, sentenceB) => sentenceA.toLowerCase() === sentenceB.toLowerCase();

const testIntentConditions = (conditions, context) =>
  !conditions || conditions.length === 0 || conditions.findIndex((c) => c.name && context[c.name] === c.value) > -1;

const extractAndMatch = (input, text, conditions, context) => {
  const entities = [];
  let match;
  let value = text;
  if (testIntentConditions(conditions, context)) {
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
  }

  return [match, entities];
};

const generateOutput = (match, _context) => {
  const { intent } = match;
  const { entities } = match;
  let context = _context;
  const response = [];
  let quickReplies;
  // Store in context all variables changed
  if (intent.set) {
    context = { ...context, ...intent.set };
  }
  // handle condition #129
  let { output } = intent;
  if (Array.isArray(output)) {
    output.forEach((o) => {
      if (o.type === 'condition') {
        output = null;
        let value;
        o.children.forEach((child) => {
          if ((!output || !value) && (child.value === context[child.name] || !child.value)) {
            ({ value } = child);
            output = child;
          }
        });
      }
    });
  }
  if (output) {
    let text = output;
    if (output.text) {
      ({ text } = output);
    }
    if (output.quick_replies) {
      quickReplies = output.quick_replies;
    }
    entities.forEach((e) => {
      if (e.name) {
        context[e.name] = e.value;
      }
    });
    if (!Array.isArray(text)) {
      text = [text];
    }
    text.forEach((t) => {
      let txt = t;
      if (txt.text) {
        txt = txt.text;
      }
      const r = renderTemplate(txt, context, entities);
      response.push(r.response);
      if (Object.keys(r.set).length) {
        context = { ...context, ...r.set };
      }
      const os = Array.isArray(output) ? output : [output];
      os.forEach((o) => {
        if (o.set) {
          Object.keys(o.set).forEach((name) => {
            context[name] = getValue(o.set[name], entities);
          });
        }
      });
    });
  }
  return [response, context, quickReplies, entities];
};

const Dialog = (_intents, initialContexts, options = { fallback: "I don't understand" }) => {
  let resp;
  const contexts = initialContexts || {};
  const buildResponse = ({ matchs, context: c = {}, userId = 'user' }, renderer = htmlRenderer) => {
    let context = deepCopy(c);
    let matchIndex = 0;
    if (matchs && matchs.length > 1) {
      matchs.find((m, i) => {
        if (((m.intent.conditions && m.intent.conditions.length > 0) || !m.any) && m.intent.topic === context.topic) {
          matchIndex = i;
          return true;
        }
        return false;
      });
    }
    let response = [];
    let entities;
    let quickReplies;
    if (matchs[matchIndex]) {
      [response, context, quickReplies, entities] = generateOutput(matchs[matchIndex], context);
      contexts[userId] = deepCopy(context);
    }
    if (response.length === 0) {
      response.push(options.fallback);
    }
    response = response.map((m) => renderer(m));
    const output = { response, context, entities };
    if (quickReplies) {
      output.quick_replies = quickReplies;
    }
    return output;
  };
  if (_intents && Array.isArray(_intents) && _intents.length) {
    const intents = _intents.map((i) => preprocessIntent(i));
    let m;
    let entities;
    const matchIntent = (message, userId = 'user') => {
      const context = contexts[userId] || {};
      let matchs = [];
      intents.forEach((intent) => {
        let i =
          Array.isArray(intent.input) && testIntentConditions(intent.conditions, context)
            ? intent.input.findIndex((input) => {
                [m, entities] = extractAndMatch(input, message.text);
                return m;
              })
            : -1;
        if (i === -1 && typeof intent.input === 'string') {
          [m, entities] = extractAndMatch(intent.input, message.text, intent.conditions, context);
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
      matchs = matchs.sort((a, b) =>
        a.intent.conditions &&
        a.intent.conditions.length > 0 &&
        (!b.intent.conditions || b.intent.conditions.length === 0)
          ? -1
          : (a.intent.order || 0) - (b.intent.order || 0),
      );
      return {
        matchs,
        context,
        userId,
      };
    };
    resp = [matchIntent, buildResponse];
  }

  return resp;
};

export default Dialog;
