/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Interface, setup } from '@ziichat/components';
import { createElement } from './utils/builder';
import { styled } from './utils/styled';
import App from './app';

// TODO
setup({ createElement, styled });
console.log('webchat', App, Interface);
App();
