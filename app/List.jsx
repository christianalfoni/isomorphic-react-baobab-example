var React = require('react/addons');
var ContextMixin = require('./ContextMixin.js');

var List = React.createClass({
  mixins: [ContextMixin, React.addons.LinkedStateMixin],
  cursors: {
    list: ['list']
  },
  getInitialState: function () {
    return {
      title: ''
    };
  },
  addItem: function (event) {
    event.preventDefault();
    this.actions.addItem(this.state.title);
    this.setState({
      title: ''
    });
  },
  renderItem: function (item, index) {
    return <li key={index}>{item}</li>
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input valueLink={this.linkState('title')}/>
        </form>
        <ul>
          {this.state.list.map(this.renderItem)}
        </ul>
      </div>
    );
  }
});

module.exports = List;
