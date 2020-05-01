/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import UI from '@ziichat/components';
import { createElement } from './utils/builder';

const e = createElement;
const App = async () => {
  const ui = await UI();
  const Messenger = ui.Messenger.default;
  const FAButton = ui.FAButton.default;
  return e('div', null, Messenger, FAButton);
};

export default App;
