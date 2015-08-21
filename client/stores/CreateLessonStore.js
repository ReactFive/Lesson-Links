var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var AuthStore = require('./AuthStore');
var _ = require('lodash');

var CreateLessonStore = Reflux.createStore({
  listenables: [Actions],

  init: function() {},

  createLesson: function(lesson){
    var self = this;

    Api.createLesson(lesson)
    .then(function(res){
      console.log("successfully created lesson: ", res.data);
      self.result = {};
      self.result.invalidURL = false; 
      self.result.createdLesson = true; 
      self.trigger(self.result);
      Actions.sendLesson(res.data);
      Actions.getUser();
    }) 
    .catch(function(res){
      console.log("failed to create lesson");
      self.result = {};
      self.result.invalidURL = true;
      self.trigger(self.result);
    })
  },

});

module.exports = CreateLessonStore;
