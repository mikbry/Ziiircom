/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

const renderTemplate = (template, context) =>
  template.replace(/{{\s*([\w.]+)\s*}}/g, (match, name) => {
    const value = context[name] || '';
    return value;
  });

const simpleMatch = (sentenceA, sentenceB) => sentenceA.toLowerCase() === sentenceB.toLowerCase();

const Dialog = (intents, initialContexts) => {
  let resp;
  const contexts = initialContexts || {};
  const buildOutput = ({ matchs, context: c = {}, userId }, renderer = message => message) => {
    let context = c;
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
    if (match) {
      const { intent } = match;
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
                output = child.text;
              }
            });
          } else {
            output = o;
          }
        });
      }
      response = renderTemplate(output, context);
    } else {
      response = "I don't understand";
    }
    contexts[userId] = context;
    return renderer(response);
  };
  if (intents && Array.isArray(intents) && intents.length) {
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
          matchs.push({ intent, any, inputIndex: i });
        }
      });
      return { matchs: matchs.sort((a, b) => (a.intent.order || 0) - (b.intent.order || 0)), context, userId };
    };
    resp = [matchIntent, buildOutput];
  }

  return resp;
};

export default Dialog;