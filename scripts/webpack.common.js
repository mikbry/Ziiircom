/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');

module.exports = env => {
  const packagesPath = '../packages';
  let packagePath = ' ./';
  if (process.env.PACKAGE_DIR || env.PACKAGE_DIR) {
    packagePath = path.join(__dirname, packagesPath, process.env.PACKAGE_DIR || env.PACKAGE_DIR);
  }
  let config = {};
  try {
    config = require(path.join(packagePath, '/config.json'));
  } catch {
    //
  }

  const { version } = require(path.join(packagePath, '/package.json'));

  const isDevelopment = process.env.NODE_ENV !== 'production';

  return {
    config,
    context: packagePath,
    entry: './src/index.js',
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules|__tests__/,
          use: ['babel-loader', 'eslint-loader'],
        },
        {
          test: /\.(vert|frag|vs|fs)$/i,
          use: 'raw-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.svg$/,
          loader: 'svg-url-loader',
        },
      ],
    },
    output: {
      path: path.resolve('./dist'),
      filename: '[name].[hash].js',
      sourceMapFilename: '[file].map[query]',
      publicPath: '',
    },
    devtool: 'source-map',
    plugins: [
      new CopyWebpackPlugin([
        {
          context: path.resolve('./public/'),
          from: './**/*',
          to: path.resolve('./dist'),
          force: true,
        },
      ]),
      new HtmlWebpackPlugin({
        path: path.resolve('./dist'),
        template: './public/index.html',
      }),
      new HtmlReplaceWebpackPlugin([
        {
          pattern: '%PUBLIC_URL%',
          replacement: isDevelopment ? `${config.public_url.dev}:${config.port.dev}` : config.public_url.prod,
        },
        {
          pattern: '%TITLE%',
          replacement: config.title,
        },
      ]),
      new webpack.DefinePlugin({
        'process.env': {
          apiUrl: JSON.stringify(process.env.API_URL || config.apiUrl || 'ENV__API_URL'),
          clientId: JSON.stringify(process.env.CLIENT_ID || config.clientId || 'ENV__CLIENT_ID'),
          clientSecret: JSON.stringify(process.env.CLIENT_SECRET || config.clientSecret || 'ENV__CLIENT_SECRET'),
          version: JSON.stringify(process.env.CLIENT_VERSION || version),
        },
      }),
    ],
  };
};
