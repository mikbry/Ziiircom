/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import deepCopy from '../utils/deepCopy';

// simple Echo Messaging service
const useEcho = (handleReceived = () => {}) => {
  const messages = [];

  const createMessage = (from, text) =>
    // TODO id, date
    ({ from, text });
  const sendMessage = async message => {
    messages.push(deepCopy(message));
    handleReceived(deepCopy(message));
    const echo = createMessage('bot', `You say : ${message.text}`);
    messages.push(echo);
    handleReceived(deepCopy(echo));
  };

  const getMessages = async () => deepCopy(messages);

  return [getMessages, createMessage, sendMessage];
};

export default useEcho;
