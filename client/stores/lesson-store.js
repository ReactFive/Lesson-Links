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
  },

  submitComment: function(comment) {
    debugger;
    this.lesson.comments.push(comment);
    Api.updateLesson(this.lesson);
    this.trigger(this.lesson);
    debugger;
  },

  deleteComment: function(commentKey){
    //find the index of the comment to which the reply should be added
    var commentIndex;
    _.forEach(this.lesson.comments, function(comment, key){
      if(comment.key === commentKey){
        commentIndex = key;
      }
    })

    //remove the index
    this.lesson.comments.splice(commentIndex, 1);
    this.trigger(this.lesson);
    Api.updateLesson(this.lesson);

  },

  likeComment: function(commentKey, userID){
    //find the index of the comment to which the reply should be added
    var commentIndex;
    _.forEach(this.lesson.comments, function(comment, key){
      if(comment.key === commentKey){
        commentIndex = key;
      }
    })
    
    if(this.lesson.comments[commentIndex].likes.indexOf(userID)  === -1){
      this.lesson.comments[commentIndex].likes.push(userID);
    }

    this.trigger(this.lesson);
    Api.updateLesson(this.lesson);
  },

  unlikeComment: function(commentKey, userID){
    //find the index of the comment to which the reply should be added
    var commentIndex;
    _.forEach(this.lesson.comments, function(comment, key){
      if(comment.key === commentKey){
        commentIndex = key;
      }
    })
    
    if(this.lesson.comments[commentIndex].likes.indexOf(userID) >= 0){
      var index = this.lesson.comments[commentIndex].likes.indexOf(userID);
      this.lesson.comments[commentIndex].likes.splice(index, 1);
    }

    this.trigger(this.lesson);
    Api.updateLesson(this.lesson);
  },


  submitReply: function(reply, commentKey) {
    var player = videojs('attachmentVideo');
    //wrap the reply in an object
    var replyObj = {
      author: reply.author,
      text: reply.text
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
    Api.updateLesson(this.lesson);
  }
})
