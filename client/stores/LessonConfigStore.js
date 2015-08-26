var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var AuthStore = require('./AuthStore');
var _ = require('lodash');

var LessonConfigStore = Reflux.createStore({
  listenables: [Actions],

  sendLesson: function(lesson){
    this.lesson = lesson;
  },

  triggerConfigStore: function() {
    console.log("store triggered: ", this.lesson);
    this.trigger(this.lesson);
  },

  onCreateExercise: function(exerciseObj) {
    exerciseObj.lesson_id = this.lesson._id;
    var self = this;

    Api.createExercise(exerciseObj)
      .then(function(res){
        self.lesson.exercises.push(res.data);
        self.triggerConfigStore();
      });
  },

  onUpdateExercise: function(exerciseObj) {
    exerciseObj.lesson_id = this.lesson._id;

    this.updateExerciseOptimistically(exerciseObj._id, exerciseObj);

    Api.updateExercise(exerciseObj, exerciseObj._id)
        .then(function(err, res){
          this.triggerConfigStore();
        });
  },

  onDeleteExercise: function(exercise_id){

    this.updateExerciseOptimistically(exercise_id);

    Api.deleteExercise(exercise_id)
        .then(function(err, res){
          this.triggerConfigStore();
        });
  },

  onPublish: function(lesson){
    return Api.updateLesson({
      lesson_url : lesson.lesson_url,
      publish : true
    });
  },

  updateExerciseOptimistically: function(id, newExercise){

    for (var i = 0; i < this.lesson.exercises.length; i++) {
      if (this.lesson.exercises[i]._id === id) {
        if (newExercise) {
          this.lesson.exercises.splice(i, 1, newExercise);
        } else {
          this.lesson.exercises.splice(i, 1);
        }
      }

    }
    this.triggerConfigStore();
  },

  onSetVideoDuration: function(lesson, duration){
    console.log("in onsetvideoduration: ", duration)
    return Api.updateLesson({
      lesson_url : lesson.lesson_url,
      video_duration : duration
    });
  }

});

module.exports = LessonConfigStore;


