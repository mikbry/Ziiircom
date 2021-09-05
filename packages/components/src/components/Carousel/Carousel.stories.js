/* eslint-disable react/jsx-filename-extension */
/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import CCarousel from './Carousel';

export default {
  title: 'React-UI|Components',
  parameters: { component: CCarousel, componentSubtitle: 'Serve as a wrapper for all elements' },
};

export const Carousel = () => (
  <div>
    <CCarousel
      elements={[
        {
          title: 'Demo 1',
          imageUrl: 'https://mikbry.github.io/lesaffranchis/marty/img/croquis_XY/croquis-50-5.jpg',
          buttons: [
            { title: 'Ok', payload: 'Ok' },
            { title: 'Not available', payload: 'No 1' },
          ],
        },
        {
          title: 'Demo 2',
          imageUrl: 'https://mikbry.github.io/lesaffranchis/marty/img/croquis_XY/croquis-50-5.jpg',
          buttons: [
            { title: 'Ok', payload: 'Ok' },
            { title: 'Not available', payload: 'No 1' },
          ],
        },
      ]}
    />
  </div>
);
Carousel.story = {
  parameters: {},
};
