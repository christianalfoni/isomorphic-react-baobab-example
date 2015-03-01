var React = require('react');
var App = require('./App.jsx');

var AppWrapper = React.createClass({
  childContextTypes: {
    store: React.PropTypes.object,
    actions: React.PropTypes.object
  },
  getChildContext: function () {
    return {
      store: this.props.store,
      actions: this.props.actions
    };
  },
  render: function () {
    return <App/>;
  }
});

module.exports = AppWrapper;
