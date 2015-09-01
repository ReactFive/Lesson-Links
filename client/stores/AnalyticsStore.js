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
      question: [],
      options: [],
      correctAnswer: [],
      answerCount: [],
      studentsAnswer : []
    };

    this.analytics.exerciseIndex = [];

    //Create empty exercise objects to be populated with student answers
    for (var j = 0; j < lesson.exercises.length; j++){

      //capturing data for exercise display
      //Question
      this.analytics.exercises.question[j] = (j+1+"") + ". " + lesson.exercises[j]["exercise"]["question"]

      //Correct Answer
      var letters = ["A", "B", "C", "D", "E"]

      if(lesson.exercises[j]["type"] === "multiplechoice"){
        this.analytics.exercises.correctAnswer[j] = letters[parseInt(lesson.exercises[j]["exercise"]["correctOption"])];
      }else{
        this.analytics.exercises.correctAnswer[j] = lesson.exercises[j]["exercise"]["correctOption"]
      }

      var exercise = lesson.exercises[j]

      this.analytics.exerciseIndex[j] = lesson.exercises[j]._id

      if (exercise.type === 'truefalse') 
        {
          //Answer Options
          this.analytics.exercises.options[j] = " True, False"

          this.analytics.exercises.answerCount.push([
            {x:'False', y:0},
            {x:'True', y:0}
          ])
          this.analytics.exercises.studentsAnswer.push([])
        } 

      else if (exercise.type === 'multiplechoice') {

        var temp = []
        var multiChoiceAnswers = [];
        var multiChoiceLetters = ["A.  ", "B.  ", "C.  ", "D.  ", "E.  "]

        //Answer Options
        for(var x = 0; x<lesson.exercises[j]["exercise"]["answers"].length; x++){
          multiChoiceAnswers.push(multiChoiceLetters[x] + lesson.exercises[j]["exercise"]["answers"][x] + "      ")
        }

        this.analytics.exercises.options[j] = multiChoiceAnswers

        for (var k = 0; k < exercise.exercise.answers.length; k++) {
          temp.push({x:exercise.exercise.answers[k], y:0});
        }

        this.analytics.exercises.answerCount.push(temp)
        this.analytics.exercises.studentsAnswer.push([])

      } else if (exercise.type === 'shortanswer') {

        //Answer Options
        var bestAnswers = lesson.exercises[j]["exercise"]["altAnswers"].replace('(', '').replace(')', '').replace(/\|/g, ', ') + ", "
        var altAnswers = lesson.exercises[j]["exercise"]["bestAnswers"].replace('(', '').replace(')', '').replace(/\|/g, ', ')
        this.analytics.exercises.options[j] = bestAnswers + altAnswers;

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

          //Format each individual student's answer
          if (lesson.exercises[index].type === 'shortanswer') {
            if (lesson.students[i].exerciseResults[j].correct) {
              answer = 1
            } else {
              answer = 0
            }
          }
          
          this.analytics.exercises.answerCount[index][parseInt(answer)]['y']++;

          //If true/false question
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
              name    : lesson.students[i].name,
              answer  : answerText,
              correct : lesson.students[i].exerciseResults[j].correct + ""
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