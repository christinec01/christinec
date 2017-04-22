const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: {
    vendor: [
      'classnames',
      'react',
      'react-dom',
      'react-tap-event-plugin',
      'react-select',
      'react-router',
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
    new ExtractTextPlugin("../css/[name].css"),
  ],

  module: {
    loaders: [
      // we pass the output from babel loader to react-hot loader
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: "css-loader!less-loader",
        }),
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
