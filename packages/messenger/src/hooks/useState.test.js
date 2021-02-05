/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import useState from './useState';

test('useState should setValue', () => {
  let [value, setValue] = useState('default');
  expect(value).toBe('default');
  setValue('toto');
  expect(value).toBe('default');
  [value, setValue] = useState();
  expect(value).toBe('toto');
});
