/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Interface from '../interface';
import Box from '../components/Box';
import Header from '../components/Header';
import List from '../components/List';
import Footer from '../components/Footer';
import Message from '../components/Message';
import Input from '../components/Input';
import Theme from '../Theme';

const StyledMessenger = Interface.styled(Box)`
  color: ${(props) => props.theme.palette.onSurface};
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.font.size};
  font-style: ${(props) => props.theme.font.style};
  font-weight: ${(props) => props.theme.font.weight};
  line-height: 1.1;
  overflow-wrap: break-word;

  padding: 0px;
  width: ${(props) => props.theme.messenger.width};
  height: ${(props) => props.theme.messenger.height};
  display: flex;
  border-radius: ${(props) => `${props.theme.radius}px`};
  flex-direction: column;
  box-shadow: ${(props) => props.theme.shadow};

  & p {
    font-size: 13px;
    line-height: 14px;
    text-align: end;
    padding-right: 16px;
    margin: 4px 0;

  }

  &.isexpanded .ziiir-conversation {
    animation: 0.675s cubic-bezier(0.4, 0, 0.2, 1) 0.45s 1 normal both running enterConversation;
    animation-delay: 0.45s;
    animation-fill-mode: both;
  }

  & .ziiir-conversation {
    padding: 16px;
  }

  @keyframes enterConversation {
    0% {
      height: 0;
      padding: 0;
      opacity: 0;
    }
  
    50% {
      opacity: 0;
    }
  
    100% {
      height: 100%;
      padding: 16px;
      opacity: 1;
    }
  }
`;

StyledMessenger.defaultProps = {
  theme: Theme,
};

const MessengerHeader = Interface.styled(Header)`
  border-bottom: ${(props) => `1px solid ${props.theme.palette.border}`};
  border-radius: ${(props) => `${props.theme.radius}px ${props.theme.radius}px 0 0`};
`;

MessengerHeader.defaultProps = {
  theme: Theme,
};

const MessengerFooter = Interface.styled(Footer)`
  border-top: ${(props) => `1px solid ${props.theme.palette.border}`};
  border-radius: ${(props) => `0 0 ${props.theme.radius}px ${props.theme.radius}px`};
  display: flex;
  flex-direction: column;
  & button {
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    padding-right: 0;
    color: ${(props) => props.theme.palette.disabledText};
    background-color: transparent;
  }
  & button:hover {
    color: ${(props) => props.theme.palette.onSurface};
  }
  & button img {
    background-color: transparent;
    filter: opacity(30%);
  }
  & button:hover img {
    background-color: transparent;
    filter: opacity(50%);
  }
`;

MessengerFooter.defaultProps = {
  theme: Theme,
};

const Conversation = Interface.styled(List)`
  transform-origin: center bottom 0px;
  scroll-behavior: smooth;
`;

const FooterInputContainer = Interface.styled('div')`
display: flex;
width: 100%;
padding: 4px;
margin: 0;
border: none;
outline: none;
`;
const FooterInput = Interface.styled(Input)`
  width: 100%;
  padding: 4px;
  margin: 0;
  border: none;
  outline: none;
`;

const e = Interface.createElement;
const m = (createdtime, msg, fromUser, avatar, onAction, hideDate, hasPrevious, hasNext, quickReplies) =>
  e(
    Message,
    { key: createdtime, createdtime, avatar, fromUser, onAction, hideDate, hasPrevious, hasNext, quickReplies },
    msg,
  );
const Messenger = ({
  isExpanded = true,
  input = { display: true },
  header: _header = {},
  messages = [],
  onMessage,
  onClick,
  onAction,
  hideDate = false,
}) => {
  const { text: headerText = '', ...header } = _header;
  const inputRef = Interface.useRef(null);
  const Messages = e(
    Conversation,
    { isExpanded, className: 'ziiir-conversation' },
    messages
      .sort((m1, m2) => m1.created_time > m2.created_time)
      .map((msg, i, ms) => {
        const prev = ms[i - 1];
        const hasPrevious = !!prev && prev.from === msg.from && msg.created_time - prev.created_time < 2000;
        const next = ms[i + 1];
        const hasNext = !!next && next.from === msg.from && next.created_time - msg.created_time < 2000;
        return m(
          msg.created_time,
          msg.text,
          msg.from === 'user',
          msg.avatar,
          onAction,
          hideDate,
          hasPrevious,
          hasNext,
          msg.quick_replies,
        );
      }),
  );
  let inputComponent = 'ziiir.com';
  const handleKey = (event) => {
    const value = event.target.value || '';
    if (event.key === 'Enter' && value.length > 0) {
      if (onMessage) {
        onMessage(value);
      }
      // eslint-disable-next-line no-param-reassign
      event.target.value = '';
    }
  };
  const handleSend = () => {
    const { value } = inputRef.current;
    if (value && value.length && onMessage) {
      onMessage(value);
      inputRef.current.value = '';
    }
  };

  if (input.display) {
    inputComponent = e(FooterInput, {
      className: 'ziir-input',
      onKeyUp: handleKey,
      ref: inputRef,
      placeholder: input.placeholder || 'Your message',
    });
    if (input.sendButton) {
      let buttoncontent = 'send';
      if (input.sendButton.icon) {
        buttoncontent = e('img', {
          src: input.sendButton.icon.src
            ? input.sendButton.icon.src
            : 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMi4wMSAyMUwyMyAxMiAyLjAxIDMgMiAxMGwxNSAyLTE1IDJ6Ii8+PC9zdmc+',
        });
      }
      inputComponent = e(
        FooterInputContainer,
        null,
        inputComponent,
        e('button', { onClick: handleSend }, buttoncontent),
      );
    }
  }
  return e(
    StyledMessenger,
    { className: isExpanded ? 'isexpanded' : undefined, onClick },
    e(MessengerHeader, header, headerText),
    Messages,
    e('p', null, 'Powered by ', e('a', { href: 'https://ziiir.com' }, 'ziiir.com')),
    e(MessengerFooter, null, inputComponent),
  );
};

export default Messenger;
