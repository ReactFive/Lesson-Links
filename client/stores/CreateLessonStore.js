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

  createLesson: function(lesson, invalidYouTube, lessonCreated, urlAlreadyExists){
    var self = this;
    if(this.validateYoutube(lesson.video_url)) {
      Api.createLesson(lesson)
      .then(function(res){
        console.log("successfully created lesson: ", res.data);
        lessonCreated();
        Actions.sendLesson(res.data);
        Actions.getUser();
      })
      .catch(function(res){
        console.log("failed to create lesson");
        urlAlreadyExists();
      })
    } else {
        console.log("Invalide YouTube Link")
        invalidYouTube();
    } 
  },
});

module.exports = CreateLessonStore;