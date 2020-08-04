/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { friendlyDate } from '@ziiircom/common';
import Interface from '../../interface';
import Theme from '../../Theme';

const Styled = Interface.styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 80%;
  margin: ${props => (props.hasPrevious ? '-16px' : '12px')} 0px 0px;

  cursor: default;

  margin-left: ${props => (props.fromUser ? 'auto' : 0)};

  &:first-child {
    margin-top: 0px;
  }

  & > div {
    width: 100%;
    animation: 0.3s cubic-bezier(0, 0, 0.2, 1) 0s 1 normal both running ${props =>
      props.fromUser ? 'enterMessageFromUser' : 'enterMessageFromBot'};
  }
  & > div > p {
    background-color: ${props => (props.fromUser ? props.theme.palette.surface : props.theme.palette.secondary)};
    color: ${props => (props.fromUser ? props.theme.palette.onSurface : props.theme.palette.onSecondary)};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
    margin-bottom: 4px;
    padding: 16px;
    border-radius: ${props =>
      props.fromUser
        ? `12px ${props.hasPrevious ? '4px' : '12px'} ${props.hasNext ? '4px' : '12px 12px'}`
        : `${props.hasPrevious ? '4px' : '12px'} 12px 12px ${props.hasNext ? '4px' : '12px'}`};
    overflow-wrap: break-word;
    line-height: 1.44;
  }
  & > div > span {
    text-align: ${props => (props.fromUser ? 'right' : 'left')};
    display: block;
    margin: 0px 16px;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    opacity: 0.5;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.66;
  }
  & > div > p > a {
    color: ${props => props.theme.palette.link || 'inherit'};
  }
  & > div > p > button {
    border: ${props =>
      props.theme.palette.button && props.theme.palette.button.border ? props.theme.palette.button.border : 'none'};
    border-radius: 4px;
    height: 24px;
    margin: 8px 4px;
    background: ${props =>
      props.theme.palette.button && props.theme.palette.button.background
        ? props.theme.palette.button.background
        : props.theme.palette.surface};
    color: ${props =>
      props.theme.palette.button && props.theme.palette.button.color
        ? props.theme.palette.button.color
        : props.theme.palette.onSurface};
    cursor: pointer;
    font-size: 16px;
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

Styled.defaultProps = {
  theme: Theme,
};

const StyledReplies = Interface.styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  & > button {
    border: ${props =>
      props.theme.palette.button && props.theme.palette.button.border
        ? props.theme.palette.button.border
        : `1px solid ${props.theme.palette.secondary}`};
    border-radius: 4px;
    min-height: 24px;
    margin: 8px 4px;
    background: ${props =>
      props.theme.palette.button && props.theme.palette.button.background
        ? props.theme.palette.button.background
        : props.theme.palette.surface};
    color: ${props =>
      props.theme.palette.button && props.theme.palette.button.color
        ? props.theme.palette.button.color
        : props.theme.palette.onSurface};
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
  onAction,
  hideDate = false,
  hasPrevious = false,
  hasNext = false,
  quickReplies,
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

  const handleClick = event => {
    if (event.target.tagName === 'BUTTON') {
      onAction(event.target.tagName, event.target.textContent);
    }
  };

  const handleQuickClick = event => {
    const parent = event.target.parentNode;
    parent.style.display = 'none';
  };

  return e(
    Styled,
    { fromUser, 'created-time': createdtime, hasPrevious, hasNext },
    avatar && (hasNext ? e(EmptyAvatar) : e(Avatar, { src: avatar.src, alt: avatar.name })),
    e(
      'div',
      { onClick: handleClick },
      e('p', { dangerouslySetInnerHTML: html }, body),
      !hideDate && !quickReplies && !hasNext && e('span', null, meta),
      quickReplies &&
        e(
          StyledReplies,
          { onClick: handleQuickClick },
          quickReplies.map(qr => e('button', { key: qr.title }, qr.title)),
        ),
    ),
  );
};

export default Message;
