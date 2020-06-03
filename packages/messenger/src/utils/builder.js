/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { deepCopy } from '@ziiircom/common';
import { genClassRules } from './styled/genStyle';

export const html = () => {
  // TODO
};

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

export const render = (element, container, state = {}, insert) => {
  if (!element) {
    return;
  }
  if (typeof element === 'string') {
    const c = container;
    c.innerText = element;
    return;
  }

  let { children } = element;
  if (typeof element.element === 'string') {
    const el = document.createElement(element.element);
    if (element.props) {
      Object.keys(element.props).forEach(n => {
        const v = element.props[n];
        const type = typeof v;
        const isAttribute = type === 'string' || type === 'number' || type === 'boolean';
        if (n === 'ref') {
          v.setCurrent(el);
        } else if (n === 'className') {
          el.className = v;
        } else if (type === 'function') {
          if (n.substring(0, 2) === 'on') {
            el.addEventListener(n.substring(2).toLowerCase(), v);
          }
        } else if (isAttribute) {
          el.setAttribute(n, v);
        }
      });
    }
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
    if (children) {
      children.forEach(child => {
        render(child, el, state);
      });
    }
    if (insert && insert.before) {
      container.insertBefore(el, insert.before);
    } else {
      container.appendChild(el);
    }
  } else if (typeof element === 'function') {
    const e = element({ ...element.props, children, styled: element.styled });
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
