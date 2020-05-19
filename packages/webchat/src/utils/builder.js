/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { genClassRules } from './styled/genStyle';
import deepCopy from './deepCopy';

export const createElement = (element, props, ...children) => {
  let definition;
  if (element.element) {
    definition = deepCopy({}, element);
    definition.props = deepCopy({}, definition.props, props);
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

export const render = (element, container, state = {}) => {
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
    if (element.styled) {
      const defaultProps = { ...element.defaultProps };
      const theme = state.theme || {};
      const props = deepCopy(defaultProps, element.props, { theme });
      let className = genClassRules(element.styled, props, defaultProps);
      if (element.props.className) {
        className += ` ${element.props.className}`;
      }
      el.className = className;
    }
  } else if (typeof element === 'function') {
    const e = element({ ...element.props, children });
    if (element.styled) {
      e.styled = [...element.styled, ...e.styled];
    }
    render(e, container, state);
    children = null;
  } else if (element.element && typeof element.element === 'function') {
    const e = element.element({ ...element.props, children });
    if (element.styled) {
      e.styled = [...element.styled, ...e.styled];
    }
    render(e, container, state);
    children = null;
  }
  if (el) {
    if (children) {
      children.forEach(child => {
        render(child, el, state);
      });
    }
    if (element.props) {
      const { props } = element;
      if (props.onClick) {
        el.onclick = props.onClick;
      }
      if (props.ref) {
        props.ref.setCurrent(el);
      }
    }
    container.appendChild(el);
  }
};

export const useRef = current => {
  const ref = {
    current,
    setCurrent: el => {
      ref.current = el;
    },
  };
  return ref;
};
