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
  expect(response[0]).toBe('hello');
});

test('Dialog with any intent.input should return matchIntent', () => {
  const [matchIntent, buildOutput] = Dialog([{ input: '*', output: 'hello' }]);
  const { matchs } = matchIntent({ text: 'hello' });
  expect(matchs[0].intent.output).toBe('hello');
  const { response } = buildOutput({ matchs });
  expect(response[0]).toBe('hello');
});

test("Dialog not understand should return I don't understand", () => {
  const [matchIntent, buildOutput] = Dialog([{ input: 'hello', output: 'hello' }]);
  const { matchs } = matchIntent({ text: 'Yup' });
  const { response } = buildOutput({ matchs });
  expect(response[0]).toBe("I don't understand");
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
  expect(response[0]).toBe('hello');
});

test('Dialog intents with set should update context', () => {
  const [matchIntent, buildOutput] = Dialog([{ input: ['*'], output: 'ok', set: { var: 'value' } }]);
  const { matchs } = matchIntent({ text: 'hello' });
  const { response } = buildOutput({ matchs });
  expect(response[0]).toBe('ok');
});

test('Dialog intents with quick_replies should send back', () => {
  const [matchIntent, buildOutput] = Dialog([
    { input: ['*'], output: { text: 'ok', quick_replies: [{ title: 'ok' }] } },
  ]);
  const { matchs } = matchIntent({ text: 'hello' });
  const { quick_replies: qr } = buildOutput({ matchs });
  expect(qr[0].title).toBe('ok');
});

test('Dialog intents variables should display correctly', () => {
  const [matchIntent, buildOutput] = Dialog([{ input: ['*'], output: 'ok {{var}}{{dummy}}', set: { var: 'value' } }]);
  const { matchs, context } = matchIntent({ text: 'hello' });
  const { response } = buildOutput({ matchs, context });
  expect(response[0]).toBe('ok value');
});

test('Dialog intents output array should display correctly', () => {
  const [matchIntent, buildOutput] = Dialog([{ input: ['*'], output: ['ok {{var}}'], set: { var: 'Bob' } }]);
  const { matchs, context } = matchIntent({ text: 'hello' });
  const { response } = buildOutput({ matchs, context });
  expect(response[0]).toBe('ok Bob');
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
  expect(response[0]).toBe('ok Bob');
});

test('Dialog intents inline variables should display correctly', () => {
  const [matchIntent, buildOutput] = Dialog([
    { input: ['*'], output: 'ok {{var}}{{dummy}}<<var=none>>', set: { var: 'value' } },
  ]);
  const { matchs, context } = matchIntent({ text: 'hello' });
  const { response } = buildOutput({ matchs, context });
  expect(response[0]).toBe('ok value');
});

test('Dialog intents output array with inline variables should display correctly', () => {
  const [matchIntent, buildOutput] = Dialog([
    { input: ['*'], output: ['ok {{var}}{{dummy}}<<var=none>>'], set: { var: 'value' } },
  ]);
  const { matchs, context } = matchIntent({ text: 'hello' });
  const { response } = buildOutput({ matchs, context });
  expect(response[0]).toBe('ok value');
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
            { name: 'var', value: 'Bob', text: ['ok {{var}}<<var=ok>>'] },
          ],
        },
      ],
      set: { var: 'Bob' },
    },
  ]);
  const { matchs, context } = matchIntent({ text: 'hello' });
  const { response, context: ctx } = buildOutput({ matchs, context });
  expect(response[0]).toBe('ok Bob');
  expect(ctx.var).toBe('ok');
});

test('Dialog intents inline output assigned variables should display correctly', () => {
  const [matchIntent, buildOutput] = Dialog([{ input: ['*'], output: ['ok {{var=*}}'] }]);
  const { matchs, context } = matchIntent({ text: 'hello' });
  const { response, entities } = buildOutput({ matchs, context });
  expect(response[0]).toBe('ok hello');
  expect(entities.length).toBe(1);
  expect(entities[0].type).toBe('any');
  expect(entities[0].value).toBe('hello');
});

