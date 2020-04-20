/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Interface from '../../interface';
import Theme from '../../Theme';

const Footer = Interface.styled('div')`
  color: ${props => props.theme.palette.disabledText};
  font-size: 1em;
  line-height: 36px;
  min-height: 36px;
  padding-left: 1.2em;
  padding-right: 0.3em;
  display: flex;
  margin-top: auto;
  & > button {
    align-self: flex-end;
    line-height: 24px;
  }
`;

Footer.defaultProps = {
  theme: Theme,
};

export default Footer;
