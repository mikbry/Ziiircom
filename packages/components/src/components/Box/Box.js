/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Interface from '../../interface';
import Theme from '../../Theme';

const Box = Interface.styled('div')`
  padding: 1.2em;
  background: ${(props) => props.theme.palette.background};
  color: #292c45;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1;
  overflow-wrap: break-word;
`;

Box.defaultProps = {
  theme: Theme,
};

export default Box;
