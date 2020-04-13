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

const StyledBox = Interface.styled(Box)`
  padding: 0px;
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
`;

StyledBox.defaultProps = {
  theme: {
    mainBackground: 'papayawhip',
    main: 'palevioletred',
  },
};

const e = Interface.createElement;
const m = msg => e(Message, { key: msg }, msg);
const Messenger = () => {
  const Messages = e(List, { key: 'm' }, [m('msg1'), m('msg2'), m('msg3'), m('msg4'), m('msg5')]);
  return e(StyledBox, null, [e(Header, { key: 'h' }, 'ZiiChat'), Messages, e(Footer, { key: 'f' })]);
};

export default Messenger;
