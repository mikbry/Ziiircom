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
import Header from './index';

test('Header should render correctly', () => {
  const { asFragment } = render(<Header>Title</Header>);
  expect(asFragment()).toMatchSnapshot();
});

test('Header should render button', () => {
  const handleAction = jest.fn();
  const { getByRole } = render(<Header closeButton={{ onClose: handleAction }}>title</Header>);
  const button = getByRole('button');
  button.click();
  expect(handleAction).toBeCalledTimes(1);
});
