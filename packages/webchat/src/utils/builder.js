/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const createElement = (element, props, children) => {
  console.log('TODO createElement', element, props, children);
  const definition = { element, props };
  if (children) {
    // TODO createChildren
    definition.children = children;
  }
  return definition;
};

export const render = element => {
  console.log('TODO render', element);
};
