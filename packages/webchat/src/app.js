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
  const Messenger = (await UI()).default;
  return e('div', null, Messenger);
};

export default App;
