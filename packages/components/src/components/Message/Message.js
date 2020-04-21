/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Interface from '../../interface';
import Theme from '../../Theme';

const Styled = Interface.styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 80%;
  margin: 12px 0px 0px;

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
    background-color: ${props => (props.fromUser ? props.theme.palette.secondary : props.theme.palette.surface)};
    color: ${props => (props.fromUser ? props.theme.palette.onSecondary : props.theme.palette.onSurface)};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;
    margin-bottom: 4px;
    padding: 16px;
    border-radius: ${props => (props.fromUser ? '12px 12px 4px 12px' : '12px 12px 12px 4px')};
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
const Message = ({ meta, avatar, fromUser = true, children }) =>
  e(
    Styled,
    { fromUser },
    e('div', null, e('p', null, children), e('span', null, meta)),
    avatar && e(Avatar, { src: avatar.src, alt: avatar.name }),
  );

export default Message;