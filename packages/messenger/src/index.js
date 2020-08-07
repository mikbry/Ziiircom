/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import useMessaging from '@ziiircom/messaging';

import client from './ZiiirClient';

const messenger = async (initialState = {}, messageListener, root = document.body) => {
  let config;
  let dataset;
  try {
    // config = await import('./config.json');
    // config = config.default;
    const response = await fetch('./config.json');
    config = await response.json();
  } catch (err) {
    // console.log('no config found');
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
      try {
        const response = await fetch(state.dataset.src);
        dataset = await response.json();
      } catch (err) {
        // console.log('no intents found', err);
      }
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
  return client({ state, messaging, root, messageListener, dataset, messages: state.messages });
};

if (process.env.NODE_ENV === 'development') {
  messenger();
}

export default messenger;
