var Reflux = require('reflux');
var Api = require('../util/api');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
  listenables: [Actions],

  init: function() {
    this.lesson = {
      title: "our video",
      url: "https://www.youtube.com/watch?v=xjS6SftYQaQ",
      comments: [
        {
          time: 16,
          text: "That really helped me understand that better",
          replies: []
        },
        {
          time: 23.6,
          text: "I want to confirm what you said",
          replies: []
        },
        {
          time: 28,
          text: "What are you talking about",
          replies: [
            {
              text: "Reply"
            },
            {
              text: "another reply"
            }

          ]
        },
        {
          time: 60,
          text: "Did this work?",
          replies: []
        }]
    };
    //Api.getLesson();
  }

  // change: function(){
  //   this.trigger('change', this.loggedIn);
  // }
})