/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Interface from '../../interface';
import Theme from '../../Theme';

const Header = Interface.styled('header')`
  color: ${props => props.theme.palette.onPrimary};
  font-size: 1.25em;
  background: ${props => props.theme.palette.primary};
  min-height: 64px;
  padding-top: 1.2em;
  padding-left: 1.2em;
  padding-right: 0.3em;
  display: flex;
`;

Header.defaultProps = {
  theme: Theme,
};

export default Header;
