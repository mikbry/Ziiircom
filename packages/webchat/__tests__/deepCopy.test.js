/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import deepCopy from '../src/utils/deepCopy';

test('deepCopy without params should return undefined ', () => {
  const copy = deepCopy();
  expect(copy).toBe(undefined);
});

test('deepCopy with 2 string should return last one ', () => {
  const copy = deepCopy('one', 'two');
  expect(copy).toBe('two');
});

test('deepCopy with 2 empty objects should return an empty object ', () => {
  const copy = deepCopy({}, {});
  expect(copy).toStrictEqual({});
});

test('deepCopy with 2 empty arrays should return an empty array ', () => {
  const copy = deepCopy([], []);
  expect(copy).toStrictEqual([]);
});

test('deepCopy with an obj and an array should return an empty obj ', () => {
  const copy = deepCopy({}, []);
  expect(copy).toStrictEqual({});
});

test('deepCopy with an array and a obj should return an empty array ', () => {
  const copy = deepCopy([], {});
  expect(copy).toStrictEqual([]);
});

test('deepCopy with 2 objects should return an object ', () => {
  const copy = deepCopy({ a: 'v' }, { b: 'w' });
  expect(copy).toStrictEqual({ a: 'v', b: 'w' });
});

test('deepCopy with 2 objects with same values should return a merged object ', () => {
  const copy = deepCopy({ a: 'v', b: 'v' }, { b: 'w' });
  expect(copy).toStrictEqual({ a: 'v', b: 'w' });
});

test('deepCopy with 1 objects and a null should return first object ', () => {
  const copy = deepCopy({ a: 'v', b: 'v' }, null);
  expect(copy).toStrictEqual({ a: 'v', b: 'v' });
});

test('deepCopy with 2 complexe objects should return a merged object ', () => {
  const obj1 = {
    a: 1,
    b: 1,
    c: { x: 1, y: 1 },
    d: [1, 1],
  };
  const obj2 = {
    b: 2,
    c: { y: 2, z: 2 },
    d: [2, 2],
    e: 2,
  };
  const copy = deepCopy(obj1, obj2);
  expect(copy).toStrictEqual({ a: 1, b: 2, c: { x: 1, y: 2, z: 2 }, d: [1, 1, 2, 2], e: 2 });
});

test('deepCopy with 2 objects and a circular ref should return a merged object ', () => {
  const obj = { a: 1, b: 2 };
  const obj1 = {
    a: 1,
    b: 1,
    c: { x: 1, y: 1 },
    d: [1, 1],
    obj,
  };
  const obj2 = {
    b: 2,
    c: { y: 2, z: 2, obj1 },
    d: [2, 2],
    e: 2,
  };
  obj1.obj2 = obj2;
  const copy = deepCopy(obj1, obj2);
  expect(copy).toStrictEqual({ a: 1, b: 2, c: { x: 1, y: 2, z: 2, obj1 }, d: [1, 1, 2, 2], e: 2, obj, obj2 });
});
