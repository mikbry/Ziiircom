/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useMessaging from './index';

test('Messaging without type should return echo', async () => {
  const handleEventMessage = async () => {};
  const messaging = await useMessaging();
  expect(messaging).toBeDefined();
  const [getMessages, createMessage, sendMessage, commands] = await messaging({ listener: handleEventMessage });
  expect(getMessages).toBeDefined();
  expect(createMessage).toBeDefined();
  expect(sendMessage).toBeDefined();
  expect(commands).toBeDefined();
  await sendMessage(createMessage('user', 'hello'));
  const messages = await getMessages();
  expect(messages.length).toBe(2);
});

test('Messaging with messages should add them', async () => {
  const handleEventMessage = async () => {};
  const messaging = await useMessaging();
  expect(messaging).toBeDefined();
  const [getMessages] = await messaging({
    listener: handleEventMessage,
    messages: [
      { from: 'u1', text: 'hello' },
      { from: 'u2', text: 'hello', created_time: 12 },
    ],
  });
  const messages = await getMessages();
  expect(messages.length).toBe(2);
});

test('Messaging command #reset should erase messages', async () => {
  let type;
  const handleEventMessage = async ({ type: t }) => {
    type = t;
  };
  const messaging = await useMessaging('dialog');
  expect(messaging).toBeDefined();
  const [getMessages, createMessage, sendMessage, commands] = await messaging({
    listener: handleEventMessage,
    dataset: [{ input: 'hello', output: { text: 'hello', quick_replies: [{ title: 'ok' }] } }],
  });
  await sendMessage(createMessage('user', 'hello'));
  let messages = await getMessages();
  expect(messages.length).toBe(2);
  commands('#reset');
  messages = await getMessages();
  expect(messages.length).toBe(0);
  expect(type).toBe('resetMessages');
});

test('Messaging unknown command should emit unknownCommand', async () => {
  let type;
  const handleEventMessage = async ({ type: t }) => {
    type = t;
  };
  const messaging = await useMessaging('dialog');
  expect(messaging).toBeDefined();
  const [, , , commands] = await messaging({
    listener: handleEventMessage,
    dataset: [{ input: 'hello', output: 'hello' }],
  });
  commands('#dummy');
  expect(type).toBe('unknownCommand');
});

test('Messaging dialog type should return dialog Messaging', async () => {
  const handleEventMessage = async () => {};
  const messaging = await useMessaging('dialog');
  expect(messaging).toBeDefined();
  const [getMessages, createMessage, sendMessage, commands] = await messaging({
    listener: handleEventMessage,
    dataset: [{ input: 'hello', output: 'hello' }],
  });
  expect(getMessages).toBeDefined();
  expect(createMessage).toBeDefined();
  expect(sendMessage).toBeDefined();
  expect(commands).toBeDefined();
  await sendMessage(createMessage('user', 'hello'));
  const messages = await getMessages();
  expect(messages.length).toBe(2);
});

test("Messaging dialog unknown input should return I don't understand", async () => {
  const handleEventMessage = async () => {};
  const messaging = await useMessaging('dialog');
  expect(messaging).toBeDefined();
  const [getMessages, createMessage, sendMessage, commands] = await messaging({
    listener: handleEventMessage,
    dataset: [{ input: 'hello', output: 'hello' }],
  });
  expect(getMessages).toBeDefined();
  expect(createMessage).toBeDefined();
  expect(sendMessage).toBeDefined();
  expect(commands).toBeDefined();
  await sendMessage(createMessage('user', 'Yo'));
  const messages = await getMessages();
  expect(messages.length).toBe(2);
  expect(messages[1].text).toBe("I don't understand");
});

test('Messaging dialog actions shoud emit newAction event', async () => {
  let blob;
  const handleEventMessage = async (b) => {
    blob = b;
  };
  const messaging = await useMessaging('dialog');
  expect(messaging).toBeDefined();
  const [, createMessage, sendMessage] = await messaging({
    listener: handleEventMessage,
    dataset: [
      {
        input: 'hello',
        output: { text: 'ok', actions: [{ type: 'test', name: 'action', variables: { v1: 'value' } }] },
      },
    ],
  });
  await sendMessage(createMessage('user', 'hello'));
  expect(blob.type).toBe('newAction');
});

test('Messaging dialog global actions shoud emit newAction event', async () => {
  let blob;
  const handleEventMessage = async (b) => {
    blob = b;
  };
  const messaging = await useMessaging('dialog');
  expect(messaging).toBeDefined();
  const [, createMessage, sendMessage] = await messaging({
    listener: handleEventMessage,
    dataset: [
      {
        input: 'hello',
        output: { text: 'ok', actions: [{ name: 'action' }] },
      },
    ],
    actions: { action: { type: 'action', variables: { v1: 'value' } } },
  });
  await sendMessage(createMessage('user', 'hello'));
  expect(blob.type).toBe('newAction');
});
