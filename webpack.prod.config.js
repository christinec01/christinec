let path = require('path');
let webpack = require('webpack');
let config = require('./webpack.config');
let _ = require('lodash');

config.devtool = '#inline-cheap-source-map';
config.entry = _.extend(config.entry, {
  portfolio: [
    path.resolve('./static/js')
  ],
});

config.output = {
  path: path.resolve('./static/js/bundles'),
  filename: '[name]_bundle.js',
};

config.plugins.push(
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin()
);

module.exports = config;
