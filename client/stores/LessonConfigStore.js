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
      self.validURL = true; 
      self.createdLesson = true; 
      self.trigger(self.validURL);
      self.trigger(self.createdLesson);
      self.lesson = res.data;
      self.trigger(self.lesson);
      Actions.getUser();
    }) 
    .catch(function(res){
      console.log("failed to create lesson");
      console.log(res.data.reason);
      self.validURL = false;
      self.trigger(self.validURL);
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
    //Api.updateLesson(this.lesson);
  }

});

module.exports = LessonConfigStore;
