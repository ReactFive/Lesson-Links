var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');
var AuthStore = require('./AuthStore')
var moment = require('moment')

module.exports = Reflux.createStore({
  listenables: [Actions],

  init: function(){
    return this.analytics = {};
  },

  analyticsTransition : function(lesson){
    this.lesson = lesson;
    this.onFormatLesson(lesson)
    this.onFormatStudent(lesson)
    console.log('lesson :', lesson)
  },

  onFormatStudent : function(lesson){
    this.analytics.studentTime = [];
    for (var i = 0; i < lesson.students.length; i++) {
      this.analytics.studentTime.push({
        name : lesson.students[i].name,
        time : moment(lesson.students[i].timeWatched, 'mm-ss')
      })
    }
  },

//Calculating Number of Students Per Percentage of Video Watched
  onFormatLesson : function(lesson){
    console.log('lesson :',lesson)
    this.analytics.timeWatched = [
      {x:'20%', y:0},
      {x:'40%', y:0},
      {x:'60%', y:0},
      {x:'80%', y:0},
      {x:'100%', y:0},
    ];

    this.analytics.exercises = {
      answerCount: [],
      studentsAnswer : []
    };
    this.analytics.exerciseIndex = [];

    for (var j = 0; j < lesson.exercises.length; j++){
      var exercise = lesson.exercises[j]
      this.analytics.exerciseIndex[j] = lesson.exercises[j]._id
      if (exercise.type === 'truefalse') {
        console.log('truefalse')
        this.analytics.exercises.answerCount.push([
          {x:'False', y:0},
          {x:'True', y:0}
        ])
        this.analytics.exercises.studentsAnswer.push([])
      } else if (exercise.type === 'multiplechoice') {
        console.log('multiplechoice')
        var temp = []
        for (var k = 0; k < exercise.exercise.answers.length; k++) {
          temp.push({x:exercise.exercise.answers[k], y:0})
        }
        this.analytics.exercises.answerCount.push(temp)
        this.analytics.exercises.studentsAnswer.push([])
      } else if (exercise.type === 'shortanswer') {
        console.log('shortanswer')
        this.analytics.exercises.answerCount.push([
          {x:'Incorrect', y:0},
          {x:'Correct', y:0}
        ])
        this.analytics.exercises.studentsAnswer.push([])
      }
    }
 
    var length = this.lesson.video_duration;
    for (var i = 0; i < lesson.students.length; i++ ){
      var time = lesson.students[i].timeWatched;
      if (Math.floor(5*time/length) === 0) {this.analytics.timeWatched[0]['y']++}
      else if (Math.floor(5*time/length) === 1) {this.analytics.timeWatched[1]['y']++}   
      else if (Math.floor(5*time/length) === 2) {this.analytics.timeWatched[2]['y']++}   
      else if (Math.floor(5*time/length) === 3) {this.analytics.timeWatched[3]['y']++}   
      else if (Math.floor(5*time/length) >= 4) {this.analytics.timeWatched[4]['y']++}   

      for (var j = 0; j < lesson.students[i].exerciseResults.length; j++) {
        //Counting the number of answers for each choice
        var answer = lesson.students[i].exerciseResults[j].answer
        var answerText = lesson.students[i].exerciseResults[j].answer        
        if (answer === 'true') {answer = 1}
        if (answer === 'false') {answer = 0}
        if(answer !== undefined) {
          var index = this.analytics.exerciseIndex.indexOf(lesson.students[i].exerciseResults[j].id)
          //Format each individual student's answer
          //If true/false question
          if (lesson.exercises[index].type === 'shortanswer') {
            if (lesson.students[i].exerciseResults[j].correct) {
              answer = 1
            } else {
              answer = 0
            }
          }
          this.analytics.exercises.answerCount[index][parseInt(answer)]['y']++
          if (answerText === 'true') {
            answerText = 'True'
          } else if(answerText === 'false') {
            answerText = 'False'
          //If multiple choice question
          } else if (parseInt(answerText) >= 0) {
            answerText = lesson.exercises[index].exercise.answers[parseInt(answer)]
          }
            //Record individual student answers
            this.analytics.exercises.studentsAnswer[index].push({
              name: lesson.students[i].name,
              answer : answerText
            })
          }
        }
      }
    console.log(this.analytics.exercises)

    this.triggerChange();
  },

  triggerChange: function(){
    this.trigger(this.analytics);
  }
})