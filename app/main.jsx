var React = require('react');
var Baobab = require('baobab');
var AppWrapper = require('./AppWrapper.jsx');
var store = require('./store.js');
var actions = require('./actions.js');

React.render(<AppWrapper store={store} actions={actions}/>, document.body);
