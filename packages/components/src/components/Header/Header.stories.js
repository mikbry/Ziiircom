/* eslint-disable react/jsx-filename-extension */
/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import CHeader from './Header';

export default {
  title: 'React-UI|Components|Header',
  parameters: { component: CHeader, componentSubtitle: 'Display informations and actions related to the current page' },
};

export const Header = () => (
  <div>
    <CHeader>Title</CHeader>
  </div>
);
Header.story = {
  parameters: {},
};
