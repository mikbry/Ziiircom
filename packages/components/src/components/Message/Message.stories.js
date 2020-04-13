/* eslint-disable react/jsx-filename-extension */
/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import CMessage from './Message';

export default {
  title: 'React-UI|Components|Message',
  parameters: {
    component: CMessage,
    componentSubtitle: 'Display informations and actions related to the current page',
  },
};

export const Message = () => (
  <div>
    <CMessage>Message</CMessage>
  </div>
);
Message.story = {
  parameters: {},
};
