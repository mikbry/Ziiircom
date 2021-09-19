/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Interface from '../../interface';
import Theme from '../../Theme';

const CardStyled = Interface.styled('div')`
   font-size: 1em;
   display: flex;
   width: fit-content; 
   flex-direction: column;
   font-family: ${(props) => props.theme.font.family};
   font-weight: ${(props) => props.theme.font.weight};
   margin: 0;
   padding: 0;
   color: ${(props) => props.theme.palette.secondary};
   border: 1px solid ${(props) => props.theme.palette.border};
   background-color: ${(props) => props.theme.palette.secondary};
   cursor: pointer;
   & > p {
    margin: 8px;
    color: ${(props) => props.theme.palette.onSecondary};
   }
   & > img {
    max-width: 200px;
    margin: 8px;
   }
 `;

CardStyled.defaultProps = {
  theme: Theme,
};

const ButtonStyled = Interface.styled('button')`
   font-size: 1em;
   font-family: ${(props) => props.theme.font.family};
   font-weight: ${(props) => props.theme.font.weight};
   margin: 8px;
   padding: 0.3em 1em;
   border-radius: 3px;
   color: ${(props) => props.theme.palette.secondary};
   background: none;
   cursor: pointer;
   &:hover {
    color: ${(props) => props.theme.palette.onSecondary};
    border: 2px solid ${(props) => props.theme.palette.secondary};
    background: ${(props) => props.theme.palette.secondary};   }
 `;

ButtonStyled.defaultProps = {
  theme: Theme,
};

const e = Interface.createElement;
const Card = ({ title, imageUrl, buttons = [], onAction = () => {}, defaultAction }) => {
  const buttonsComponents = [];
  buttons.forEach((buttonDef, index) => {
    const button = e(ButtonStyled, { onClick: (event) => onAction(event, buttonDef.payload, index) }, buttonDef.title);
    buttonsComponents.push(button);
  });
  const handleDefaultAction = (event) => {
    if (defaultAction) {
      onAction(event, defaultAction);
    } else {
      event.stopPropagation();
    }
  };
  return e(
    CardStyled,
    { onClick: handleDefaultAction },
    e('img', { src: imageUrl }),
    e('p', null, title),
    ...buttonsComponents,
  );
};
export default Card;
