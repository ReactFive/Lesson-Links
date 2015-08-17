var Reflux = require('reflux');
var api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');
var AuthStore = require('./AuthStore')

module.exports = Reflux.createStore({
  listenables: [Actions],

  init: function(){
  },
  onTogglePublish: function(lesson){
    api.updateLesson({
      lesson_url : lesson.lesson_url,
      publish : !lesson.publish
    })
    .then(function(){
      Actions.getUser();
    });
  },
  onDeleteLesson: function(lesson){
    console.log('inside store', lesson)
    api.updateUser({
      unfollowLesson : true,
      _id : lesson._id
    })
  }
});