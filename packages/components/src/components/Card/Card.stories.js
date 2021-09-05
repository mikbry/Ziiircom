/* eslint-disable react/jsx-filename-extension */
/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import CCard from './Card';

export default {
  title: 'React-UI|Components',
  parameters: { component: CCard, componentSubtitle: 'Serve as a wrapper for all elements' },
};

export const Card = () => (
  <div>
    <CCard
      title='Demo'
      imageUrl='https://mikbry.github.io/lesaffranchis/marty/img/croquis_XY/croquis-50-5.jpg'
      buttons={[
        { title: 'Ok', payload: 'Ok' },
        { title: 'Not available', payload: 'No 1' },
      ]}
    />
  </div>
);
Card.story = {
  parameters: {},
};
