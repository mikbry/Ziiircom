/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

const Interface = {};

export const initInterface = ({ html, styled, createElement }) => {
  Interface.html = html;
  Interface.styled = styled;
  Interface.createElement = createElement;
  Object.freeze(Interface);
};

export default Interface;
