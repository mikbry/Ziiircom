/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import deepCopy from './deepCopy';

test('deepCopy without parameters should return undefined', () => {
  const copy = deepCopy();
  expect(copy).toBe(undefined);
});

test('deepCopy with an null should return null', () => {
  const copy = deepCopy(null, null);
  expect(copy).toBe(undefined);
});

test('deepCopy with a string should return a copy of this string', () => {
  const copy = deepCopy('string');
  expect(copy).toBe('string');
});

test('deepCopy with a date should return a copy of this date', () => {
  const date = new Date();
  const copy = deepCopy(date);
  expect(copy).toEqual(date);
});

test('deepCopy with an array should return a copy of this array', () => {
  const array = ['element1', 'element2'];
  const copy = deepCopy(array);
  expect(copy).toEqual(array);
});

test('deepCopy with two arrays should return a concate of theses arrays', () => {
  const array = ['element1', 'element2'];
  const copy = deepCopy(array, []);
  expect(copy).toEqual(array);
});

test('deepCopy with an object should return a copy of this object', () => {
  const obj = { name: 'element1', next: 'element2' };
  const copy = deepCopy(obj);
  expect(copy).toEqual(obj);
});

test('deepCopy with objects should return a concat of these objects', () => {
  const obj = { name: 'element1' };
  const obj2 = { next: 'element2' };
  const copy = deepCopy(obj, obj2);
  expect(copy).toEqual({ ...obj, ...obj2 });
});

test('deepCopy with circual ref in objects should return a correct copy', () => {
  const obj = { name: 'element1' };
  const obj2 = { next: 'element2', circular: obj };
  const copy = deepCopy(obj, obj2);
  expect(copy).toEqual({ ...obj, ...obj2 });
});
