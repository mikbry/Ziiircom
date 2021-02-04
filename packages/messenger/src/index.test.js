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
import { MockupEvent, mockFetch } from '@ziiircom/test';
import messenger from './index';

beforeEach(() => {
  document.body.innerHTML = '<div></div>';
  // fetch.mockClear();
});

test('client should be defined"', () => {
  expect(messenger).toBeDefined();
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
  await messenger(
    {
      theme: {
        fonts: { text: { name: 'Raleway', url: 'https://fonts.googleapis.com/css?family=Raleway:400,700' } },
        messenger: { width: '400px' },
      },
      intents: undefined,
      messenger: {},
    },
    messageListener,
  );
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

test('defaultClient should load intents if state.intents.src', async (done) => {
  let count = 0;
  const closeMockFetch = mockFetch([{ input: 'hello', output: 'hello' }]);
  const messageListener = ({ type, message }) => {
    count += 1;
    if (count === 2) {
      const conversation = document.getElementsByClassName('ziiir-conversation')[0];
      expect(conversation.children.length).toBe(2);
      expect(conversation.children[0].firstChild.firstChild.innerText).toBe('hello');
      expect(conversation.children[1].firstChild.firstChild.innerText).toBe('hello');
      expect(global.fetch).toHaveBeenCalledTimes(2);
      closeMockFetch();
      done();
    }
    return { type, message };
  };
  await messenger({ intents: { src: 'url' }, messenger: {} }, messageListener);
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

test('defaultClient should load intents if state.dataset.src', async (done) => {
  let count = 0;
  const closeMockFetch = mockFetch([{ input: 'hello', output: ['hello', 'I am Bob', 'How are you ?'] }]);
  const messageListener = ({ type, message }) => {
    count += 1;
    if (count === 2) {
      const conversation = document.getElementsByClassName('ziiir-conversation')[0];
      expect(conversation.children.length).toBe(4);
      expect(conversation.children[0].firstChild.firstChild.innerText).toBe('hello');
      expect(conversation.children[1].firstChild.firstChild.innerText).toBe('hello');
      expect(global.fetch).toHaveBeenCalledTimes(2);
      closeMockFetch();
      done();
    }
    return { type, message };
  };
  await messenger({ dataset: { src: 'url' }, messenger: { header: { closeButton: {} } } }, messageListener);
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

test("defaultClient without matching should return I don't understand", async (done) => {
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
  await messenger(
    {
      intents: [{ input: 'hello', output: 'hello' }],
      messenger: {},
    },
    messageListener,
  );
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
  const [, getMessages, createMessage, sendMessage] = await messenger();
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
  await messenger();
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
  await messenger();
  const container = document.body.getElementsByClassName('ziiircom-messenger')[0];
  expect(container).toHaveClass('isclosedstart');
});

test('Messenger with state.isOpen=true should be opened"', async () => {
  await messenger({ messenger: { isOpen: true } });
  const container = document.body.getElementsByClassName('ziiircom-messenger')[0];
  expect(container).toHaveClass('isopen');
});

test('Messenger click on fab should open messenger"', async () => {
  await messenger();
  const fab = document.body.getElementsByClassName('ziiircom-messenger-fab')[0];
  fireEvent.click(fab);
  const container = document.body.getElementsByClassName('ziiircom-messenger')[0];
  expect(container).toHaveClass('isopen');
});

test('Messenger opened click outside should close it"', async () => {
  await messenger({ messenger: { isOpen: true } });
  const container = document.body.getElementsByClassName('ziiircom-messenger')[0];
  expect(container).toHaveClass('isopen');
  fireEvent.click(container.firstChild);
  // Click inside don't close
  expect(container).toHaveClass('isopen');
  fireEvent.click(container);
  // Click outside close
  expect(container).toHaveClass('isclosed');
});

test('defaultClient should respond to input button', async (done) => {
  let count = 0;
  const messageListener = ({ type, message }) => {
    count += 1;
    if (count === 2) {
      const conversation = document.getElementsByClassName('ziiir-conversation')[0];
      expect(conversation.children.length).toBe(3);
      expect(conversation.children[1].firstChild.firstChild.innerText).toBe('hello');
      // expect(conversation.children[1].firstChild.firstChild.innerText).toBe('hello ok');
    } else if (count === 3) {
      done();
    }
    return { type, message };
  };
  await messenger(
    {
      intents: [{ input: 'hello', output: 'hello<button>ok</button>' }],
      messenger: {},
      messages: [{ from: 'bot', avatar: { src: 'bot', name: 'bot' }, text: 'hello' }],
    },
    messageListener,
  );
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
  const button = await screen.findByRole('button');
  button.click();
});

test('defaultClient with postform action should call fetch', async (done) => {
  global.encodeURIComponent = jest.fn();
  const closeMockFetch = mockFetch({});
  const messageListener = ({ type, message }) => {
    if (type === 'newAction') {
      expect(fetch).toHaveBeenCalledTimes(2);
      done();
      closeMockFetch();
      delete global.encodeURIComponent;
    }
    return { type, message };
  };
  await messenger(
    {
      intents: [
        {
          input: 'hello',
          output: {
            text: 'ok',
            actions: [
              { type: 'postform', name: 'action', variables: { v1: 'value' }, params: { p: 'v' } },
              { type: 'test', name: 'action', variables: { v1: 'value' }, params: {} },
            ],
          },
        },
      ],
      messenger: {},
    },
    messageListener,
  );
  const input = await screen.findByPlaceholderText('Your message');
  input.value = 'hello';
  fireEvent(
    input,
    new MockupEvent('keyup', {
      bubbles: true,
      key: 'Enter',
    }),
  );
  // expect(input.value).toBe('');
});
