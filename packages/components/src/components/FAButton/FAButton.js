/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Interface from '../../interface';
import Theme from '../../Theme';

// Source <a href="https://icons8.com/icon/81488/speech-bubble">Speech Bubble icon by Icons8</a>
const icon = (_color, _bubbleColor = 'ffffff') => {
  let color = _color;
  if (color[0] === '#') color = color.substring(1);
  let bubbleColor = _bubbleColor;
  if (bubbleColor[0] === '#') bubbleColor = bubbleColor.substring(1);
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'%0Awidth='64' height='64'%0AviewBox='0 0 172 172'%0Astyle=' fill:%23000000;'%3E%3Cg fill='none' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'%3E%3Cpath d='M0,172v-172h172v172z' fill='none'%3E%3C/path%3E%3Cg%3E%3Cpath d='M138.64141,105.21563c0,6.08047 -4.90469,10.98516 -10.98516,10.98516h-83.3125c-6.08047,0 -10.98516,-4.90469 -10.98516,-10.98516v-48.50937c0,-6.08047 4.90469,-10.98516 10.98516,-10.98516h83.3125c6.08047,0 10.98516,4.90469 10.98516,10.98516z' fill='%23${bubbleColor}'%3E%3C/path%3E%3Cpath d='M113.21094,130.98203c-0.87344,0.87344 -2.25078,0.87344 -3.12422,0l-10.51484,-14.88203c-0.87344,-0.87344 -0.87344,-2.25078 0,-3.12422h24.1875c0.87344,0.87344 0.87344,2.25078 0,3.12422z' fill='%23${bubbleColor}'%3E%3C/path%3E%3Cg fill='%23${color}'%3E%3Cpath d='M122.58359,64.36562c0,2.21719 -1.78047,3.99766 -3.99766,3.99766h-65.44063c-2.21719,0 -3.99766,-1.78047 -3.99766,-3.99766v0c0,-2.21719 1.78047,-3.99766 3.99766,-3.99766h65.47422c2.18359,0.03359 3.96406,1.81406 3.96406,3.99766zM122.58359,80.35625c0,2.21719 -1.78047,3.99766 -3.99766,3.99766h-65.44063c-2.21719,0 -3.99766,-1.78047 -3.99766,-3.99766v0c0,-2.21719 1.78047,-3.99766 3.99766,-3.99766h65.47422c2.18359,0 3.96406,1.78047 3.96406,3.99766zM122.58359,96.31328c0,2.21719 -1.78047,3.99766 -3.99766,3.99766h-65.44063c-2.21719,0 -3.99766,-1.78047 -3.99766,-3.99766v0c0,-2.21719 1.78047,-3.99766 3.99766,-3.99766h65.47422c2.18359,0 3.96406,1.78047 3.96406,3.99766z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A`;
};

const Fab = Interface.styled('div')`
width:48px;
height:48px;
border-radius:100%;
color: ${props => props.theme.palette.onSecondary};
font-size: 1.25em;
line-height: 64px;
background: ${props => props.theme.palette.secondary};
background-image: ${props =>
  props.icon
    ? `url("${props.icon}")`
    : `url("${icon(props.theme.palette.secondary, props.theme.palette.bubbleColor)}")`};
background-repeat:no-repeat;
background-position:50%;
background-size:cover;
box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12);
cursor:pointer;
transition: all .2s ease-in-out;
animation:spin 0.45s ease-in-out;
&:hover {
  transform: scale(1.05);
}
&.isactive {
  animation:spin 0.45s ease-in-out;
  background-image: ${props => (props.iconActive ? `url("${props.iconActive}");` : undefined)}
}
@keyframes spin {
  from {
    opacity: 0;
    transform: scale(0.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  } 
}
`;

Fab.defaultProps = {
  theme: Theme,
};

export default Fab;
