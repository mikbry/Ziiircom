/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Interface from '../../interface';

const Box = Interface.styled.section`
  padding: 1.2em;
  background: ${props => props.theme.mainBackground};
`;

Box.defaultProps = {
  theme: {
    mainBackground: 'papayawhip',
  },
};

export default Box;
