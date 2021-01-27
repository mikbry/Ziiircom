/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { merge } = require('webpack-merge');

const common = require(path.join(__dirname, './webpack.common'));

const { config, ...exp } = common({});
module.exports = merge(exp, {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    publicPath: '/',
    hot: true,
    https: true,
    historyApiFallback: { disableDotRule: true },
    port: config.port.dev,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    },
  },
});
