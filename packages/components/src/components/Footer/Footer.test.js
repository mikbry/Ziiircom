/* eslint-disable react/jsx-filename-extension */
/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { render } from '@testing-library/react';
import Footer from './index';

test('Footer should render correctly', () => {
  const { asFragment } = render(<Footer>Title</Footer>);
  expect(asFragment()).toMatchSnapshot();
});
