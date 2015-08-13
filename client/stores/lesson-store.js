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
    debugger;
    this.lesson.comments.push(comment);
    this.trigger(this.lesson);
    Api.updateLesson(this.lesson);
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

  },

  likeComment: function(commentKey, username){
    //find the index of the comment to which the reply should be added
    var commentIndex;
    _.forEach(this.lesson.comments, function(comment, key){
      if(comment.key === commentKey){
        commentIndex = key;
      }
    })
    console.log("likes before: ", this.lesson.comments[commentIndex])
    
    if(this.lesson.comments[commentIndex].likes.indexOf(username)  === -1){
      this.lesson.comments[commentIndex].likes.push(username);
    }else{
      console.log("already liked that!")
    }

    console.log("likes after: ", this.lesson.comments[commentIndex])
    this.trigger(this.lesson);
  },

  unlikeComment: function(commentKey, username){
    //find the index of the comment to which the reply should be added
    var commentIndex;
    _.forEach(this.lesson.comments, function(comment, key){
      if(comment.key === commentKey){
        commentIndex = key;
      }
    })
    console.log("likes before: ", this.lesson.comments[commentIndex])
    
    if(this.lesson.comments[commentIndex].likes.indexOf(username) >= 0){
      var index = this.lesson.comments[commentIndex].likes.indexOf(username);
      this.lesson.comments[commentIndex].likes.splice(index, 1);
    }else{
      console.log("you can't unlike what you haven't even liked in the first place! (this is a bug)")
    }

    console.log("likes after: ", this.lesson.comments[commentIndex])
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