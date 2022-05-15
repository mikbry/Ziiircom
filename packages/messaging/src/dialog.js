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
const useDialog = async ({
  listener,
  dataset: intents,
  messages,
  contexts: _contexts = {},
  storeContexts,
  options,
  actions: globalActions,
}) => {
  const [addMessage, getMessages, createMessage, , cmds] = await useMessaging({ listener, messages });
  const contexts = deepCopy(_contexts);
  const [matchIntents, buildResponse] = Dialog(intents, contexts, options);

  const sendMessage = async (message) => {
    addMessage(message);
    await listener({ type: 'newMessage', message: deepCopy(message) });
    const matchs = matchIntents(message);
    const { response, quick_replies: quickReplies, template, actions, userId } = buildResponse(matchs);
    const newMessages = [];
    response.forEach((r, i) => {
      const msg = createMessage('bot', r);
      msg.to = userId;
      if (i === response.length - 1 && quickReplies) {
        msg.quick_replies = deepCopy(quickReplies);
      }
      if (i === response.length - 1 && template) {
        msg.template = deepCopy(template);
      }
      addMessage(msg);
      newMessages.push(deepCopy(msg));
    });
    await listener({ type: 'newMessage', message: newMessages });
    if (actions) {
      const newActions = actions.map((_action) => {
        let action = _action;
        if (!action.type) {
          action = deepCopy(globalActions[action.name]);
          // console.log('action from globalActions', _action.name, action);
        }
        const variables = {};
        Object.keys(action.variables).forEach((name) => {
          // console.log('context', name, contexts[userId][name]);
          variables[name] = contexts[userId][name] || action.variables[name];
        });
        return { ...action, variables, userId };
      });
      const payload = await listener({ type: 'newAction', message: newActions });
      if (payload) {
        const msg = createMessage('bot', payload);
        msg.to = userId;
        addMessage(msg);
        await listener({ type: 'newMessage', message: [msg] });
      }
    }
    storeContexts(contexts);
  };

  const commands = async (type) => {
    if (type === '#reset') {
      Object.keys(contexts).forEach((id) => {
        delete contexts[id];
        storeContexts(contexts);
      });
    }
    return cmds(type);
  };

  return [getMessages, createMessage, sendMessage, commands];
};

export default useDialog;
