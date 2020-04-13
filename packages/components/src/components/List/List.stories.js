/* eslint-disable react/jsx-filename-extension */
/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import CList from './List';

export default {
  title: 'React-UI|Components|List',
  parameters: { component: CList, componentSubtitle: 'Display informations and actions related to the current page' },
};

export const List = () => (
  <div>
    <CList>
      <div>Element 1</div>
      <div>Element 2</div>
      <div>Element 3</div>
      <div>Element 4</div>
    </CList>
  </div>
);
List.story = {
  parameters: {},
};
