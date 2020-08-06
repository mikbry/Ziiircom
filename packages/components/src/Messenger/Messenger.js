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
  color: ${props => props.theme.palette.onSurface};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1;
  overflow-wrap: break-word;

  padding: 0px;
  width: ${props => props.theme.messenger.width};
  height: ${props => props.theme.messenger.height};
  display: flex;
  border-radius: ${props => `${props.theme.radius}px`};
  flex-direction: column;
  box-shadow: ${props => props.theme.shadow};
  &.isexpanded .ziiir-conversation {
    animation: 0.675s cubic-bezier(0.4, 0, 0.2, 1) 0.45s 1 normal both running enterConversation;
    animation-delay: 0.45s;
    animation-fill-mode: both;
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
  border-radius: 12px 12px 0 0;
`;

const MessengerFooter = Interface.styled(Footer)`
  border-radius: 0 0 12px 12px;
`;

const Conversation = Interface.styled(List)`
  transform-origin: center bottom 0px;
  scroll-behavior: smooth;
`;

const FooterInput = Interface.styled(Input)`
  width: 100%;
  padding: 4px;
  margin: 0;
  border: none;
  outline:none;
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
  header = {},
  messages = [],
  onMessage,
  onClick,
  onAction,
  hideDate = false,
}) => {
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
  const handleKey = event => {
    const value = event.target.value || '';
    if (event.key === 'Enter' && value.length > 0) {
      if (onMessage) {
        onMessage(value);
      }
      // eslint-disable-next-line no-param-reassign
      event.target.value = '';
    }
  };
  if (input.display) {
    inputComponent = e(FooterInput, {
      className: 'ziir-input',
      onKeyUp: handleKey,
      placeholder: input.placeholder || 'Your message',
    });
  }
  return e(
    StyledMessenger,
    { className: isExpanded ? 'isexpanded' : undefined, onClick },
    e(MessengerHeader, null, header.text || ''),
    Messages,
    e(MessengerFooter, null, inputComponent),
  );
};

export default Messenger;
