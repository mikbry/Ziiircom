/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

const initFonts = (theme, id) => {
  const { fonts = {} } = theme;
  const { text = {}, heading = {} } = fonts;
  const fontMessengerTextEl = document.createElement('link');
  fontMessengerTextEl.setAttribute('rel', 'stylesheet');
  fontMessengerTextEl.setAttribute(
    'href',
    text.url || 'https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap',
  );
  fontMessengerTextEl.setAttribute('type', 'text/css');

  const fontMessengerHeadingEl = document.createElement('link');
  fontMessengerHeadingEl.setAttribute('rel', 'stylesheet');
  fontMessengerHeadingEl.setAttribute(
    'href',
    heading.url || 'https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap',
  );
  fontMessengerHeadingEl.setAttribute('type', 'text/css');

  const [head] = document.getElementsByTagName('head');
  head.appendChild(fontMessengerTextEl);
  head.appendChild(fontMessengerHeadingEl);

  const [root] = document.getElementsByClassName(id);
  root.style.cssText = `font-family: ${(text.name && `${text.name}, `) || ''}sans-serif;`;
};

export default initFonts;
