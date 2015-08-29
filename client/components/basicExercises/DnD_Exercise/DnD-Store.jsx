var React = require('react')
var Reflux = require('reflux');

var DnDActions = require('./DnD-actions');

module.exports = Reflux.createStore({
  listenables: [DnDActions],

  moveThingBetweenCategories: function(thingId, fromCategory, toCategory) {
    console.log(thingId, fromCategory, toCategory);
  }
})