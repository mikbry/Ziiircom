/* eslint-disable import/no-extraneous-dependencies */
import resolve from '@rollup/plugin-node-resolve';

export default [
  {
    input: './src/index.js',
    output: { dir: './dist', format: 'esm', sourcemap: true },
    plugins: [resolve({ extensions: ['.js'] })],
  },
];