test('Dialog intents inline assigned variable should display correctly', () => {
  const [matchIntent, buildOutput] = Dialog([{ input: ['*'], output: ['ok<<var=*>>'] }]);
  const { matchs, context } = matchIntent({ text: 'hello' });
  const { response, entities, context: ctx } = buildOutput({ matchs, context });
  expect(response[0]).toBe('ok');
  expect(entities.length).toBe(1);
  expect(entities[0].type).toBe('any');
  expect(entities[0].value).toBe('hello');
  expect(ctx.var).toBe('hello');
});

test('Dialog intents previous inline assigned variable should display correctly', () => {
  const [matchIntent, buildOutput] = Dialog([{ input: ['*'], output: ['<<var=*>>ok {{var}}'] }]);
  const { matchs, context } = matchIntent({ text: 'hello' });
  const { response, entities, context: ctx } = buildOutput({ matchs, context });
  expect(response[0]).toBe('ok hello');
  expect(entities.length).toBe(1);
  expect(entities[0].type).toBe('any');
  expect(entities[0].value).toBe('hello');
  expect(ctx.var).toBe('hello');
});

test('Dialog links should display correctly', () => {
  let [matchIntent, buildOutput] = Dialog([{ input: ['*'], output: 'ok [link](https://url)' }]);
  let { matchs, context } = matchIntent({ text: 'hello' });
  let { response } = buildOutput({ matchs, context });
  expect(response[0]).toBe('ok <a href="https://url" target="_blank" rel="noopener noreferrer">link</a>');
  [matchIntent, buildOutput] = Dialog([{ input: ['*'], output: 'ok https://url' }]);
  ({ matchs, context } = matchIntent({ text: 'hello' }));
  ({ response } = buildOutput({ matchs, context }));
  expect(response[0]).toBe('ok <a href="https://url" target="_blank" rel="noopener noreferrer">https://url</a>');
  [matchIntent, buildOutput] = Dialog([{ input: ['*'], output: 'ok https://url.png' }]);
  ({ matchs, context } = matchIntent({ text: 'hello' }));
  ({ response } = buildOutput({ matchs, context }));
  expect(response[0]).toBe(
    'ok <a href="https://url.png" target="_blank" rel="noopener noreferrer"><img src="https://url.png" alt="https://url.png" /></a>',
  );
  [matchIntent, buildOutput] = Dialog([{ input: ['*'], output: 'ok [https://url.png](https://url)' }]);
  ({ matchs, context } = matchIntent({ text: 'hello' }));
  ({ response } = buildOutput({ matchs, context }));
  expect(response[0]).toBe(
    'ok <a href="https://url" target="_blank" rel="noopener noreferrer"><img src="https://url.png" alt="url" /></a>',
  );
  [matchIntent, buildOutput] = Dialog([{ input: ['*'], output: 'ok [https://url.png]()' }]);
  ({ matchs, context } = matchIntent({ text: 'hello' }));
  ({ response } = buildOutput({ matchs, context }));
  expect(response[0]).toBe('ok <img src="https://url.png" alt="url" />');
});

test('Dialog with input {{@any}} should match correctly', () => {
  const [matchIntent, buildOutput] = Dialog([{ input: ['{{@any}}'], output: 'ok {{var=*}}' }]);
  const { matchs, context } = matchIntent({ text: 'hello' });
  const { response, entities } = buildOutput({ matchs, context });
  expect(response[0]).toBe('ok hello');
  expect(entities.length).toBe(1);
  expect(entities[0].type).toBe('any');
  expect(entities[0].value).toBe('hello');
});

test('Dialog with input {{@email}} should match correctly', () => {
  const [matchIntent, buildOutput] = Dialog([{ input: ['{{@email}}'], output: 'email={{var=*}}' }]);
  const { matchs, context } = matchIntent({ text: 'john@doe.com' });
  const { response, entities } = buildOutput({ matchs, context });
  expect(response[0]).toBe('email=john@doe.com');
  expect(entities.length).toBe(1);
  expect(entities[0].type).toBe('email');
  expect(entities[0].value).toBe('john@doe.com');
});

