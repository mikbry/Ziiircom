/* eslint-disable react/jsx-filename-extension */
/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Messenger from './Messenger';

export default {
  title: 'React-UI|Messenger',
  parameters: {
    component: Messenger,
    componentSubtitle: 'Display informations and actions related to the current page',
  },
};

const messages = [
  { from: 'user', text: 'hello', created_time: 10000 },
  { from: 'user', text: 'I am Bob !', created_time: 10001 },
  { from: 'bot', text: 'hello', created_time: 10002 },
  { from: 'bot', text: 'I am Liza', created_time: 10003 },
  { from: 'bot', text: 'How are you ?', created_time: 10004 },
];
export const Basic = () => (
  <div>
    <Messenger messages={messages} />
  </div>
);
Basic.story = {
  parameters: {},
};

const messagesQR = [
  { from: 'user', text: 'hello', created_time: 10000 },
  { from: 'user', text: 'I am Bob !', created_time: 10001 },
  { from: 'bot', text: 'hello', created_time: 10002 },
  {
    from: 'bot',
    text: 'I am Liza',
    quick_replies: [{ title: 'Nice to meet you' }, { title: 'Great' }],
    created_time: 10003,
  },
];
export const BasicQuickReplies = () => (
  <div>
    <Messenger messages={messagesQR} />
  </div>
);
BasicQuickReplies.story = {
  parameters: {},
};

const messagesC = [
  { from: 'user', text: 'hello', created_time: 10000 },
  { from: 'user', text: 'I am Bob !', created_time: 10001 },
  { from: 'bot', text: 'hello', created_time: 10002 },
  {
    from: 'bot',
    text: 'I am Liza',
    template: {
      type: 'carousel',
      elements: [
        {
          title: 'Demo 1',
          imageUrl: 'https://mikbry.github.io/lesaffranchis/marty/img/croquis_XY/croquis-50-5.jpg',
          buttons: [
            { title: 'Ok', payload: 'Ok 1' },
            { title: 'Not available', payload: 'No 1' },
          ],
        },
        {
          title: 'Demo 2',
          imageUrl: 'https://mikbry.github.io/lesaffranchis/marty/img/croquis_XY/croquis-50-5.jpg',
          buttons: [
            { title: 'Ok', payload: 'Ok 2' },
            { title: 'Not available', payload: 'No 2' },
          ],
        },
        {
          title: 'Demo 3',
          imageUrl: 'https://mikbry.github.io/lesaffranchis/marty/img/croquis_XY/croquis-50-5.jpg',
          buttons: [
            { title: 'Ok', payload: 'Ok 3' },
            { title: 'Not available', payload: 'No 3' },
          ],
        },
      ],
    },
    created_time: 10003,
  },
];
export const BasicCarousel = () => (
  <div>
    <Messenger messages={messagesC} />
  </div>
);
BasicCarousel.story = {
  parameters: {},
};
