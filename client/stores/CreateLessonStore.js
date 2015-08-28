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
        return true;
      } else {
        return false;
      }
    }
  },

  createLesson: function(lesson, invalidYouTube, lessonCreated, urlAlreadyExists){
    var self = this;
    if(this.validateYoutube(lesson.video_url)) {
      Api.createLesson(lesson)
      .then(function(res){
        lessonCreated();
        Actions.sendLesson(res.data);
        Actions.getUser();
      })
      .catch(function(res){
        urlAlreadyExists();
      })
    } else {
        invalidYouTube();
    } 
  },
});

module.exports = CreateLessonStore;