/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

const Theme = {
  palette: {
    primary: 'palevioletred',
    secondary: '#70DBB8',
    background: 'smokewhite',
    surface: 'papayawhip',
    onPrimary: 'white',
    onSecondary: 'white',
    onBackground: 'dark',
    onSurface: 'gray',
    disabledText: 'lightGrey',
  },
  fonts: [],
  font: {
    size: '16px',
    style: 'normal',
    weight: '400',
  },
  spacing: 8,
  radius: 12,
  smallRadius: 4,
  shadow:
    'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px',

  messenger: {
    width: '400px',
    height: '600px',
  },

  message: {
    radius: 12,
    smallRadius: 4,
    shadow:
      'rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px',
  },
};

export default Theme;
