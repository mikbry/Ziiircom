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
  const [_isOpen, header = {}, input] = useSelector((state) => [
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
    messenger.classList.toggle('isopen');
    if (messenger.classList.contains('isclosedstart')) {
      messenger.classList.remove('isclosedstart');
    } else {
      messenger.classList.toggle('isclosed');
    }
    messenger.firstChild.classList.remove('isexpanded');
    const fab = fabRef.current;
    fab.classList.toggle('isactive');
  };

  header.onClose = handleFabClick;

  const handlePrevClick = (event) => {
    event.stopPropagation();
  };

  const handleMessage = (message) => {
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
    position: absolute;
    overflow: hidden;
    height: 100%;
    background: ${(props) => props.theme.palette.background};
  `;
  const MessengerBox = styled(
    'div',
    {
      ref: messengerRef,
      className: `ziiircom-messenger is${isOpen ? 'open' : 'closedstart'}`,
      onClick: handleFabClick,
    },
    Messenger,
  )`
    max-height: 700px;
    width: ${(props) => (props.theme.messenger && props.theme.messenger.width ? props.theme.messenger.width : '500px')};
    min-height: 320px;
    z-index: 10;
    position: fixed;
    height: calc(100% - 100px);
    bottom: 100px;
    right: 28px;

    &.isopen {
      animation: slide-in 0.5s forwards;
    }

    &.isclosed {
      visibility: hidden;
      animation: slide-out 0.5s ease;
    }

    &.isclosedstart {
      visibility: hidden;
    }

    @media only screen and (max-width: 772px) {
      .ziiircom-messenger {
        bottom: 0px !important;
        right: 0px !important;
        width: 100% !important;
      }
      .ziiircom-messenger.isopen {
        animation: slide-up 0.5s forwards !important;
      }
      .ziiircom-messenger.isclosed {
        animation: slide-down 0.5s forwards !important;
      }
      .isactive {
        display: none;
      }
      .ziiircom-messenger > div {
        width: 100%;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        margin: auto 0 0 0;
      }
    }
    @keyframes slide-in {
      0% {
        transform: translateX(780px);
        opacity: 0;
        visibility: hidden;
      }
      100% {
        transform: translateX(0px);
        opacity: 1;
        visibility: visible;
      }
    }
    @keyframes slide-out {
      0% {
        transform: translateX(0px);
        opacity: 1;
        visibility: visible;
      }
      100% {
        transform: translateX(780px);
        opacity: 0;
        visibility: hidden;
      }
    }
    @keyframes slide-up {
      0% {
        transform: translateY(780px);
        opacity: 0;
        visibility: hidden;
      }
      100% {
        transform: translateY(0px);
        opacity: 1;
        visibility: visible;
      }
    }
    @keyframes slide-down {
      0% {
        transform: translateY(0px);
        opacity: 1;
        visibility: visible;
      }
      100% {
        transform: translateY(780px);
        opacity: 0;
        visibility: hidden;
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
