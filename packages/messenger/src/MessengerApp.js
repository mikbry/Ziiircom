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
  const [_isOpen, header = {}, input] = useSelector(state => [
    state.messenger.isOpen,
    state.messenger.header,
    state.messenger.input,
  ]);
  let isOpen = _isOpen;
  const messengerRef = useRef(null);
  const fabRef = useRef(null);
  const handleFabClick = () => {
    isOpen = !isOpen;
    const messenger = messengerRef.current;
    messenger.classList.toggle('isclosed');
    messenger.classList.toggle('isopen');
    messenger.firstChild.classList.remove('isexpanded');
    const fab = fabRef.current;
    fab.classList.toggle('isactive');
  };

  if (header.closeButton) {
    header.closeButton.onClose = handleFabClick;
  }

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
      animation: slide-in 0.5s forwards;
    }

    &.isclosed {
      animation: slide-out 0.5s forwards;
    }

    @media only screen and (max-width: 772px) {
      .isopen {
        animation: slide-up 0.5s forwards;
      }
      .isclosed {
        animation: slide-down 0.5s forwards;
      }
      .isactive {
        display: none;
      }
      .ziiircom-messenger > div {
        max-width: 100%;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        margin: auto 0 0 0;
      }
    }
    @keyframes slide-in {
      from {
        left: 600px;
        opacity: 0;
      }
      to {
        left: 0;
        opacity: 1;
      }
    }
    @keyframes slide-out {
      from {
        left: 0;
        opacity: 1;
      }
      to {
        left: 600px;
        opacity: 0;
        display: none;
      }
    }
    @keyframes slide-up {
      from {
        top: 600px;
        opacity: 0;
      }
      to {
        top: 0;
        opacity: 1;
      }
    }
    @keyframes slide-down {
      from {
        top: 0;
        opacity: 1;
      }
      to {
        top: 600px;
        opacity: 0;
        display: none;
      }
    }
  `;

  const Fab = styled(ui.FAButton, {
    ref: fabRef,
    className: `ziiircom-messenger-fab ${isOpen ? 'isactive' : ''}`,
    onClick: handleFabClick,
    iconActive:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='-12 -12 48 48'%3E%3Cg fill='white'%3E%3Cpath d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z'/%3E%3C/g%3E%3C/svg%3E",
  })`
    position: absolute;
    right: 32px;
    bottom: 32px;
    z-index: 9;
  `;

  return styled(
    'div',
    {
      className: 'ziiircom-messenger-frame',
    },
    MessengerBox,
    Fab,
  )``;
};

export default MessengerApp;