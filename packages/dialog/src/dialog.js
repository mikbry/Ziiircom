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
  if (intents && Array.isArray(intents) && intents.length) {
    const matchIntent = message => {
      const matchs = [];
      intents.forEach(intent => {
        const i = Array.isArray(intent.input) ? intent.input.find(input => simpleMatch(input, message.text)) : 0;
        if ((typeof intent.input === 'string' && simpleMatch(intent.input, message.text)) || i >= 0) {
          matchs.push({ intent });
        }
      });
      return matchs;
    };
    resp = [matchIntent];
  }
  return resp;
};

export default Dialog;
