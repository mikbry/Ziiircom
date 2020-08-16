/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');

const { config, ...exp } = common({});
module.exports = merge(exp, {
  mode: 'production',
  plugins: [new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') })],
});
