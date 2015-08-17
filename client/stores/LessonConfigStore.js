var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var AuthStore = require('./AuthStore');
var _ = require('lodash');

var LessonConfigStore = Reflux.createStore({
  listenables: [Actions],

  sendLesson: function(lesson){
    this.lesson = lesson;
    console.log("LessonConfigStore has received the lesson: ", this.lesson)
  },

  triggerConfigStore: function() {
    this.trigger(this.lesson);
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
    Api.createExercise(newExercise)
    .then(this.triggerConfigStore)
  },

  onPublish: function(lesson){
    return api.updateLesson({
      lesson_url : lesson.lesson_url,
      publish : true
    })
  },

});

module.exports = LessonConfigStore;
