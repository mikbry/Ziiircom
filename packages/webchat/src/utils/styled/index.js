/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { createElement } from '../builder';
import { genStyle } from './genStyle';

const styled = (element, props) => (styles, ...parameters) => {
  const v = element;
  const el = createElement(v, props);
  if (el.styled) {
    el.styled.push({ styles, parameters });
  } else {
    el.styled = [{ styles, parameters }];
  }
  return el;
};

export { styled, genStyle };
