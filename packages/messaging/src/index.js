/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

const useMessaging = async (type) => {
  let messaging;
  if (type === 'dialog') {
    try {
      messaging = (await import('./dialog')).default;
    } catch (err) {
      // console.log('no dialog found');
    }
  }
  if (!messaging) {
    try {
      messaging = (await import('./echo')).default;
    } catch (err) {
      // console.log('no echo found');
    }
  }
  return messaging;
};

export default useMessaging;
