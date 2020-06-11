/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { deepCopy } from '@ziiircom/common';
import useMessaging from './messaging';

// simple Echo Messaging service
const useEcho = async listener => {
  const [addMessage, getMessages, createMessage, , commands] = await useMessaging(listener);

  const sendMessage = async message => {
    addMessage(message);
    await listener({ type: 'newMessage', message: deepCopy(message) });
    const echo = createMessage('bot', `You say : ${message.text}`);
    addMessage(echo);
    await listener({ type: 'newMessage', message: echo });
  };
  return [getMessages, createMessage, sendMessage, commands];
};

export default useEcho;
