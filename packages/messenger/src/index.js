/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import useMessaging from '@ziiircom/messaging';
import { deepCopy } from '@ziiircom/common';

import ziiirClient from './ZiiirClient';

const messenger = async (initialState = {}, messageListener, root = document.body) => {
  let { config } = initialState;
  const { configFile = './config.json' } = initialState;
  let dataset;

  if (!config && configFile) {
    try {
      const response = await fetch(configFile);
      config = await response.json();
    } catch (err) {
      // console.log('no config found');
    }
  }

  if (!config) {
    config = {};
  }
  const state = { ...config, ...initialState };
  if (!state.messenger) {
    state.messenger = {};
  }
  if (state.dataset) {
    if (state.dataset.src) {
      dataset = [];
      const sources = Array.isArray(state.dataset.src) ? state.dataset.src : [state.dataset.src];
      // eslint-disable-next-line no-restricted-syntax
      for (const src of sources) {
        try {
          // eslint-disable-next-line no-await-in-loop
          const response = await fetch(src);
          // eslint-disable-next-line no-await-in-loop
          const d = await response.json();
          let intents;
          if (d.intents) {
            intents = deepCopy(dataset.intents, d.intents);
          }
          dataset = deepCopy(dataset, d);
          if (intents) {
            dataset.intents = intents;
          }
        } catch (err) {
          // console.log('no intents found', err);
        }
      }
      /* try {
        const response = await fetch(state.dataset.src);
        dataset = await response.json();
      } catch (err) {
        // console.log('no intents found', err);
      } */
    } else {
      ({ dataset } = state);
    }
    if (dataset && dataset.intents) {
      dataset = dataset.intents;
    }
  } else if (state.intents) {
    if (state.intents.src) {
      try {
        const response = await fetch(state.intents.src);
        dataset = await response.json();
      } catch (err) {
        // console.log('no intents found', err);
      }
    } else {
      dataset = state.intents;
    }
  }
  const messagingType = dataset ? 'dialog' : undefined;
  const messaging = await useMessaging(messagingType);
  const [store, getMessages, createMessage, sendMessage, commands, handleEventMessage] = await ziiirClient({
    state,
    messaging,
    root,
    messageListener,
    dataset,
    messages: state.messages,
  });
  window.ziiircom = {
    name: 'Ziiircom',
    store,
    getMessages,
    createMessage,
    sendMessage,
    commands,
    handleEventMessage,
  };
  return [store, getMessages, createMessage, sendMessage, commands, handleEventMessage];
};

if (process.env.NODE_ENV === 'development') {
  messenger();
}

export default messenger;
