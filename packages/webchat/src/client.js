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
  const handleReceivedMessage = message => {
    const m = createElement(
      ui.Message,
      { key: message.id, meta: message.date, avatar: message.avatar, fromUser: message.from === 'user' },
      message.text,
    );
    render(m, document.getElementsByClassName('ziiir-conversation')[0]);
  };
  const [messages, createMessage, sendMessage] = messageHook(handleReceivedMessage);
  const handleNewMessage = text => {
    const message = createMessage('user', text);
    sendMessage(message);
    // TODO redraw messenger
  };
  const el = await App(messages, handleNewMessage);
  render(el, document.body, { ...store });
};

export default ZiiirClient;
