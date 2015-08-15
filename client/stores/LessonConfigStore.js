var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var AuthStore = require('./AuthStore');
var _ = require('lodash');

var LessonConfigStore = Reflux.createStore({
  listenables: [Actions],

  createLesson: function(lesson){
    var self = this;

    Api.createLesson(lesson)
    .then(function(res){
      console.log("successfully created lesson");
      console.log(lesson);
      self.lesson = res.data;
      self.trigger(self.lesson);
      Actions.getUser();
    }) 
    .catch(function(res){
      console.log("failed to create lesson");
      console.log(res);
    })
  },

  createExercise: function(exercise) {
    var newExercise = {
      exercise : exercise,
      time : exercise.time,
      text : "Exercise!",
      lesson_id : this.lesson._id
    };
    this.lesson.exercises.push(newExercise);
    console.log("sending exercise to database", newExercise);
    Api.createExercise(newExercise);
    this.trigger(this.lesson);
  },


  /* this is for testing purposes */
  init: function() {
    var self = this;
    setTimeout(function() {
      if(!self.lesson) {
        Api.getLesson('love')
        .then(function(res) {
          self.lesson = res.data;
          self.trigger(self.lesson);
        })
      }
    }, 500);
  }
  /* end testing */

});

module.exports = LessonConfigStore;
