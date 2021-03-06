import React, { createElement, useRef } from 'react';
import styled from 'styled-components';
import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { addDecorator } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";

import { setup } from '../src/interface';

setup({ styled, createElement, useRef });

addDecorator(withKnobs);
addDecorator(storyFn => <div style={{ padding: '48px' }}>{storyFn()}</div>);
addParameters({
  options: {
    storySort: (a, b) => {
      if (a[0].includes('docs-')) {
        if (a[0].includes('intro-')) {
          return -1;
        }

        return 0;
      }

      return 1;
    }
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
