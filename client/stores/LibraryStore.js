var Reflux = require('reflux');
var api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');
var AuthStore = require('./AuthStore')

module.exports = Reflux.createStore({
  listenables: [Actions],

  init: function(){
  },
  togglePublish: function(lesson){
    lesson.published = !lesson.published
    api.updateLesson(lesson)
    .then(function(){
      AuthStore.getUser()
    })
  }
})