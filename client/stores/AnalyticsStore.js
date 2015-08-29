var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');
var AuthStore = require('./AuthStore')
var moment = require('moment')

module.exports = Reflux.createStore({
  listenables: [Actions],

  init: function(){
    this.analytics = {}
  },

  //Passes lesson from library to the analytics store
  analyticsTransition : function(lesson){
    this.lesson = lesson;
    this.onFormatLesson(lesson);
    this.onFormatStudent(lesson);
  },

  //Format time watched 
  onFormatStudent : function(lesson){
    this.analytics.studentTime = [];
    for (var i = 0; i < lesson.students.length; i++) {
      var seconds = lesson.students[i].timeWatched
      this.analytics.studentTime.push({
        name : lesson.students[i].name,
        answer : seconds > 60 ? Math.floor(seconds/60)+ ' minutes, ' + Math.floor(seconds%60) + ' seconds' 
        : Math.floor(seconds%60) + ' seconds'
      })
    }
  },

//Calculating Number of Students Per Percentage of Video Watched
  onFormatLesson : function(lesson){
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

    //Create empty exercise objects to be populated with student answers
    for (var j = 0; j < lesson.exercises.length; j++){
      var exercise = lesson.exercises[j];
      this.analytics.exerciseIndex[j] = lesson.exercises[j]._id;
      if (exercise.type === 'truefalse') {
        this.analytics.exercises.answerCount.push([
          {x:'False', y:0},
          {x:'True', y:0}
        ])
        this.analytics.exercises.studentsAnswer.push([]);
      } else if (exercise.type === 'multiplechoice') {
        var temp = [];
        for (var k = 0; k < exercise.exercise.answers.length; k++) {
          temp.push({x:exercise.exercise.answers[k], y:0});
        }
        this.analytics.exercises.answerCount.push(temp);
        this.analytics.exercises.studentsAnswer.push([]);
      } else if (exercise.type === 'shortanswer') {
        this.analytics.exercises.answerCount.push([
          {x:'Incorrect', y:0},
          {x:'Correct', y:0}
        ])
        this.analytics.exercises.studentsAnswer.push([])
      }
    }
 
    //Length of the lesson video
    var length = this.lesson.video_duration;

    //Convert time watched 
    for (var i = 0; i < lesson.students.length; i++ ){
      var time = lesson.students[i].timeWatched;
      if (Math.floor(5*time/length) === 0) {this.analytics.timeWatched[0]['y']++}
      else if (Math.floor(5*time/length) === 1) {this.analytics.timeWatched[1]['y']++}   
      else if (Math.floor(5*time/length) === 2) {this.analytics.timeWatched[2]['y']++}   
      else if (Math.floor(5*time/length) === 3) {this.analytics.timeWatched[3]['y']++}   
      else if (Math.floor(5*time/length) >= 4) {this.analytics.timeWatched[4]['y']++}   

      for (var j = 0; j < lesson.students[i].exerciseResults.length; j++) {
        //Counting the number of answers for each choice
        var answer = lesson.students[i].exerciseResults[j].answer;
        var answerText = lesson.students[i].exerciseResults[j].answer;
        if (answer === 'true') {answer = 1}
        if (answer === 'false') {answer = 0}
        if(answer !== undefined) {
          var index = this.analytics.exerciseIndex.indexOf(lesson.students[i].exerciseResults[j].id);
          this.analytics.exercises.answerCount[index][parseInt(answer)]['y']++;
          //Format each individual student's answer

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
    this.triggerChange();
  },

  triggerChange: function(){
    this.trigger(this.analytics);
  }
})