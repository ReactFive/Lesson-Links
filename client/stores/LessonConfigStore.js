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
      console.log("res.data", res.data)
      self.lesson = res.data;
      self.trigger(self.lesson);
      Actions.getUser();
    }) 
    .catch(function(res){
      console.log("failed to create lesson");
      console.log(res.data.reason);
    })
  },

  createExercise: function(exercise) {
    this.lesson.exercises.push(exercise);
    this.trigger(this.lesson);
    //Api.updateLesson(this.lesson);
  }

});

module.exports = LessonConfigStore;
