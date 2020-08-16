/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

// https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge

const deepCopy = (..._elements) => {
  const stack = [];
  const assign = (...elements) => {
    let copy;
    elements.forEach((e) => {
      if (Array.isArray(e)) {
        if (!copy) {
          copy = [];
        }
        e.forEach((sub) => {
          copy.push(assign(sub));
        });
      } else if (e instanceof Date) {
        copy = new Date(e.getTime());
      } else if (e && typeof e === 'object') {
        stack.push(e);
        if (!copy) {
          copy = {};
        }
        stack.push(e);
        Object.keys(e).forEach((k) => {
          const ek = e[k];
          if (stack.indexOf(ek) !== -1) {
            // Circular ref
            copy[k] = ek;
          } else {
            copy[k] = assign(copy[k], ek);
          }
        });
        stack.pop();
      } else if (e !== null && e !== undefined) {
        copy = e;
      }
    });
    return copy;
  };
  return assign(..._elements);
};

export default deepCopy;
