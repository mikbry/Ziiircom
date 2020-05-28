/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

let store;

export default initialState => {
  store = { ...initialState };
  return store;
};

export const useSelector = selector => selector({ ...store });
