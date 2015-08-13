var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
  listenables: [Actions],

  createLesson: function(lesson){
    Api.createLesson(lesson)
    .then(function(res){
      console.log("successfully created lesson");
      console.log(res)
    }) 
    .catch(function(res){
      if (res.headers.status === 409 || res.data === "Unauthorized") {
        toastr["error"]("There was an issue processing your request. Please refresh the page and try again.");
      } else {
        toastr["error"]("You already have a Lesson Link with that keyword. Please either delete your old lesson or change the keyword for this lesson.");
      }
      console.log("failed to create lesson");
      console.log(res)
    })
  }

});