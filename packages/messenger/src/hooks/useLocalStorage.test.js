/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import useLocalStorage from './useLocalStorage';
import { dispatcher } from './useState';

test('useLocalStorage should store Value', () => {
  Object.defineProperty(window, 'localStorage', {
    value: { getItem: jest.fn(), setItem: jest.fn() },
  });
  let [storedValue, setValue] = useLocalStorage('storage');
  expect(storedValue).toBe(undefined);
  setValue('first');
  expect(storedValue).toBe(undefined);
  [storedValue, setValue] = useLocalStorage('storage');
  expect(storedValue).toBe('first');
  expect(window.localStorage.getItem).toHaveBeenCalled();
  expect(window.localStorage.setItem).toHaveBeenCalled();
  Reflect.deleteProperty(window, 'localStorage');
  dispatcher.reset();
});

test('useLocalStorage witth function value should store returned value', () => {
  Object.defineProperty(window, 'localStorage', {
    value: { getItem: () => JSON.stringify('first'), setItem: jest.fn() },
  });
  let [storedValue, setValue] = useLocalStorage('storage');
  expect(storedValue).toBe('first');
  setValue(() => 'second');
  expect(storedValue).toBe('first');
  [storedValue, setValue] = useLocalStorage('storage');
  expect(storedValue).toBe('second');
  delete window.localStorage;
  Reflect.deleteProperty(window, 'localStorage');
  dispatcher.reset();
});

test('useLocalStorage witth faulty values should catch errors', () => {
  /* Object.defineProperty(window, 'localStorage', {
    value: { getItem: () => 'first', setItem: jest.fn() },
  }); */
  window.localStorage.getItem = () => 'first';
  window.localStorage.setItem = () => {
    throw new Error('Test error');
  };
  let [storedValue, setValue] = useLocalStorage('storage', 'first');
  expect(storedValue).toBe('first');
  setValue(() => () => {});
  expect(storedValue).toBe('first');
  [storedValue, setValue] = useLocalStorage('storage');
  // expect(storedValue).toBe('second');
  Reflect.deleteProperty(window, 'localStorage');
  dispatcher.reset();
});
