/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Interface from '../../interface';

const Footer = Interface.styled.div`
  font-size: 1.25em;
  line-height: 64px;
  border: 1px solid ${props => props.theme.main};
  min-height: 64px;
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
  theme: {
    main: 'palevioletred',
  },
};

export default Footer;
