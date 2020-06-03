/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html, render } from './builder';

beforeEach(() => {
  document.body.innerHTML = '';
});

test('Builder html should not be implemented"', () => {
  const result = html();
  expect(result).toBe(undefined);
});

test('Builder render without params should run"', () => {
  const result = render();
  expect(result).toBe(undefined);
});

test('Builder render element = div  should be rendered"', () => {
  render({ element: 'div' }, document.body);
  expect(document.body.outerHTML).toBe('<body><div></div></body>');
});

test('Builder render element = div  with some func should be rendered correctly"', () => {
  render({ element: 'div', props: { func: () => {}, dummy: null } }, document.body);
  expect(document.body.outerHTML).toBe('<body><div></div></body>');
});

test('Builder render insert before element = div  should be rendered"', () => {
  const el = document.createElement('p');
  document.body.appendChild(el);
  render({ element: 'div' }, document.body, null, { before: el });
  expect(document.body.outerHTML).toBe('<body><div></div><p></p></body>');
});

test('Builder render element as function  should be rendered"', () => {
  const element = () => ({ element: 'div' });
  render(element, document.body);
  expect(document.body.outerHTML).toBe('<body><div></div></body>');
});

test('Builder malformed element should not render"', () => {
  render(5, document.body);
  expect(document.body.outerHTML).toBe('<body></body>');
});
