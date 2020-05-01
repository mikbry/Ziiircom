/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import UI from '@ziichat/components';
import { styled } from './utils/styled';

const App = async () => {
  const ui = await UI();

  const Messenger = styled(ui.Messenger.default)`
    width: 100%;
    max-width: 600px;
    height: 80%;
  `;

  const MessengerContainer = styled('div', null, Messenger)`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 3;
    flex-direction: column;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  `;

  const Fab = styled(ui.FAButton.default)`
    position: absolute;
    right: 32px;
    bottom: 32px;
    z-index: 9;
  `;

  return styled('div', null, MessengerContainer, Fab)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  `;
};

export default App;
