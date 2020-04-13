/* eslint-disable react/jsx-filename-extension */
/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import CBox from './Box';

export default {
  title: 'React-UI|Components',
  parameters: { component: CBox, componentSubtitle: 'Serve as a wrapper for all elements' },
};

export const Box = () => (
  <div>
    <CBox>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
      inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
      quibusdam.
    </CBox>
  </div>
);
Box.story = {
  parameters: {},
};
