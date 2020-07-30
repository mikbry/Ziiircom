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
const useDialog = async ({ listener, dataset: intents, messages, contexts: _contexts = {} }) => {
  const [addMessage, getMessages, createMessage, , cmds] = await useMessaging({ listener, messages });
  const contexts = deepCopy(_contexts);
  const [matchIntents, buildResponse] = Dialog(intents, contexts);

  const sendMessage = async message => {
    addMessage(message);
    await listener({ type: 'newMessage', message: deepCopy(message) });
    const matchs = matchIntents(message);
    const { response, quick_replies: quickReplies } = buildResponse(matchs);
    const newMessages = [];
    response.forEach((r, i) => {
      const msg = createMessage('bot', r);
      if (i === response.length - 1 && quickReplies) {
        msg.quick_replies = deepCopy(quickReplies);
      }
      addMessage(msg);
      newMessages.push(deepCopy(msg));
    });
    await listener({ type: 'newMessage', message: newMessages });
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
