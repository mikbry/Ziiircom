/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { setup } from '@ziiircom/components';
import useUI from './hooks/ui';
import { createElement, render } from './utils/builder';
import { styled } from './utils/styled';
import createStore from './utils/store';
import App from './app';

const ZiiirClient = async (config, messageHook) => {
  setup({ createElement, styled });
  const ui = await useUI();
  const store = createStore(config);
  let messages;
  const handleEventMessage = ({ type, message }) => {
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
      if (messages && messages.length) {
        // eslint-disable-next-line no-restricted-syntax
        for (const c of container.children) {
          const createdtime = parseInt(c.getAttribute('created-time'), 10);
          if (message.created_time < createdtime) {
            insert = { before: c };
            break;
          }
        }
      }
      render(m, container, {}, insert);
    } else if (type === 'resetMessages') {
      while (container.firstChild) {
        container.firstChild.remove();
      }
    }
  };
  const [_messages, createMessage, sendMessage, action] = messageHook(handleEventMessage);
  messages = _messages;
  const handleNewMessage = text => {
    if (text.charAt(0) === '#') {
      action(text);
    } else {
      const message = createMessage('user', text);
      sendMessage(message);
    }
  };
  const el = await App(messages, handleNewMessage);
  render(el, document.body, { ...store });
};

export default ZiiirClient;
