/* eslint-disable import/no-extraneous-dependencies */
import { createElement } from 'react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import styled from 'styled-components';
import { initInterface } from './src/interface';

// Init for styled-components + React
initInterface({ styled, createElement });
