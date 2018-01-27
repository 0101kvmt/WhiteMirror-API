var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, './client/src/build/');
var APP_DIR = path.resolve(__dirname, './client/src/');

module.exports = {
  entry: APP_DIR + '/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
