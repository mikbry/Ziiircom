import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/index.js',
  external: ['react', 'react-dom', 'prop-types', 'react-is', 'hoist-non-react-statics', 'styled-components'],
  output: [{ file: './dist/index.js', format: 'esm', sourcemap: true }],
  plugins: [babel(), resolve({ extensions: ['.js', '.jsx'] }), terser()],
};
