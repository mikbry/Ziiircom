/* eslint-disable react/jsx-filename-extension */
/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import AButton from './Button';

export default {
  title: 'React-UI|Components',
  parameters: { component: AButton, componentSubtitle: 'Serve as a wrapper for all elements' },
};

export const Button = () => (
  <div>
    <AButton>button</AButton>
  </div>
);
Button.story = {
  parameters: {},
};
