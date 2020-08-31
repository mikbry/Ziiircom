/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { setup } from '@ziiircom/components';
import useUI from './hooks/ui';
import { html, createElement, render, useRef } from './utils/builder';
import { styled } from './utils/styled';
import initFonts from './utils/styled/fonts';
import createStore from './utils/store';
import MessengerApp from './MessengerApp';

const ZiiirClient = async ({
  state,
  messaging,
  root,
  messageListener = ({ type, message }) => ({ type, message }),
  dataset,
  messages,
}) => {
  setup({ html, createElement, styled, useRef });
  const ui = await useUI();
  const store = createStore(state);
  const personas = store.messenger.personas || {};
  const getAvatar = (message) => {
    let { avatar } = message;
    if (!avatar) {
      avatar = personas[message.from];
    }
    return avatar;
  };
  let handleAction;
  const handleEventMessage = async ({ type, message }) => {
    const container = document.getElementsByClassName('ziiir-conversation')[0];
    const createMessage = (msg, hasPrevious, hasNext) => {
      const m = createElement(
        ui.Message,
        {
          key: msg.created_time,
          createdtime: msg.created_time,
          avatar: getAvatar(msg),
          fromUser: msg.from === 'user',
          onAction: handleAction,
          hideDate: state.messenger.hideDate,
          hasPrevious,
          hasNext,
          quickReplies: msg.quick_replies,
        },
        msg.text,
      );
      let insert;
      // eslint-disable-next-line no-restricted-syntax
      for (const c of container.children) {
        const createdtime = parseInt(c.getAttribute('created-time'), 10);
        if (msg.created_time < createdtime) {
          insert = { before: c };
          break;
        }
      }
      render(m, container, { ...store }, insert);
    };
    if (type === 'newMessage') {
      if (Array.isArray(message)) {
        message.forEach((m, i, ms) => {
          const prev = ms[i - 1];
          const hasPrevious = !!prev && prev.from === m.from && m.created_time - prev.created_time < 2000;
          const next = ms[i + 1];
          const hasNext = !!next && next.from === m.from && next.created_time - m.created_time < 2000;
          createMessage(m, hasPrevious, hasNext);
        });
      } else {
        createMessage(message);
      }
      container.scrollTop = container.scrollHeight;
    } else if (type === 'resetMessages') {
      while (container.firstChild) {
        container.firstChild.remove();
      }
    }
    messageListener({ type, message });
  };
  const [getMessages, createMessage, sendMessage, commands] = await messaging({
    listener: handleEventMessage,
    messages,
    dataset,
    contexts: state.contexts,
    options: state.messenger.dialogOptions,
  });
  const handleNewMessage = (text) => {
    if (text.charAt(0) === '#') {
      commands(text);
    } else {
      const message = createMessage('user', text);
      sendMessage(message);
    }
  };
  let msgs = await getMessages();
  msgs = msgs.map((_m) => {
    const m = _m;
    m.avatar = getAvatar(m);
    return m;
  });
  handleAction = (action, data) => {
    //  if (action === 'BUTTON') {
    const message = createMessage('user', data);
    sendMessage(message);
    // }
  };
  const el = await MessengerApp(msgs, handleNewMessage, handleAction, state.messenger.hideDate);
  render(el, root, { ...store });
  initFonts(state.theme, 'ziiircom-messenger-frame');
  return [store, getMessages, createMessage, sendMessage, commands, handleEventMessage];
};

export default ZiiirClient;
