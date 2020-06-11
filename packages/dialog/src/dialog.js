/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

const simpleMatch = (sentenceA, sentenceB) => sentenceA.toLowerCase() === sentenceB.toLowerCase();

const Dialog = intents => {
  let resp;
  const buildOutput = matchs => {
    let response;
    if (matchs && matchs.length > 1) {
      matchs.forEach(m => {
        if (!m.any && !response) {
          response = m.intent.output;
        }
      });
    }
    if (!response && matchs[0]) {
      response = matchs[0].intent.output;
    } else if (!response) {
      response = "I don't understand";
    }
    return response;
  };
  if (intents && Array.isArray(intents) && intents.length) {
    const matchIntent = message => {
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
      return matchs;
    };
    resp = [matchIntent, buildOutput];
  }

  return resp;
};

export default Dialog;
