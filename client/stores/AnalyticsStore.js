var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');
var AuthStore = require('./AuthStore')

module.exports = Reflux.createStore({
  listenables: [Actions],

  init: function(){
    return this.analytics = {};
  },

  onAnalyticsTransition : function(lesson){
    this.lesson = lesson;
    this.onFormatLesson(lesson)
  },

  onFormatLesson : function(lesson){
    console.log(lesson)
    this.analytics.timeWatched = [
      {x:'20', y:0},
      {x:'40', y:0},
      {x:'60', y:0},
      {x:'80', y:0},
      {x:'100', y:0},
    ];
    var length = 360;
    for (var i = 0; i < lesson.students.length; i++ ){
      var time = lesson.students[i].timeWatched;
      if (time/length < length/5) {this.analytics.timeWatched[0]['y']++}
      else if (time/length > 1*length/5 && time/length < 2*length/5) {this.analytics.timeWatched[1]['y']++}   
      else if (time/length > 2*length/5 && time/length < 3*length/5) {this.analytics.timeWatched[2]['y']++}   
      else if (time/length > 3*length/5 && time/length < 4*length/5) {this.analytics.timeWatched[3]['y']++}   
      else if (time/length > 4*length/5) {this.analytics.timeWatched[4]['y']++}   
    }
    this.triggerChange();
  },

  triggerChange: function(){
    this.trigger(this.analytics);
  }
})