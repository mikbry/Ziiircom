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

const MessengerApp = async (messages, onMessage, onAction, hideDate) => {
  const [_isOpen, header, input] = useSelector(state => [
    state.messenger.isOpen,
    state.messenger.header,
    state.messenger.input,
  ]);
  let isOpen = _isOpen;
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

  const Messenger = styled(ui.Messenger, {
    messages,
    onMessage: handleMessage,
    onClick: handlePrevClick,
    onAction,
    header,
    input,
    hideDate,
  })`
    width: 100%;
    max-width: ${props => props.theme.messenger.width};
    height: 80%;
    margin: 96px 48px 96px auto;
  `;

  const MessengerBox = styled(
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

  return styled('div', { className: 'ziiircom-messenger-frame' }, MessengerBox, Fab)``;
};

export default MessengerApp;
