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
      console.log("successfully created lesson");
      console.log(lesson);
      self.result = {};
      self.result.validURL = true; 
      self.result.createdLesson = true; 
      self.trigger(self.result);
      console.log("it worked. Here it is: ", res.data);
      Actions.sendLesson(res.data);
      Actions.getUser();
    }) 
    .catch(function(res){
      console.log("failed to create lesson");

      self.result = {};
      self.result.validURL = false;
      self.trigger(self.result);
    })
  },

});

module.exports = CreateLessonStore;
