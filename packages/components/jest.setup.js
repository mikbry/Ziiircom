/* eslint-disable import/no-extraneous-dependencies */
import { createElement, useRef } from 'react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import styled from 'styled-components';
import { setup } from './src/interface';

// Init for styled-components + React
setup({ styled, createElement, useRef });
