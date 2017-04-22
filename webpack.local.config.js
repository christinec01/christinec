const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');
const _ = require('lodash');

config.devtool = 'inline-source-map';
config.entry = _.extend(config.entry, {
  portfolio: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.resolve('./static/js/index.js'),
  ],
});

config.output = {
  path: path.resolve('./static/js/bundles'),
  filename: '[name]_bundle.js',
  publicPath: 'http://localhost:8080/',
};

config.devServer = {
  hot: true,
  inline: true,
  contentBase: path.resolve('./static/js'),
  publicPath: 'http://localhost:8080/',
  headers: {"Access-Control-Allow-Origin": "*"},
};

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
);

module.exports = config;
