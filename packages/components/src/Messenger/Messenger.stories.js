/* eslint-disable react/jsx-filename-extension */
/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Messenger from './Messenger';

export default {
  title: 'React-UI|Messenger',
  parameters: {
    component: Messenger,
    componentSubtitle: 'Display informations and actions related to the current page',
  },
};

export const Basic = () => (
  <div>
    <Messenger />
  </div>
);
Basic.story = {
  parameters: {},
};
