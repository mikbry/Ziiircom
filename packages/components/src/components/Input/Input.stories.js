/* eslint-disable react/jsx-filename-extension */
/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Input from './Input';

export default {
  title: 'React-UI|Components',
  parameters: { component: Input, componentSubtitle: 'Displays a Input filled with a color' },
};

export const SimpleInput = () => (
  <div>
    <Input defaultValue='some text' />
  </div>
);
SimpleInput.story = {
  parameters: {},
};
