/* eslint-disable react/jsx-filename-extension */
/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MockupEvent } from '@ziiircom/test';
import Messenger from './Messenger';

test('Messenger should render correctly', () => {
  const { asFragment } = render(<Messenger />);
  expect(asFragment()).toMatchSnapshot();
});

test('Messenger should have an input field', async () => {
  const { findByPlaceholderText } = render(<Messenger />);
  const input = await findByPlaceholderText('Your message');
  expect(input).toBeDefined();
  fireEvent(
    input,
    new MockupEvent('keyup', {
      bubbles: true,
      key: 'Enter',
    }),
  );
  expect(input.value).toBe('');
});

test('Messenger should trigger onMessage', async () => {
  const onMessage = jest.fn();
  const { findByPlaceholderText } = render(
    <Messenger onMessage={onMessage} input={{ display: true, sendButton: { icon: {} } }} />,
  );
  const input = await findByPlaceholderText('Your message');
  expect(input).toBeDefined();
  input.value = 'text';
  fireEvent(
    input,
    new MockupEvent('keyup', {
      bubbles: true,
      key: 'Enter',
    }),
  );
  expect(onMessage).toHaveBeenCalledTimes(1);
  expect(input.value).toBe('');
});

test('Messenger should not trigger onMessage', async () => {
  const { findByPlaceholderText } = render(
    <Messenger input={{ display: true, sendButton: { icon: { src: 'test' } } }} />,
  );
  const input = await findByPlaceholderText('Your message');
  expect(input).toBeDefined();
  input.value = 'text';
  fireEvent(
    input,
    new MockupEvent('keyup', {
      bubbles: true,
      key: 'Enter',
    }),
  );
  expect(input.value).toBe('');
});

test('Messenger send button should trigger onMessage', async () => {
  const onMessage = jest.fn();
  const { findByPlaceholderText, getByText } = render(
    <Messenger onMessage={onMessage} input={{ display: true, sendButton: {} }} />,
  );
  const button = getByText('send');
  button.click();
  expect(onMessage).toHaveBeenCalledTimes(0);
  const input = await findByPlaceholderText('Your message');
  input.value = 'text';
  button.click();
  expect(onMessage).toHaveBeenCalledTimes(1);
  expect(input.value).toBe('');
});

test('Messenger without input.display should not have an input field', async () => {
  const { queryByPlaceholderText } = render(<Messenger input={{ display: false }} />);
  const input = queryByPlaceholderText('Your message');
  expect(input).toBeNull();
});

test('Messenger should not expand', async () => {
  const { queryByPlaceholderText } = render(<Messenger isExpanded={false} />);
  const input = queryByPlaceholderText('Your message');
  expect(input).toBeDefined();
});

test('Messenger with messages should display them', async () => {
  const { getAllByText } = render(
    <Messenger
      input={{ display: false }}
      messages={[
        { created_time: 0, avatar: { src: 'avatar', name: 'avatar' }, text: 'Message', from: 'true' },
        { created_time: 1, text: 'Message', from: 'false' },
        { created_time: 2, avatar: { src: 'avatar', name: 'avatar' }, text: 'Message', from: 'true' },
        { created_time: 3, avatar: { src: 'avatar', name: 'avatar' }, text: 'Message', from: 'false' },
        { created_time: 4, text: 'Message', from: 'false' },
        { created_time: 5, text: 'Message', from: 'false' },
      ]}
    />,
  );
  const messages = getAllByText('Message');
  expect(messages.length).toBe(6);
});
