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
import Message from './index';
import Theme from '../../Theme';

test('Message should render correctly', () => {
  const { asFragment } = render(<Message>message</Message>);
  expect(asFragment()).toMatchSnapshot();
});

test('Message should render button', () => {
  const handleAction = jest.fn();
  const theme = { ...Theme };
  theme.palette.button = { border: 'none', background: 'white', color: 'red' };
  const body = 'message<button>ok</button>';
  const { getByRole } = render(
    <Message onAction={handleAction} them={theme}>
      {body}
    </Message>,
  );
  const button = getByRole('button');
  button.click();
  button.parentElement.click();
  expect(handleAction).toBeCalledTimes(1);
  const { getAllByRole } = render(
    <Message onAction={handleAction} hideDate fromUser hasPrevious hasNext quickReplies={[{ title: 'ok' }]}>
      {[body]}
    </Message>,
  );
  const buttons = getAllByRole('button');
  buttons[0].click();
  expect(handleAction).toBeCalledTimes(2);
});
