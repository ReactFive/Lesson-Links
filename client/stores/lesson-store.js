var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
  listenables: [Actions],

  init: function() {
    // this.lesson = {
    //   title: "our video",
    //   url: "https://www.youtube.com/watch?v=xjS6SftYQaQ",
    //   comments: [
    //     {
    //       time: 16,
    //       text: "That really helped me understand that better",
    //       replies: []
    //     },
    //     {
    //       time: 23.6,
    //       text: "I want to confirm what you said",
    //       replies: []
    //     },
    //     {
    //       time: 28,
    //       text: "What are you talking about",
    //       replies: [
    //         {
    //           text: "Reply"
    //         },
    //         {
    //           text: "another reply"
    //         }

    //       ]
    //     },
    //     {
    //       time: 60,
    //       text: "Did this work?",
    //       replies: []
    //     }]
    // };

    this.lesson = {
      comments: []
    }
    var self = this;
    Api.getLesson()
    .then(function(res) {
      self.lesson = res.data[0];
      console.log(self.lesson);
      self.trigger(self.lesson);
    })
    .catch(function(res) {
      console.log(res);
    })
  }

  // change: function(){
  //   this.trigger('change', this.loggedIn);
  // }
})