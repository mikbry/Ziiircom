/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See : https://github.com/testing-library/react-testing-library/issues/268
class MockupEvent extends MouseEvent {
  constructor(type, values) {
    const { pageX, pageY, offsetX, offsetY, x, y, key, touches, keyCode, charCode, ...mouseValues } = values;
    super(type, mouseValues);

    Object.assign(this, {
      offsetX: offsetX || 0,
      offsetY: offsetY || 0,
      pageX: pageX || 0,
      pageY: pageY || 0,
      x: x || 0,
      y: y || 0,
      touches,
      key,
      keyCode,
      charCode,
    });
  }
}

export default MockupEvent;
