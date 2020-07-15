/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Dialog from './dialog';

test('Dialog without parameters should return undefined', () => {
  const value = Dialog();
  expect(value).toBe(undefined);
});

test('Dialog without empty intents array should return undefined', () => {
  const value = Dialog([]);
  expect(value).toBe(undefined);
});

test('Dialog with one intent should return matchIntent', () => {
  const [matchIntent, buildOutput] = Dialog([{ input: 'hello', output: 'hello' }]);
  const { matchs } = matchIntent({ text: 'hello' });
  expect(matchs[0].intent.output).toBe('hello');
  const { response } = buildOutput({ matchs });
  expect(response).toBe('hello');
});

test('Dialog with any intent.input should return matchIntent', () => {
  const [matchIntent, buildOutput] = Dialog([{ input: '*', output: 'hello' }]);
  const { matchs } = matchIntent({ text: 'hello' });
  expect(matchs[0].intent.output).toBe('hello');
  const { response } = buildOutput({ matchs });
  expect(response).toBe('hello');
});

test("Dialog not understand should return I don't understand", () => {
  const [matchIntent, buildOutput] = Dialog([{ input: 'hello', output: 'hello' }]);
  const { matchs } = matchIntent({ text: 'Yup' });
  const { response } = buildOutput({ matchs });
  expect(response).toBe("I don't understand");
});

test("Dialog matchIntent don't match should return empty matchs", () => {
  const [matchIntent] = Dialog([{ input: 'hello', output: 'hello' }]);
  const { matchs } = matchIntent({ text: 'hello you' });
  expect(matchs.length).toBe(0);
});

test('Dialog intents with multiple input should match', () => {
  const [matchIntent] = Dialog([{ input: ['hello', 'Hi'], output: 'hello' }]);
  const { matchs } = matchIntent({ text: 'hi' });
  expect(matchs[0].intent.output).toBe('hello');
});

test('Dialog intents with multiple input plus any should match', () => {
  const [matchIntent] = Dialog([{ input: ['hello', '*'], output: 'hello' }]);
  const { matchs } = matchIntent({ text: 'hi' });
  expect(matchs[0].intent.output).toBe('hello');
});

test('Dialog intents with multiple matchs plus any should match first', () => {
  const [matchIntent, buildOutput] = Dialog([
    { input: ['*'], output: 'ok' },
    { input: ['hello'], output: 'hello' },
    { input: ['hello'], output: 'hello' },
  ]);
  const { matchs } = matchIntent({ text: 'hello' });
  const { response } = buildOutput({ matchs });
  expect(response).toBe('hello');
});

test('Dialog intents with set should update context', () => {
  const [matchIntent, buildOutput] = Dialog([{ input: ['*'], output: 'ok', set: { var: 'value' } }]);
  const { matchs } = matchIntent({ text: 'hello' });
  const { response } = buildOutput({ matchs });
  expect(response).toBe('ok');
});

test('Dialog intents variables should display correctly', () => {
  const [matchIntent, buildOutput] = Dialog([{ input: ['*'], output: 'ok {{var}}{{dummy}}', set: { var: 'value' } }]);
  const { matchs, context } = matchIntent({ text: 'hello' });
  const { response } = buildOutput({ matchs, context });
  expect(response).toBe('ok value');
});

test('Dialog intents output array should display correctly', () => {
  const [matchIntent, buildOutput] = Dialog([{ input: ['*'], output: ['ok {{var}}'], set: { var: 'Bob' } }]);
  const { matchs, context } = matchIntent({ text: 'hello' });
  const { response } = buildOutput({ matchs, context });
  expect(response).toBe('ok Bob');
});

test('Dialog intents output condition should display correctly', () => {
  const [matchIntent, buildOutput] = Dialog([
    {
      input: ['*'],
      output: [
        {
          type: 'condition',
          children: [
            { name: 'var', value: 'notok', text: 'not ok {{var}}' },
            { name: 'var', text: 'not ok {{var}}' },
            { name: 'var', value: 'Bob', text: 'ok {{var}}' },
          ],
        },
      ],
      set: { var: 'Bob' },
    },
  ]);
  const { matchs, context } = matchIntent({ text: 'hello' });
  const { response } = buildOutput({ matchs, context });
  expect(response).toBe('ok Bob');
});

test('Dialog intents inline variables should display correctly', () => {
  const [matchIntent, buildOutput] = Dialog([
    { input: ['*'], output: 'ok {{var}}{{dummy}}<<var=none>>', set: { var: 'value' } },
  ]);
  const { matchs, context } = matchIntent({ text: 'hello' });
  const { response } = buildOutput({ matchs, context });
  expect(response).toBe('ok value');
});

test('Dialog intents output array with inline variables should display correctly', () => {
  const [matchIntent, buildOutput] = Dialog([
    { input: ['*'], output: ['ok {{var}}{{dummy}}<<var=none>>'], set: { var: 'value' } },
  ]);
  const { matchs, context } = matchIntent({ text: 'hello' });
  const { response } = buildOutput({ matchs, context });
  expect(response).toBe('ok value');
});

test('Dialog intents output condition with inline var should display correctly', () => {
  const [matchIntent, buildOutput] = Dialog([
    {
      input: ['*'],
      output: [
        {
          type: 'condition',
          children: [
            { name: 'var', value: 'notok', text: 'not ok {{var}}' },
            { name: 'var', text: 'not ok <<var=Not ok>>' },
            { name: 'var', value: 'Bob', text: 'ok {{var}}<<var=ok>>' },
          ],
        },
      ],
      set: { var: 'Bob' },
    },
  ]);
  const { matchs, context } = matchIntent({ text: 'hello' });
  const { response } = buildOutput({ matchs, context });
  expect(response).toBe('ok Bob');
});

test('Dialog intents inline assigned variables should display correctly', () => {
  const [matchIntent, buildOutput] = Dialog([{ input: ['*'], output: 'ok {{var=*}}' }]);
  const { matchs, context } = matchIntent({ text: 'hello' });
  const { response, entities } = buildOutput({ matchs, context });
  expect(response).toBe('ok hello');
  expect(entities.length).toBe(1);
  expect(entities[0].type).toBe('any');
  expect(entities[0].value).toBe('hello');
});

test('Dialog links should display correctly', () => {
  let [matchIntent, buildOutput] = Dialog([{ input: ['*'], output: 'ok [link](https://url)' }]);
  let { matchs, context } = matchIntent({ text: 'hello' });
  let { response } = buildOutput({ matchs, context });
  expect(response).toBe('ok <a href="https://url" target="_blank" rel="noopener noreferrer">link</a>');
  [matchIntent, buildOutput] = Dialog([{ input: ['*'], output: 'ok https://url' }]);
  ({ matchs, context } = matchIntent({ text: 'hello' }));
  ({ response } = buildOutput({ matchs, context }));
  expect(response).toBe('ok <a href="https://url" target="_blank" rel="noopener noreferrer">https://url</a>');
  [matchIntent, buildOutput] = Dialog([{ input: ['*'], output: 'ok https://url.png' }]);
  ({ matchs, context } = matchIntent({ text: 'hello' }));
  ({ response } = buildOutput({ matchs, context }));
  expect(response).toBe(
    'ok <a href="https://url.png" target="_blank" rel="noopener noreferrer"><img src="https://url.png" alt="https://url.png" /></a>',
  );
});
