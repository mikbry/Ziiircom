/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { genStyle, genClassRules } from './genStyle';

test('styled genStyle without params return empty string"', () => {
  const style = genStyle();
  expect(style).toBe('');
});

test('styled empty genClassRules should return empty string"', () => {
  const style = genClassRules(['']);
  expect(style).toBe('');
});
