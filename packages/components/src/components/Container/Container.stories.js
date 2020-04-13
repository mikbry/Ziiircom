/* eslint-disable react/jsx-filename-extension */
/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import CContainer from './Container';

export default {
  title: 'React-UI|Components',
  parameters: { component: CContainer, componentSubtitle: 'Serve as a wrapper for all elements' },
};

export const Container = () => (
  <div>
    <CContainer>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
      inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
      quibusdam.
    </CContainer>
  </div>
);

Container.story = {
  parameters: {},
};
