/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { deepCopy } from '@ziiircom/common';

// simple Echo Messaging service
const useEcho = (listener = () => {}) => {
  const messages = [];

  const createMessage = (from, text) => ({ from, text, created_time: Date.now() });

  const sendMessage = async message => {
    messages.push(deepCopy(message));
    listener({ type: 'newMessage', message: deepCopy(message) });
    const echo = createMessage('bot', `You say : ${message.text}`);
    messages.push(echo);
    listener({ type: 'newMessage', message: deepCopy(echo) });
  };

  const action = async type => {
    if (type === '#reset') {
      listener({ type: 'resetMessages' });
    }
  };
  const getMessages = async () => deepCopy(messages);

  return [getMessages, createMessage, sendMessage, action];
};

export default useEcho;
