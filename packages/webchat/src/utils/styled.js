/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { createElement } from './builder';

const styled = (element, props) => {
  console.log('TODO styled', element, props);
  // eslint-disable-next-line no-unused-vars
  return (styles, ...parameters) => {
    const v = element;
    const el = createElement(v, props);
    // TODO parse strings and parameters
    el.styled = { styles, parameters };
    return el;
  };
};

export { styled };
