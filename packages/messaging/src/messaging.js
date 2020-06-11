/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { deepCopy } from '@ziiircom/common';

// Messaging service
const useMessaging = async listener => {
  let messages = [];

  const createMessage = (from, text) => ({ from, text, created_time: Date.now() });

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
