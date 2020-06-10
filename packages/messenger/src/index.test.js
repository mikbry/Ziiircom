/* eslint-disable jest/no-test-callback */
/* eslint-disable import/no-extraneous-dependencies */
/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { screen, fireEvent } from '@testing-library/dom';
import { MockupEvent } from '@ziiircom/test';
import client, { defaultClient } from './index';

beforeEach(() => {
  document.body.innerHTML = '<div></div>';
});

test('client should be defined"', () => {
  expect(client).toBeDefined();
});

// eslint-disable-next-line prettier/prettier
test('defaultClient should be started and respond to input"', async (done) => {
  let count = 0;
  const messageListener = ({ type, message }) => {
    count += 1;
    if (count === 2) {
      const conversation = document.getElementsByClassName('ziiir-conversation')[0];
      expect(conversation.children.length).toBe(2);
      expect(conversation.children[0].firstChild.firstChild.innerText).toBe('hello');
      expect(conversation.children[1].firstChild.firstChild.innerText).toBe('You say : hello');
      done();
    }
    return { type, message };
  };
  await defaultClient(document.body, messageListener, { intents: undefined, messenger: {} });
  const input = await screen.findByPlaceholderText('Your message');
  input.value = 'hello';
  fireEvent(
    input,
    new MockupEvent('keyup', {
      bubbles: true,
      key: 'Enter',
    }),
  );
  expect(input.value).toBe('');
});

test("defaultClient withut matching should return I don't understand", async done => {
  let count = 0;
  const messageListener = ({ type, message }) => {
    count += 1;
    if (count === 2) {
      const conversation = document.getElementsByClassName('ziiir-conversation')[0];
      expect(conversation.children.length).toBe(2);
      expect(conversation.children[0].firstChild.firstChild.innerText).toBe('Yup');
      expect(conversation.children[1].firstChild.firstChild.innerText).toBe("I don't understand");
      done();
    }
    return { type, message };
  };
  await defaultClient(document.body, messageListener, {
    intents: [{ input: 'hello', output: 'hello' }],
    messenger: {},
  });
  const input = await screen.findByPlaceholderText('Your message');
  input.value = 'Yup';
  fireEvent(
    input,
    new MockupEvent('keyup', {
      bubbles: true,
      key: 'Enter',
    }),
  );
  expect(input.value).toBe('');
});

test('message #reset should reset conversation"', async () => {
  const [, getMessages, createMessage, sendMessage] = await defaultClient(document.body);
  const messages = await getMessages();
  expect(messages.length).toBe(0);
  let msg = createMessage('user', 'hello');
  await sendMessage(msg);
  msg = createMessage('user', 'hello');
  msg.created_time = 0;
  await sendMessage(msg);
  const input = await screen.findByPlaceholderText('Your message');
  input.value = '#reset';
  fireEvent(
    input,
    new MockupEvent('keyup', {
      bubbles: true,
      key: 'Enter',
    }),
  );
  expect(input.value).toBe('');
  const conversation = document.getElementsByClassName('ziiir-conversation')[0];
  expect(conversation.children.length).toBe(0);
});

test('message #dummy should do nothing"', async () => {
  await defaultClient(document.body);
  const input = await screen.findByPlaceholderText('Your message');
  input.value = '#dummy';
  fireEvent(
    input,
    new MockupEvent('keyup', {
      bubbles: true,
      key: 'Enter',
    }),
  );
  expect(input.value).toBe('');
});

test('Messenger by default should be closed"', async () => {
  await defaultClient(document.body);
  const messenger = document.body.getElementsByClassName('ziiircom-messenger')[0];
  expect(messenger).toHaveClass('isclosed');
});

test('Messenger with state.isOpen=true should be opened"', async () => {
  await defaultClient(document.body, null, { messenger: { isOpen: true } });
  const messenger = document.body.getElementsByClassName('ziiircom-messenger')[0];
  expect(messenger).toHaveClass('isopen');
});

test('Messenger click on fab should open messenger"', async () => {
  await defaultClient(document.body);
  const fab = document.body.getElementsByClassName('ziiircom-messenger-fab')[0];
  fireEvent.click(fab);
  const messenger = document.body.getElementsByClassName('ziiircom-messenger')[0];
  expect(messenger).toHaveClass('isopen');
});

test('Messenger opened click outside should close it"', async () => {
  await defaultClient(document.body, null, { messenger: { isOpen: true } });
  const messenger = document.body.getElementsByClassName('ziiircom-messenger')[0];
  expect(messenger).toHaveClass('isopen');
  fireEvent.click(messenger.firstChild);
  // Click inside don't close
  expect(messenger).toHaveClass('isopen');
  fireEvent.click(messenger);
  // Click outside close
  expect(messenger).toHaveClass('isclosed');
});
