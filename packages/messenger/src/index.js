/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import useMessaging from '@ziiircom/messaging';

import client from './client';

export const defaultClient = async (root, messageListener, initialState = { messenger: {} }) => {
  let config;
  let dataset;
  try {
    config = await import('./config.json');
    config = config.default;
  } catch (err) {
    // console.log('no config found');
  }
  if (!config) {
    config = {};
  }
  const state = { ...config, ...initialState };
  if (state.intents) {
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
  return client({ state, messaging, root, messageListener, dataset });
};

if (process.env.NODE_ENV === 'development') {
  defaultClient(document.body);
}

export default client;
