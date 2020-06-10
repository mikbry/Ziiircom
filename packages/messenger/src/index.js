/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import client from './client';

export const defaultClient = async (root, messageListener, initialState = { messenger: {} }) => {
  let config;
  let messageHook;
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
    try {
      messageHook = (await import('./hooks/dialog')).default;
      dataset = state.intents;
    } catch (err) {
      // console.log('no config found');
    }
  }
  if (!messageHook) {
    try {
      messageHook = (await import('./hooks/echo')).default;
    } catch (err) {
      // console.log('no config found');
    }
  }

  return client({ state, messageHook, root, messageListener, dataset });
};

if (process.env.NODE_ENV === 'development') {
  defaultClient(document.body);
}

export default client;
