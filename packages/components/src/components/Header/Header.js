/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Interface from '../../interface';
import Theme from '../../Theme';

const HeaderStyled = Interface.styled('header')`
  color: ${(props) => props.theme.palette.onPrimary};
  font-size: 1.25em;
  background: ${(props) => props.theme.palette.primary};
  min-height: 64px;
  padding-top: 1.2em;
  padding-bottom: 1.2em;
  padding-left: 1.2em;
  padding-right: 0.3em;
  display: flex;
  @media only screen and (max-width: 772px) {
    button:first-of-type {
      display: block !important;
    }
  }
`;

HeaderStyled.defaultProps = {
  theme: Theme,
};

const CloseBut = Interface.styled('button')`
width:24px;
height:24px;
margin: 0.6em 1.2em 1.2em -0.6em;
padding: 4px;
border: none;
border-radius:100%;
display: ${(props) => (props.closeButton ? 'block' : 'none')};
background-color: rgba(255, 255, 255, 0.2);
&:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
`;

const CloseIcon = Interface.styled('div')`
width:16px;
height:16px;
background: transparent;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='white'%3E%3Cpath d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z'/%3E%3C/g%3E%3C/svg%3E");
background-repeat:no-repeat;
background-position:50%;
background-size:cover;
cursor:pointer;
`;

CloseIcon.defaultProps = {
  theme: Theme,
};

const e = Interface.createElement;
const Header = ({ children, closeButton, onClose }) => {
  // let container = e(HeaderStyled, null, children[0]);
  const button = e(CloseBut, { closeButton, onClick: onClose }, e(CloseIcon));
  return e(HeaderStyled, null, button, e('span', null, children[0]));
  // return container;
};
export default Header;
