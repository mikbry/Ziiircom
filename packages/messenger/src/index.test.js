/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import client, { defaultClient } from './index';

test('client should be defined"', () => {
  expect(client).toBeDefined();
});

test('defaultClient should be started"', async () => {
  const cl = await defaultClient(document.body);
  expect(cl).toBeDefined();
});
