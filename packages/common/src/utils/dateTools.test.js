/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { friendlyDate } from './dateTools';

test('friendlyDate expect "just now"', () => {
  const fd = friendlyDate(Date.now());
  expect(fd).toBe('just now');
});

test('friendlyDate expect 11 secs ago"', () => {
  const fd = friendlyDate(Date.now() - 11 * 1000);
  expect(fd).toBe('11 secs ago');
});

test('friendlyDate expect 1 min ago"', () => {
  const fd = friendlyDate(Date.now() - 61 * 1000);
  expect(fd).toBe('1 min ago');
});

test('friendlyDate expect 2 mins ago"', () => {
  const fd = friendlyDate(Date.now() - 120 * 1000);
  expect(fd).toBe('2 mins ago');
});

test('friendlyDate expect 1 hour ago"', () => {
  const fd = friendlyDate(Date.now() - 60 * 60 * 1000);
  expect(fd).toBe('1 hour ago');
});

test('friendlyDate expect 2 hours ago"', () => {
  const fd = friendlyDate(Date.now() - 2 * 60 * 60 * 1000);
  expect(fd).toBe('2 hours ago');
});

test('friendlyDate expect yesterday"', () => {
  const fd = friendlyDate(Date.now() - 86400 * 1000);
  expect(fd).toBe('yesterday');
});

test('friendlyDate expect locale date"', () => {
  let d = Date.now() - 2 * 86400 * 1000;
  let fd = friendlyDate(d);
  expect(fd).toBe(new Date(d).toLocaleString());
  d = Date.now() - 7 * 86400 * 1000;
  fd = friendlyDate(d);
  expect(fd).toBe(new Date(d).toLocaleString());
});
