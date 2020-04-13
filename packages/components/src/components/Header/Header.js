/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Interface from '../../interface';

const Header = Interface.styled.header`
  color: white;
  font-size: 1.25em;
  line-height: 64px;
  background: ${props => props.theme.main};
  min-height: 64px;
  padding-left: 1.2em;
  padding-right: 0.3em;
  display: flex;
  & > button {
    align-self: flex-end;
    line-height: 24px;
  }
  & > h6 {
    color: white;
    flex-grow: 1;
    margin: 0;
    padding: 0;
    text-align: left;
  }
`;

Header.defaultProps = {
  theme: {
    main: 'palevioletred',
  },
};

export default Header;
