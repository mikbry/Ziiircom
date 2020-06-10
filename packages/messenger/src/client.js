/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { setup } from '@ziiircom/components';
import useUI from './hooks/ui';
import { html, createElement, render } from './utils/builder';
import { styled } from './utils/styled';
import createStore from './utils/store';
import App from './app';

const ZiiirClient = async ({
  state,
  messageHook,
  root,
  messageListener = ({ type, message }) => ({ type, message }),
  dataset,
}) => {
  setup({ html, createElement, styled });
  const ui = await useUI();
  const store = createStore(state);
  const handleEventMessage = async ({ type, message }) => {
    const container = document.getElementsByClassName('ziiir-conversation')[0];
    if (type === 'newMessage') {
      const m = createElement(
        ui.Message,
        {
          key: message.created_time,
          createdtime: message.created_time,
          avatar: message.avatar,
          fromUser: message.from === 'user',
        },
        message.text,
      );
      let insert;
      // eslint-disable-next-line no-restricted-syntax
      for (const c of container.children) {
        const createdtime = parseInt(c.getAttribute('created-time'), 10);
        if (message.created_time < createdtime) {
          insert = { before: c };
          break;
        }
      }
      render(m, container, undefined, insert);
      container.scrollTop = container.scrollHeight;
    } else if (type === 'resetMessages') {
      while (container.firstChild) {
        container.firstChild.remove();
      }
    }
    messageListener({ type, message });
  };
  const [getMessages, createMessage, sendMessage, commands] = messageHook(handleEventMessage, dataset);
  const handleNewMessage = text => {
    if (text.charAt(0) === '#') {
      commands(text);
    } else {
      const message = createMessage('user', text);
      sendMessage(message);
    }
  };
  const messages = await getMessages();
  const el = await App(messages, handleNewMessage);
  render(el, root, { ...store });
  return [store, getMessages, createMessage, sendMessage, commands, handleEventMessage];
};

export default ZiiirClient;
