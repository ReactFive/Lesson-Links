var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var AuthStore = require('./AuthStore');
var _ = require('lodash');

var CreateLessonStore = Reflux.createStore({
  listenables: [Actions],

  init: function() {},

  validateYoutube: function(url) {
    if (url != undefined || url != '') {
      var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
      var match = url.match(regExp);
      if (match && match[2].length == 11) {
        console.log('Valid Youtube URL')
        return true;
      } else {
        console.log('Invalid Youtube URL')
        return false;
      }
    }
  },

  createLesson: function(lesson){
    var self = this;
    if(this.validateYoutube(lesson.video_url)) {
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
    } else {
      self.result = {};
      self.result.invalidYoutubeURL = true;
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
