var React = require('react')
var Reflux = require('reflux');
var _ = require('lodash');

var DnDActions = require('./DnD-actions');

module.exports = Reflux.createStore({
  listenables: [DnDActions],

  init: function() {
    this.state = {
      categories: {
        'fruits':[],
        'vegetables':[],
        'unassigned':['apple','orange','tomato'],
      },
    }
  },

  triggerDnDStore: function() {
    this.trigger(this.state);
  },

  moveThingBetweenCategories: function(thingId, fromCategory, toCategory) {
    console.log(thingId, fromCategory, toCategory);
    if(fromCategory === toCategory) return;

    _.remove(this.state.categories[fromCategory], (other) => other === thingId);
    this.state.categories[toCategory].push(thingId);
    this.triggerDnDStore();
  }
})