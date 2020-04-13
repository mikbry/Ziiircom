/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig({}), {
  mode: 'production',
  plugins: [new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') })],
});
