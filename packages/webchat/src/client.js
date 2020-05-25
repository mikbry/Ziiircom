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
  const handleEventMessage = ({ type, message }) => {
    if (type === 'newMessage') {
      const m = createElement(
        ui.Message,
        { key: message.id, meta: message.date, avatar: message.avatar, fromUser: message.from === 'user' },
        message.text,
      );
      render(m, document.getElementsByClassName('ziiir-conversation')[0]);
    } else if (type === 'resetMessages') {
      const parent = document.getElementsByClassName('ziiir-conversation')[0];
      while (parent.firstChild) {
        parent.firstChild.remove();
      }
    }
  };
  const [messages, createMessage, sendMessage, action] = messageHook(handleEventMessage);
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
