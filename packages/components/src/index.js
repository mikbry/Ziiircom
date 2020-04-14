/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Interface, { setup } from './interface';

export { setup, Interface };

export default async function() {
  const Messenger = await import('./Messenger/index.js');
  return Messenger;
}
