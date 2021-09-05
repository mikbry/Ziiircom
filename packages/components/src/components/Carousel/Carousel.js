/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Interface from '../../interface';
import Theme from '../../Theme';
import Card from '../Card';

const CarouselStyled = Interface.styled('div')`
    font-size: 1em;
    display: flex;
    width: 100%;
    flex-direction: row;
    font-family: ${(props) => props.theme.font.family};
    font-weight: ${(props) => props.theme.font.weight};
    margin: 0;
    padding: 0;
    & > div {
     margin-right: 0.15em;
    }
    & > div:first-of-type {
      border-top-left-radius: ${(props) => props.theme.message.radius}px;
      border-bottom-left-radius: ${(props) => props.theme.message.radius}px;
    }
    & > div:first-of-type > img {
      border-top-left-radius: ${(props) => props.theme.message.radius}px;
    }
    & > div:last-of-type {
      border-top-right-radius: ${(props) => props.theme.message.radius}px;
      border-bottom-right-radius: ${(props) => props.theme.message.radius}px;
    }
    & > div:last-of-type > img {
      border-top-right-radius: ${(props) => props.theme.message.radius}px;
    }
  `;

CarouselStyled.defaultProps = {
  theme: Theme,
};

const Scroll = Interface.styled('div')`
   width: 100%;
   overflow-x: auto;
`;

CarouselStyled.defaultProps = {
  theme: Theme,
};

const e = Interface.createElement;
const Carousel = ({ elements, onAction = () => {} }) => {
  const cardsComponents = [];
  elements.forEach((element, index) => {
    const button = e(Card, {
      onAction: (event, action, i) => {
        onAction(event, action, index, i);
      },
      ...element,
    });
    cardsComponents.push(button);
  });
  const scrollContainer = e(CarouselStyled, undefined, cardsComponents);
  return e(Scroll, undefined, scrollContainer);
};
export default Carousel;
