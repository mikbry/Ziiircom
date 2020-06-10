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
