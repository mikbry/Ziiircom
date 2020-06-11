/* eslint-disable react/jsx-filename-extension */
/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Interface, { setup } from './interface';

test('Interface should setup correctly', () => {
  const html = jest.fn();
  setup({ html });
  expect(Interface.html).toEqual(html);
  setup({ html });
});
