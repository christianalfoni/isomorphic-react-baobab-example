var path = require('path');
var webpack = require('webpack');
var appPath = path.resolve(__dirname, 'app');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080', 
    path.resolve(appPath, 'main.jsx')
  ],
  devtool: 'eval',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loaders: ['jsx'],
      exclude: [node_modules_dir]
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  }
};

module.exports = config;
