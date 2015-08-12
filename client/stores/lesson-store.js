var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
  listenables: [Actions],

  init: function() {},

  fetchLesson : function(url){
    url = url// || 'sass-101'
    var self = this;
    Api.getLesson(url)
    .then(function(res) {
      self.lesson = res.data;
      console.log(self.lesson)
      self.trigger(self.lesson);
    })
    .catch(function(res) {
      console.log(res);
    })
  },

  submitComment: function(comment) {
    this.lesson.comments.push(comment);
    this.trigger(this.lesson);
  },

  submitReply: function(reply, commentKey) {
    var player = videojs('attachmentVideo');
    //wrap the reply in an object
    var replyObj = {
      text: reply
    };

    //find the index of the comment to which the reply should be added
    var commentIndex;
    _.forEach(this.lesson.comments, function(comment, key){
      if(comment.key === commentKey){
        commentIndex = key;
      }
    })
    
    //add the reply to the comments
    this.lesson.comments[commentIndex].replies.push(replyObj);
    this.trigger(this.lesson);

  }



})