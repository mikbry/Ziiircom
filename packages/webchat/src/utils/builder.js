/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { genClassRules } from './styled/genStyle';

export const createElement = (element, props, ...children) => {
  let definition;
  if (element.element) {
    definition = { ...element };
    definition.props = { ...definition.props, ...props };
  } else {
    definition = { props: {} };
    definition.element = element;
    if (props) {
      definition.props = props;
    }
  }
  let array = children;
  if (children.length === 1 && Array.isArray(children[0])) {
    [array] = children;
  }
  definition.children = array.filter(v => v !== undefined);
  return definition;
};

export const render = (element, container) => {
  if (!element) {
    return;
  }
  if (typeof element === 'string') {
    const c = container;
    c.innerText = element;
    return;
  }
  let el;
  let { children } = element;
  if (typeof element.element === 'string') {
    el = document.createElement(element.element);
    // let style;
    if (element.styled) {
      let className = genClassRules(element.styled, { ...element.props }, { ...element.defaultProps });
      if (element.props.className) {
        className += ` ${element.props.className}`;
      }
      el.className = className;
      // el.classList.add(className);
    } /* else {
      style = 'border: 1px solid black; margin: 4px; max-width: 512px';
    } */
    // el.setAttribute('style', style);
    // el.innerText = element.element;
  } else if (typeof element === 'function') {
    const e = element({ ...element.props, children });
    render(e, container);
    children = null;
  } else if (element.element && typeof element.element === 'function') {
    const e = element.element({ ...element.props, children });

    render(e, container);
    children = null;
  }
  if (el) {
    if (children) {
      children.forEach(child => {
        render(child, el);
      });
    }
    container.appendChild(el);
  }
};
