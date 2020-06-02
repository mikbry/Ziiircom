/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import useUI from './hooks/ui';
import { styled } from './utils/styled';
import { useRef } from './utils/builder';
import { useSelector } from './utils/store';

const App = async (messages, onMessage) => {
  let [isOpen] = useSelector(state => [state.isOpen]);
  const messengerRef = useRef(null);
  const handleFabClick = () => {
    isOpen = !isOpen;
    const messenger = messengerRef.current;
    messenger.classList.toggle('isclosed');
    messenger.classList.toggle('isopen');
  };

  const handlePrevClick = event => {
    event.stopPropagation();
  };

  const handleMessage = message => {
    onMessage(message);
  };

  const ui = await useUI();

  const Messenger = styled(ui.Messenger, { onMessage: handleMessage, onClick: handlePrevClick })`
    width: 100%;
    max-width: 600px;
    height: 80%;
  `;

  const MessengerFrame = styled(
    'div',
    { ref: messengerRef, className: `ziiircom-messenger is${isOpen ? 'open' : 'closed'}`, onClick: handleFabClick },
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

  const Fab = styled(ui.FAButton, { className: 'ziiircom-messenger-fab', onClick: handleFabClick })`
    position: absolute;
    right: 32px;
    bottom: 32px;
    z-index: 9;
  `;

  return styled('div', { className: 'ziiircom-messenger-frame' }, MessengerFrame, Fab)`
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