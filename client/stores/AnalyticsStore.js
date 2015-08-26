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

  analyticsTransition : function(lesson){
    this.lesson = lesson;
    this.onFormatLesson(lesson)
    console.log('lesson :', lesson)
  },

//Calculating Number of Students Per Percentage of Video Watched
  onFormatLesson : function(lesson){
    this.analytics.timeWatched = [
      {x:'20', y:0},
      {x:'40', y:0},
      {x:'60', y:0},
      {x:'80', y:0},
      {x:'100', y:0},
    ];

    this.analytics.exercises = [];
    this.analytics.exerciseIndex = [];
    for (var j = 0; j < lesson.exercises.length; j++){
      var exercise = lesson.exercises[j]
      this.analytics.exerciseIndex[j] = lesson.exercises[j]._id
      if (exercise.type === 'truefalse') {
        console.log('truefalse')
        this.analytics.exercises.push([
          {x:'False', y:0},
          {x:'True', y:0}
        ])
      } else if (exercise.type === 'multiplechoice') {
        console.log('multiplechoice')
        var temp = []
        for (var k = 0; k < exercise.exercise.answers.length; k++) {
          temp.push({x:exercise.exercise.answers[k], y:0})
        }
        this.analytics.exercises.push(temp)
      }
    }
 
    var length = 360;
    for (var i = 0; i < lesson.students.length; i++ ){
      var time = lesson.students[i].timeWatched;
      if (time/length < length/5) {this.analytics.timeWatched[0]['y']++}
      else if (time/length > 1*length/5 && time/length < 2*length/5) {this.analytics.timeWatched[1]['y']++}   
      else if (time/length > 2*length/5 && time/length < 3*length/5) {this.analytics.timeWatched[2]['y']++}   
      else if (time/length > 3*length/5 && time/length < 4*length/5) {this.analytics.timeWatched[3]['y']++}   
      else if (time/length > 4*length/5) {this.analytics.timeWatched[4]['y']++}   

      for (var j = 0; j < lesson.students[i].exerciseResults.length; j++) {
        var answer = lesson.students[i].exerciseResults[j].answer
        console.log(answer)
        if (answer === 'true') {answer = 1}
        if (answer === 'false') {answer = 0}
        if(answer !== undefined) {
          var index = this.analytics.exerciseIndex.indexOf(lesson.students[i].exerciseResults[j].id)
          console.log('answer is ', typeof answer, answer)
          this.analytics.exercises[index][parseInt(answer)]['y']++}
      }
    }

    this.triggerChange();
  },

  triggerChange: function(){
    this.trigger(this.analytics);
  }
})