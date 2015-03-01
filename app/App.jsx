var React = require('react/addons');
var ContextMixin = require('./ContextMixin.js');
var List = require('./List.jsx');

var App = React.createClass({
  mixins: [ContextMixin],
  cursors: {
    list: ['list']
  },
  render: function () {
    return (
      <div>
        <h1>Hello world ({this.state.list.length} in list)</h1>
        <List/>
      </div>
    );
  }
});

module.exports = App;
