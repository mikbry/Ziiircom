/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import client from './client';

if (process.env.NODE_ENV === 'development') {
  (async () => {
    let config;
    let messageHook;
    try {
      config = await import('./config.json');
      // TODO load from config another messageHook
      messageHook = await import('./hooks/echo');
    } catch (err) {
      // console.log('no config found');
    }
    if (!config) {
      config = { isOpen: true };
    }
    client(config, messageHook.default);
  })();
}

export default client;
