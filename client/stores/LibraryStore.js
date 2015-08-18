var React = require('react')
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
      publish : true
    })
    .then(function(res){
      Actions.getUser();
    });
  },
  onDeleteLesson: function(lesson){
    api.updateUser({
      unfollowLesson : true,
      _id : lesson._id
    })
    .then(function(res){
      Actions.getUser();
    });
  }
});