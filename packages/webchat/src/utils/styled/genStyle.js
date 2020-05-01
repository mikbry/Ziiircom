/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

let styleSheet;

const getStylesheet = () => {
  if (!styleSheet) {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.title = 'MainCSS';
    document.getElementsByTagName('head')[0].appendChild(style);
    styleSheet = style.sheet;
  }
  return styleSheet;
};

const c = 'abcdefghijklmnopqrstuvwxyz';
// eslint-disable-next-line no-bitwise
const genSelector = () => [...Array(5)].map(() => c[~~(Math.random() * c.length)]).join('');

const genStyle = (styledObj, _props, defaultProps) => {
  let style = '';
  if (styledObj && Array.isArray(styledObj.styles)) {
    const props = { ...defaultProps, ..._props };
    styledObj.styles.forEach((s, i) => {
      style += s;
      if (styledObj.parameters[i]) {
        style += styledObj.parameters[i](props);
      }
    });
  }
  return style;
};

const findMedias = (_obj, rules) => {
  const obj = _obj;
  if (rules.trim().length === 0) return;
  let index = 0;
  let subIndex = rules.indexOf('@', index);
  while (subIndex > -1) {
    obj.main += rules.substring(index, subIndex).trim();
    const s = rules.indexOf('@', subIndex + 1);
    if (s !== -1) {
      index = s;
    } else {
      index = rules.lastIndexOf('}') + 1;
      if (index === -1) {
        index = rules.length;
      }
    }
    // Insert media query
    obj.medias.push(rules.substring(subIndex, index));
    subIndex = s;
  }
  obj.main += rules.substring(index).trim();
};

const genClassRule = (obj, styledObj, props, defaultProps) => {
  const rules = genStyle(styledObj, props, defaultProps);

  let index = 0;
  let subIndex = rules.indexOf('&', index);
  if (subIndex === -1) {
    // No sub-rules
    findMedias(obj, rules);
  } else {
    while (subIndex > -1) {
      findMedias(obj, rules.substring(index, subIndex));
      index = rules.indexOf('}', subIndex + 2);
      obj.sub.push(rules.substring(subIndex + 1, index + 1));
      index += 1;
      subIndex = rules.indexOf('&', index);
    }
    findMedias(obj, rules.substring(index));
  }
};

const genClassRules = (styled, props, defaultProps) => {
  const sheet = getStylesheet();
  let selectors = '';
  styled.forEach(styledObj => {
    const selector = defaultProps.selector || genSelector();
    const obj = { main: '', sub: [], medias: [] };
    genClassRule(obj, styledObj, props, defaultProps);
    if (obj.main && obj.main.length > 0) {
      let css = `.${selector} { ${obj.main} }`;
      sheet.insertRule(css);
      obj.sub.forEach(r => {
        css = `.${selector}${r}`;
        sheet.insertRule(css);
      });
      obj.medias.forEach(r => {
        sheet.insertRule(r);
      });
      selectors += `${selector} `;
    }
  });

  return selectors.trim();
};

export { genStyle, genClassRules };
