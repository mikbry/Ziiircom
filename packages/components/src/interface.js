/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

const Interface = {};

export const setup = ({ html, styled, createElement, useRef }) => {
  if (!Interface.html) {
    Interface.html = html;
    Interface.styled = styled;
    Interface.createElement = createElement;
    Interface.useRef = useRef;
    // Object.freeze(Interface);
  }
  return Interface;
};

export default Interface;
