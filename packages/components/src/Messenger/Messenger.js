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
import Theme from '../Theme';

const StyledMessenger = Interface.styled(Box)`
  color: ${props => props.theme.palette.onSurface};
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1;
  overflow-wrap: break-word;

  padding: 0px;
  width: 400px;
  height: 600px;
  display: flex;
  border-radius: 12px;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

  &.isExpanded {
    .zii-conversation {
      animation: 0.675s cubic-bezier(0.4, 0, 0.2, 1) 0.45s 1 normal both running enterConversation;
      animation-delay: 0.45s;
      animation-fill-mode: both;
    }
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

const e = Interface.createElement;
const m = (msg, meta, fromUser, avatar) => e(Message, { key: msg, meta, avatar, fromUser }, msg);
const Messenger = ({ isExpanded = true }) => {
  const Messages = e(Conversation, { isExpanded, className: 'zii-conversation' }, [
    m('msg1', '1min ago'),
    m('msg2', '1min ago', false),
    m('msg3', '1min ago'),
    m('msg4', '1min ago'),
    m('msg5', '1min ago', false),
  ]);
  return e(
    StyledMessenger,
    { className: isExpanded ? 'isExpanded' : undefined },
    e(MessengerHeader, null, 'Hello !'),
    Messages,
    e(MessengerFooter, null, 'ZiiChat'),
  );
};

export default Messenger;
