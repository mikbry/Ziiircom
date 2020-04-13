/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Interface from '../../interface';

const List = Interface.styled.div`
  padding: 0px;
  background: ${props => props.theme.mainBackground};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  & > div {
    line-height: 64px;
    min-height: 64px;
    padding: 1.2em;
    border: 1px solid ${props => props.theme.main};
  }
`;

List.defaultProps = {
  theme: {
    mainBackground: 'papayawhip',
    main: 'palevioletred',
  },
};

export default List;
