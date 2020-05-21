/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import UI from '@ziiircom/components';

let ui;

const useUI = async () => {
  if (!ui) {
    ui = await UI();
  }
  return ui;
};

export default useUI;
