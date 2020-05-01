/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import UI from '@ziichat/components';
import { styled } from './utils/styled';
import { useRef } from './utils/builder';

const App = async () => {
  let isOpen = true;
  const messengerRef = useRef(null);
  const handleFabClick = () => {
    isOpen = !isOpen;
    const messenger = messengerRef.current;
    messenger.classList.toggle('isclosed');
    messenger.classList.toggle('isopen');
  };

  const ui = await UI();

  const Messenger = styled(ui.Messenger.default)`
    width: 100%;
    max-width: 600px;
    height: 80%;
  `;

  const MessengerContainer = styled(
    'div',
    { ref: messengerRef, className: `messengerbox is${isOpen ? 'open' : 'closed'}` },
    Messenger,
  )`
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

    &.isopen {
      display: flex;
    }

    &.isclosed {
      display: none;
    }
  `;

  const Fab = styled(ui.FAButton.default, { className: 'messengerfab', onClick: handleFabClick })`
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
