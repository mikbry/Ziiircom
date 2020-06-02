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
import FAButton from './index';

test('FAButton should render correctly', () => {
  const { asFragment } = render(
    <>
      <FAButton />
      <FAButton icon='test' />
      <FAButton theme={{ palette: { secondary: 'red' } }} />
      <FAButton theme={{ palette: { secondary: '#eee', bubbleColor: '#000' } }} />
    </>,
  );
  expect(asFragment()).toMatchSnapshot();
});
