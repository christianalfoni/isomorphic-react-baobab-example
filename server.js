require('node-jsx').install({
  extension: '.jsx'
});

var express = require('express');
var httpProxy = require('http-proxy');
var config = require('./webpack.config.js');
var path = require('path');
var fs = require('fs');
var React = require('react');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var AppWrapper = React.createFactory(require('./app/AppWrapper.jsx'));

var app = express();
var index = fs.readFileSync(path.resolve(__dirname, 'index.html')).toString();

var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});

app.get('/', function (req, res) {
  var store = {
    list: ['foo', 'bar']
  };
  var app = React.renderToString(AppWrapper({store: store}));
  var html = index.replace('{{APP}}', app).replace('{{STORE}}', JSON.stringify(store));
  res.type('html');
  res.send(html);
});

app.all('*', function (req, res) {
  proxy.web(req, res, {
    target: 'http://localhost:8080/'
  });
});

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  contentBase: path.resolve(__dirname, 'build'),
  hot: false,
  quiet: false,
  noInfo: false,
  publicPath: '/',
  stats: {
    colors: true
  },
  historyApiFallback: true
});

app.listen(3000, function () {
  console.log('App listening at localhost:3000');
  server.listen(8080, 'localhost', function () {
    console.log('Bundler listening at localhost:8080');
  });
});
