/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { setup } from '@ziiircom/components';
import useUI from './hooks/ui';
import useLocalStorage from './hooks/useLocalStorage';
import { html, createElement, render, useRef } from './utils/builder';
import { styled } from './utils/styled';
import initFonts from './utils/styled/fonts';
import useStore from './utils/store';
import MessengerApp from './MessengerApp';

const postFormAction = (url, variables, params, headers = {}) => {
  const form = Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(variables[params[key]])}`)
    .join('&');

  fetch(url, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: form,
  });
};

const postJSONAction = async (url, variables, params, headers = {}, type = 'json') => {
  const json = {};
  Object.keys(params).forEach((key) => {
    const a = key.split('.');
    let value = variables[params[key]];
    if (value[0] === '[') {
      value = JSON.parse(value);
    }
    if (a.length === 1) {
      json[a[0]] = value;
    } else if (a.length === 2) {
      if (!json[a[0]]) {
        json[a[0]] = {};
      }
      json[a[0]][a[1]] = value;
    }
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(json),
    });
    if (!response.ok) {
      const payload = await response.text();
      throw new Error(`${response.statusText} ${payload}`);
    }
    if (type === 'json') {
      return response.json();
    }
    if (type === 'blob') {
      const blob = await response.blob();
      const file = window.URL.createObjectURL(blob);
      window.location.assign(file);
    }
    return undefined;
  } catch (error) {
    console.error(error);
    return error.toString();
  }
};

const ZiiirClient = async ({
  state,
  messaging,
  root,
  messageListener = ({ type, message }) => ({ type, message }),
  dataset,
  messages: _messages,
  actions,
}) => {
  setup({ html, createElement, styled, useRef });
  const ui = await useUI();
  const [store, saveStore] = useStore(state);
  const personas = store.messenger.personas || {};

  const getAvatar = (message) => {
    let { avatar } = message;
    if (!avatar) {
      avatar = personas[message.from];
    }
    return avatar;
  };

  let handleAction;
  let getMessages;

  let messages = _messages;
  let storeMessages = () => {};
  let { contexts } = state;
  let storeContexts = () => {};
  if (store.messenger.localStorage) {
    const [storedMessages, _storeMessages] = useLocalStorage('messages');
    if (Array.isArray(storedMessages) && storedMessages.length > 0) {
      messages = storedMessages.map((m, index) => {
        if (index < storedMessages.length - 1) {
          return { ...m, quick_replies: undefined };
        }
        return m;
      });
    }
    storeMessages = _storeMessages;
    const [storedContexts, _storeContexts] = useLocalStorage('contexts');
    if (storedContexts && Object.keys(storedContexts).length > 0) {
      contexts = storedContexts;
    }
    storeContexts = _storeContexts;
  }

  const saveMessages = async () => {
    const currentMessages = await getMessages();
    storeMessages(currentMessages);
  };

  const resetMessages = async () => {
    storeMessages([]);
  };

  const renderMessage = (message, hasPrevious, hasNext) => {
    const container = document.getElementsByClassName('ziiir-conversation')[0];
    const m = createElement(
      ui.Message,
      {
        key: message.created_time,
        createdtime: message.created_time,
        avatar: getAvatar(message),
        fromUser: message.from === 'user',
        onAction: handleAction,
        hideDate: state.messenger.hideDate,
        hasPrevious,
        hasNext,
        quickReplies: message.quick_replies,
        template: message.template,
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
    render(m, container, { ...store }, insert);
  };

  const handleEventMessage = async ({ type, message }) => {
    const container = document.getElementsByClassName('ziiir-conversation')[0];
    let response;
    if (type === 'newMessage') {
      if (Array.isArray(message)) {
        message.forEach((m, i, ms) => {
          const prev = ms[i - 1];
          const hasPrevious = !!prev && prev.from === m.from && m.created_time - prev.created_time < 2000;
          const next = ms[i + 1];
          const hasNext = !!next && next.from === m.from && next.created_time - m.created_time < 2000;
          renderMessage(m, hasPrevious, hasNext);
        });
      } else {
        renderMessage(message);
      }
      container.scrollTop = container.scrollHeight;
      saveMessages();
    } else if (type === 'resetMessages') {
      while (container.firstChild) {
        container.firstChild.remove();
      }
      resetMessages();
    } else if (type === 'newAction') {
      const handle = async (action) => {
        if (action.type === 'postform') {
          postFormAction(action.url, action.variables, action.params, action.headers);
        } else if (action.type === 'postjson') {
          response = await postJSONAction(action.url, action.variables, action.params, action.headers);
        } else if (action.type === 'postjsondownload') {
          response = await postJSONAction(action.url, action.variables, action.params, action.headers, 'blob');
        }
      };
      if (message.length === 1) {
        await handle(message[0]);
      } else {
        message.forEach((action) => {
          handle(action);
        });
      }
    }
    messageListener({ type, message });
    return response;
  };

  const [_getMessages, createMessage, sendMessage, commands] = await messaging({
    listener: handleEventMessage,
    messages,
    dataset,
    contexts,
    options: state.messenger.dialogOptions,
    actions,
    storeContexts,
  });
  getMessages = _getMessages;
  const handleNewMessage = (text) => {
    if (text.charAt(0) === '#') {
      commands(text);
    } else {
      const message = createMessage('user', text);
      sendMessage(message);
    }
  };

  handleAction = (action, payload) => {
    if (action === 'BUTTON') {
      const message = createMessage('user', payload);
      sendMessage(message);
    } else if (action === 'TOGGLE_MESSENGER') {
      store.messenger.isOpen = payload;
      saveStore(store);
    }
  };

  let msgs = await getMessages();
  msgs = msgs.map((_m) => {
    const m = _m;
    m.avatar = getAvatar(m);
    return m;
  });

  const el = await MessengerApp(msgs, handleNewMessage, handleAction, state.messenger.hideDate);
  render(el, root, { ...store });
  initFonts(state.theme, 'ziiircom-messenger-frame');
  return [store, getMessages, createMessage, sendMessage, commands, handleEventMessage];
};

export default ZiiirClient;
