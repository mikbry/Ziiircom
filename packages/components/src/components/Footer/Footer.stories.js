/* eslint-disable react/jsx-filename-extension */
/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import CFooter from './Footer';

export default {
  title: 'React-UI|Components|Footer',
  parameters: { component: CFooter, componentSubtitle: 'Display informations and actions related to the current page' },
};

export const Footer = () => (
  <div>
    <CFooter>Text</CFooter>
  </div>
);
Footer.story = {
  parameters: {},
};
