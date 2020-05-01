/* eslint-disable react/jsx-filename-extension */
/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Fab from './FAButton';

export default {
  title: 'React-UI|Components',
  parameters: { component: Fab, componentSubtitle: 'Serve as a wrapper for all elements' },
};

export const FAButton = () => (
  <div>
    <Fab />
  </div>
);
FAButton.story = {
  parameters: {},
};
