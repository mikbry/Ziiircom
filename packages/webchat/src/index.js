/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { setup } from '@ziiircom/components';
import { createElement, render } from './utils/builder';
import { styled } from './utils/styled';
import createStore from './utils/store';
import App from './app';

(async () => {
  let config;
  try {
    config = await import('./config.json');
  } catch (err) {
    // console.log('no config found');
  }
  if (!config) {
    config = { isOpen: true };
  }
  setup({ createElement, styled });
  const store = createStore(config);
  const el = await App();
  render(el, document.body, { ...store });
})();
