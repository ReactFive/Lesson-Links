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
    this.answer = categories;
    var unassigned = this.state.categories.unassigned;
    for(var i=1, category; i<categories.length; i++) {
      category = categories[i];
      this.state.categories[category.name] = [];
      category.things.forEach((thing) => unassigned.push(thing));
    }
    this.state.categories.unassigned = _.shuffle(unassigned);
    this.trigger(this.state);
  },

  evaluateResponse: function() {
    var categories = this.state.categories;
    var correctCount =0;
    var wrongCount =0;
    for(var i=1, currThings; i<this.answer.length; i++) {
      currThings = this.answer[i].things
      for(var j=0; j<currThings.length; j++) {
        if(categories[this.answer[i].name].indexOf(currThings[j]) >= 0) {
          correctCount++;
        } else {
          wrongCount++;
        }
      }
    }

    this.state.outcome = "You have " + correctCount + " items placed correctly and " + wrongCount + " items placed incorrectly";
    this.state.correct = (wrongCount === 0);
    this.trigger(this.state);
  },

  resumeExercise: function() {
    this.state.outcome = null;
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
