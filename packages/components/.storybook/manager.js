import { addons } from '@storybook/addons';
import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import 'storybook-addon-styled-component-theme/dist/register';
import appTheme from './appTheme';

addons.setConfig({
  theme: appTheme,
  isToolshown: true,
});
