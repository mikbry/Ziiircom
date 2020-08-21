/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Interface from '../../interface';
import Theme from '../../Theme';

const List = Interface.styled('div')`
  padding: 0px;
  background: ${(props) => props.theme.palette.background};
  overflow-y: auto;
`;

List.defaultProps = {
  theme: Theme,
};

export default List;
