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
    flex-direction: column;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `;

  const Fab = styled(ui.FAButton.default)`
    position: absolute;
    z-index: 9;
    right: 32px;
    bottom: 32px;
  `;

  return styled('div', null, MessengerContainer, Fab)`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  `;
};

export default App;
