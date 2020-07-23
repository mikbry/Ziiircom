/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Dialog from '@ziiircom/dialog';
import { deepCopy } from '@ziiircom/common';
import useMessaging from './messaging';

// simple Dialog Messaging service
const useDialog = async (listener, intents) => {
  const [addMessage, getMessages, createMessage, , cmds] = await useMessaging(listener);
  const contexts = {};
  const [matchIntents, buildResponse] = Dialog(intents, contexts);

  const sendMessage = async message => {
    addMessage(message);
    await listener({ type: 'newMessage', message: deepCopy(message) });
    const matchs = matchIntents(message);
    const { response } = buildResponse(matchs);
    const msg = createMessage('bot', response);
    addMessage(msg);
    await listener({ type: 'newMessage', message: msg });
  };

  const commands = async type => {
    if (type === '#reset') {
      Object.keys(contexts).forEach(id => {
        delete contexts[id];
      });
    }
    return cmds(type);
  };

  return [getMessages, createMessage, sendMessage, commands];
};

export default useDialog;