test('Dialog with input {{var=@email}} should match correctly', () => {
  const [matchIntent, buildOutput] = Dialog([{ input: ['{{var=@email}}'], output: 'email={{var}}' }]);
  const { matchs, context } = matchIntent({ text: 'john@doe.com' });
  const { response, entities } = buildOutput({ matchs, context });
  expect(response[0]).toBe('email=john@doe.com');
  expect(entities.length).toBe(1);
  expect(entities[0].name).toBe('var');
  expect(entities[0].type).toBe('email');
  expect(entities[0].value).toBe('john@doe.com');
});

test('Dialog with input malformed entities should pass', () => {
  const [matchIntent, buildOutput] = Dialog(
    [{ input: [' {{var=@email}}'], output: 'email={{var}}' }],
    {},
    { fallback: 'What ?' },
  );
  const { matchs, context } = matchIntent({ text: 'john@doe.com' });
  const { response, entities } = buildOutput({ matchs, context });
  expect(response[0]).toBe('What ?');
  expect(entities).toBe(undefined);
});

test('Dialog with conditional intent should match correctly', () => {
  const [matchIntent, buildOutput] = Dialog([
    { conditions: [], input: ['*'], output: 'hello<<var=*>>' },
    { conditions: [{ name: 'var', value: 'hello' }], input: ['*'], output: 'How are you?<<var=2>>' },
    { conditions: [{ name: 'var', value: '2' }], input: '*', output: 'Fine<<var=3>>' },
  ]);
  let { matchs, context } = matchIntent({ text: 'hello' });
  let { response, context: ctx } = buildOutput({ matchs });
  expect(context.var).toBe(undefined);
  expect(response[0]).toBe('hello');
  expect(ctx.var).toBe('hello');
  ({ matchs, context } = matchIntent({ text: 'hello' }));
  expect(context.var).toBe('hello');
  ({ response, context: ctx } = buildOutput({ matchs }));
  expect(response[0]).toBe('How are you?');
  expect(ctx.var).toBe('2');
  ({ matchs, context } = matchIntent({ text: 'hello' }));
  expect(context.var).toBe('2');
  ({ response, context: ctx } = buildOutput({ matchs }));
  expect(response[0]).toBe('Fine');
  expect(ctx.var).toBe('3');
});

test('Dialog with conditional intent and conditional outputs should match correctly', () => {
  const [matchIntent, buildOutput] = Dialog([
    { conditions: [], input: ['hello'], output: 'hello<<var=*>>' },
    {
      input: ['cool'],
      output: [{ type: 'condition', children: [{ name: 'var', value: 'notfound', text: 'hello<<var=*>>' }] }],
    },
    { conditions: [{ name: 'var', value: 'hello' }], input: ['cool'], output: 'How are you?<<var=2>>' },
    { conditions: [{ name: 'var', value: '2' }], input: '*', output: 'Fine<<var=3>>' },
  ]);
  let { matchs, context } = matchIntent({ text: 'hello' });
  let { response, context: ctx } = buildOutput({ matchs });
  expect(context.var).toBe(undefined);
  expect(response[0]).toBe('hello');
  expect(ctx.var).toBe('hello');
  ({ matchs, context } = matchIntent({ text: 'cool' }));
  expect(context.var).toBe('hello');
  ({ response, context: ctx } = buildOutput({ matchs }));
  expect(response[0]).toBe('How are you?');
  expect(ctx.var).toBe('2');
  ({ matchs, context } = matchIntent({ text: 'cool' }));
  expect(context.var).toBe('2');
  ({ response, context: ctx } = buildOutput({ matchs }));
  expect(response[0]).toBe('Fine');
  expect(ctx.var).toBe('3');
});

test("Dialog intent with empty conditional output should display 'i don't understand'", () => {
  const [matchIntent, buildOutput] = Dialog([{ input: ['*'], output: [{ type: 'condition', children: [] }] }]);
  const { matchs, context } = matchIntent({ text: 'hello' });
  const { response } = buildOutput({ matchs, context });
  expect(response[0]).toBe("I don't understand");
});

test('Dialog intents with action should send back', () => {
  const [matchIntent, buildOutput] = Dialog([{ input: ['*'], output: { text: 'ok', actions: [{ name: 'action' }] } }]);
  const { matchs } = matchIntent({ text: 'hello' });
  const { actions } = buildOutput({ matchs });
  expect(actions[0].name).toBe('action');
});
