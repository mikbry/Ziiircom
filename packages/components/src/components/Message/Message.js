/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { friendlyDate } from '@ziiircom/common';
import Interface from '../../interface';
import Carousel from '../Carousel';
import Theme from '../../Theme';

const buttonBorder = (palette, border = 'none') =>
  palette.button && palette.button.border ? palette.button.border : border;

const buttonBackgroundColor = (palette) =>
  palette.button && palette.button.background ? palette.button.background : palette.surface;
const buttonColor = (palette) => (palette.button && palette.button.color ? palette.button.color : palette.onSurface);
const Styled = Interface.styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: ${(props) => (props.hasPrevious ? '-16px' : '12px')} 0px 0px;

  cursor: default;

  margin-left: ${(props) => (props.fromUser ? 'auto' : 0)};

  &:first-child {
    margin-top: 0px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.fromUser ? 'flex-end' : 'flex-start')};
    animation: 0.3s cubic-bezier(0, 0, 0.2, 1) 0s 1 normal both running ${(props) =>
      props.fromUser ? 'enterMessageFromUser' : 'enterMessageFromBot'};
    width: 96%;
  }
  & > div > p {
    background-color: ${(props) => (props.fromUser ? props.theme.palette.surface : props.theme.palette.secondary)};
    color: ${(props) => (props.fromUser ? props.theme.palette.onSurface : props.theme.palette.onSecondary)};
    box-shadow: ${(props) => props.theme.message.shadow};
    margin-bottom: 4px;
    padding: 6px 16px;
    border-radius: ${(props) => {
      let { smallRadius, radius } = props.theme.message;
      smallRadius += 'px';
      radius += 'px';
      return props.fromUser
        ? `${radius} ${props.hasPrevious ? smallRadius : radius} ${props.hasNext ? smallRadius : `${radius} ${radius}`}`
        : `${props.hasPrevious ? smallRadius : radius} ${radius} ${radius} ${props.hasNext ? smallRadius : radius}`;
    }};
    overflow-wrap: break-word;
    line-height: 1.44;
    width: fit-content;
    max-width: 82%;
  }
  & > div > span {
    text-align: ${(props) => (props.fromUser ? 'right' : 'left')};
    display: block;
    margin: 0px 16px;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    opacity: 0.5;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.66;
  }
  & > div > p > a {
    color: ${(props) => props.theme.palette.link || 'inherit'};
  }
  & > div > p > a > img {
    max-width: 100%;
    display: initial;
  }
  & > div button {
    border: ${(props) => buttonBorder(props.theme.palette)};
    border-radius: 4px;
    min-height: 24px;
    margin: 8px 4px;
    background: ${(props) => buttonBackgroundColor(props.theme.palette)};
    color: ${(props) => buttonColor(props.theme.palette)};
    cursor: pointer;
    font-size: 16px;
    font-family: ${(props) => props.theme.font.family};
    font-weight: ${(props) => props.theme.font.weight};
    padding: 1px 6px;
  }
  & > div button:focus {
    outline: none !important;
  }
  @keyframes enterMessageFromUser {
    0% {
      transform: translate( 0, 20px );
      opacity: 0;
    }
  
    100% {
      transform: translate( 0, 0 );
      opacity: 1;
    }
  }

  @keyframes enterMessageFromBot {
    0% {
      transform: translate( - $message-avatar-size, 0 );
      opacity: 0;
    }
  
    100% {
      transform: translate( 0, 0 );
      opacity: 1;
    }
  }
`;

const Template = Interface.styled('div')`
  background: none;
  & button {
    border: ${(props) => buttonBorder(props.theme.palette)};
    border-radius: 4px;
    min-height: 24px;
    margin: 8px 4px;
    background: ${(props) => buttonBackgroundColor(props.theme.palette)};
    color: ${(props) => buttonColor(props.theme.palette)};
    cursor: pointer;
    font-size: 16px;
    font-family: ${(props) => props.theme.font.family};
    font-weight: ${(props) => props.theme.font.weight};
    padding: 1px 6px;
  }
  & button:focus {
    outline: none !important;
  }
`;

Styled.defaultProps = {
  theme: Theme,
};

const StyledReplies = Interface.styled('div')`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  & > button {
    border: ${(props) => buttonBorder(props.theme.palette, `1px solid ${props.theme.palette.secondary}`)};
    border-radius: 4px;
    min-height: 24px;
    margin: 8px 4px;
    background: ${(props) => buttonBackgroundColor(props.theme.palette)};
    color: ${(props) => buttonColor(props.theme.palette)};
    cursor: pointer;
    font-size: 16px;
  }
`;

StyledReplies.defaultProps = {
  theme: Theme,
};

const EmptyAvatar = Interface.styled('span')`
  z-index: 3;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  margin-top: auto;
  margin-right: 8px;
`;

const Avatar = Interface.styled('img')`
  z-index: 3;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  margin-top: auto;
  margin-right: 8px;
  animation: 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s 1 normal none running enterAvatar;
  border-radius: 50%;

  @keyframes enterAvatar {
    0% {
      transform: scale( .5, .5 );
      opacity: 0;
    }
  
    30% {
      transform: scale( 1.25, 1.25 );
      opacity: 1;
    }
  
    80% {
      transform: scale( .9, .9 );
    }
  
    100% {
      transform: scale( 1, 1 );
    }
  }  
`;

const e = Interface.createElement;
const Message = ({
  createdtime,
  avatar,
  fromUser = true,
  children,
  onAction = () => {},
  hideDate = false,
  hasPrevious = false,
  hasNext = false,
  quickReplies,
  template,
}) => {
  const meta = friendlyDate(createdtime);
  let html = children;
  let body = children;
  if (Array.isArray(html)) {
    [html] = children;
  }
  if (
    typeof html === 'string' &&
    (html.indexOf('/>') > 0 || html.indexOf('</') > 0 || html.indexOf('/&gt;') > 0 || html.indexOf('&lt;/') > 0)
  ) {
    html = { __html: html };
    body = undefined;
  } else {
    html = undefined;
  }

  const handleClick = (event) => {
    if (event.target.tagName === 'BUTTON') {
      onAction(event.target.tagName, event.target.textContent);
    }
  };

  const handleQuickClick = (event) => {
    event.preventDefault();
    const parent = event.target.parentNode;
    parent.style.display = 'none';
  };

  const handleTemplateAction = (event, payload) => {
    event.stopPropagation();
    event.preventDefault();
    onAction('BUTTON', payload);
    const parent = event.target.parentNode;
    parent.parentNode.style.display = 'none';
  };

  let lastComponent;
  if (quickReplies) {
    lastComponent = e(
      StyledReplies,
      {},
      quickReplies.map((qr) =>
        e('button', { key: qr.title, className: 'ziiir-quickreply', onClick: handleQuickClick }, qr.title),
      ),
    );
  } /* else if (template) {
    lastComponent = e(Carousel, { ...template, onAction: handleTemplateAction });
  } */ else if (
    !hideDate &&
    !hasNext
  ) {
    lastComponent = e('span', null, meta);
  }
  const messageContainer = e(
    Styled,
    { fromUser, 'created-time': createdtime, hasPrevious, hasNext },
    avatar && (hasNext ? e(EmptyAvatar) : e(Avatar, { src: avatar.src, alt: avatar.name })),
    e('div', { onClick: handleClick }, e('p', { dangerouslySetInnerHTML: html }, body), lastComponent),
  );
  if (template) {
    return e(Template, {}, messageContainer, e(Carousel, { ...template, onAction: handleTemplateAction }));
  }
  return messageContainer;
};

export default Message;
