var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var AuthStore = require('./AuthStore');
var _ = require('lodash');

var CreateLessonStore = Reflux.createStore({
  listenables: [Actions],

  init: function() {},

  getInitialState: function() {
    return this.result;
  },

  createLesson: function(lesson){
    var self = this;

    Api.createLesson(lesson)
    .then(function(res){
      console.log("successfully created lesson: ", res.data);
      swal("Success!", 
        "Your lesson has been created! \n Title: '" + lesson.title + "' \n Lesson Link: www.lesson-links.com/" + lesson.lesson_url + "'", 
        "success");
      self.result = {};
      self.result.validURL = true; 
      self.result.createdLesson = true; 
      self.trigger(self.result);
      Actions.sendLesson(res.data);
      Actions.getUser();
    }) 
    .catch(function(res){
      console.log("failed to create lesson");
      swal("Oops!", "The URL '" + lesson.lesson_url + "' already exists! Try another combination of words.", "error");
    })
  },

});

module.exports = CreateLessonStore;
