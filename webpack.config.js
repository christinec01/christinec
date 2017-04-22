const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  entry: {
    vendor: [
      'classnames',
      'react',
      'react-dom',
      'lodash',
      'moment',
      'jquery',
    ],
  },

  output: {
    path: path.resolve('./static/js/bundles'),
    filename: '[name]_bundle.js',
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js'}),
    new webpack.NamedModulesPlugin(),
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loaders: ['css-loader'],
      },
      {
        test: /\.less$/,
        loaders: ["css-loader!less-loader"],
      },
    ],
  },

  resolve: {
    modules: [path.resolve(__dirname, './static/js'), 'node_modules', 'bower_components'],
    extensions: ['.js', '.jsx', '.json'],
  },

  performance: {
    hints: false,
  },
};
