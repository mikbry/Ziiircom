/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import useLocalStorage from '../../hooks/useLocalStorage';

let store;

function useStore(initialState) {
  const [_store, saveStore] = useLocalStorage('store', { ...initialState });
  store = _store;
  return [store, saveStore];
}
export default useStore;

export const useSelector = (selector) => selector({ ...store });
