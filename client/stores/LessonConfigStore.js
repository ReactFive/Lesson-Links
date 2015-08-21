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
      text : exercise.type,
      lesson_id : this.lesson._id
    };
    
    this.lesson.exercises.push(newExercise);
    console.log("sending exercise to database", newExercise);
    Api.createExercise(newExercise)
    .then(this.triggerConfigStore)
  },

  onUpdateExercise: function(exercise) {
    var updatedExercise = {
      exercise: exercise,
      time: exercise.time,
      text: exercise.type
    };

    this.updateExerciseOptimistically(exercise.id, updatedExercise);

    Api.updateExercise(updatedExercise, exercise.id)
    .then(function(err, res){
      this.triggerConfigStore();
    });
  },

  onPublish: function(lesson){
    return Api.updateLesson({
      lesson_url : lesson.lesson_url,
      publish : true
    })
  },

  updateExerciseOptimistically(id, newExercise){
  for (var i = 0; i < this.lesson.exercises.length; i++){
    if(this.lesson.exercises[i]._id === id){
      this.lesson.exercises.splice(i, 1, newExercise);
    }
  }
}

});

module.exports = LessonConfigStore;

