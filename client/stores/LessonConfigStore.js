var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var AuthStore = require('./AuthStore')
var _ = require('lodash');

module.exports = Reflux.createStore({
  listenables: [Actions],

  createLesson: function(lesson){
    console.log(Api)
    Api.createLesson(lesson)
    .then(function(res){
      console.log("successfully created lesson");
      console.log(res);
      AuthStore.getUser();
    }) 
    .catch(function(res){
      console.log("failed to create lesson");
      console.log(res);
    })
  },

  createExercise: function(ex){
    toastr['success']("The exercise was added to your lesson")
    console.log(ex)
  }

});