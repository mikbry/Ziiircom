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
  setup({ createElement, styled });
  createStore({ isOpen: true });
  const el = await App();
  render(el, document.body);
})();
