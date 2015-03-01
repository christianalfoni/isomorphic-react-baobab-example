var store = require('./store.js');

module.exports = {
  addItem: function (item) {
    store.select('list').push(item);
  }
};
