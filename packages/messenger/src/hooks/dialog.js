/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Dialog from '@ziiircom/dialog';
import { deepCopy } from '@ziiircom/common';

// simple Dialog Messaging service
const useDialog = (listener, intents) => {
  const messages = [];
  const [matchIntents] = Dialog(intents);
  const createMessage = (from, text) => ({ from, text, created_time: Date.now() });

  const sendMessage = async message => {
    messages.push(deepCopy(message));
    await listener({ type: 'newMessage', message: deepCopy(message) });
    const matchs = matchIntents(message);
    let response = "I don't understand";
    if (matchs[0]) {
      response = matchs[0].intent.output;
    }
    const echo = createMessage('bot', response);
    messages.push(echo);
    await listener({ type: 'newMessage', message: deepCopy(echo) });
  };

  const command = async type => {
    if (type === '#reset') {
      listener({ type: 'resetMessages' });
    } else {
      listener({ type: 'unknownCommand' });
    }
  };
  const getMessages = async () => deepCopy(messages);

  return [getMessages, createMessage, sendMessage, command];
};

export default useDialog;
