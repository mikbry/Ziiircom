/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Interface, setup } from '@ziichat/components';
import { createElement, render } from './utils/builder';
import { styled } from './utils/styled';
import App from './app';

(async () => {
  setup({ createElement, styled });
  console.log('webchat', App, Interface);
  const el = await App();
  render(el, document.getElementById('root'));
})();
