/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { deepCopy } from '@ziiircom/common';

// Messaging service
const useMessaging = async ({ listener, messages: _messages }) => {
  let messages = [];
  if (_messages) {
    _messages.forEach(_m => {
      const m = deepCopy(_m);
      if (!m.created_time) {
        m.created_time = Date.now();
      }
      messages.push(m);
    });
  }

  const createMessage = (from, text, ...extra) => ({ from, text, ...extra, created_time: Date.now() });

  const sendMessage = undefined;

  const commands = async type => {
    if (type === '#reset') {
      listener({ type: 'resetMessages' });
      messages = [];
    } else {
      listener({ type: 'unknownCommand' });
    }
  };

  const addMessage = message => messages.push(deepCopy(message));

  const getMessages = async () => deepCopy(messages);

  return [addMessage, getMessages, createMessage, sendMessage, commands];
};

export default useMessaging;
