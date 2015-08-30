var React = require('react')
var Reflux = require('reflux');
var _ = require('lodash');

var DnDActions = require('./DnD-actions');

module.exports = Reflux.createStore({
  listenables: [DnDActions],

  init: function() {
    this.state = {
      categories: {
        'unassigned':[],
      },
    }
  },

  loadDnDStore: function(categories) {
    var unassigned = this.state.categories.unassigned;
    for(var i=1, category; i<categories.length; i++) {
      category = categories[i];
      this.state.categories[category.name] = [];
      category.things.forEach((thing) => unassigned.push(thing));
    }
    this.state.categories.unassigned = _.shuffle(unassigned);
    this.trigger(this.state);
  },

  triggerDnDStore: function() {
    this.trigger(this.state);
  },

  moveThingBetweenCategories: function(thingId, fromCategory, toCategory) {
    if(fromCategory === toCategory) return;

    _.remove(this.state.categories[fromCategory], (other) => other === thingId);
    this.state.categories[toCategory].push(thingId);
    this.triggerDnDStore();
  }
})