var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');
var AuthStore = require('./AuthStore')


module.exports = Reflux.createStore({
  listenables: [Actions],

  init: function() {},

  fetchLesson : function(payload) {
    var url = payload.url// || 'sass-101'
    var self = this;
    Api.getLesson(url)
    .then(function(res) {
      console.log('fetched lesson')
      self.lesson = res.data;
      self.trigger(self.lesson);
      self.followLesson(payload)
    })
    .catch(function(res){
      payload.sourceComponent.transitionTo('/404');
    });
  },

  finishedLesson : function(){
    Api.finishedLesson(this.lesson)
  },

  submitExerciseResult : function(exerciseObj, result) {
    console.log(this.lesson);
    Api.submitExerciseResult(this.lesson._id, exerciseObj, result);
  },

  triggerLessonStore: function(){
    this.trigger(this.lesson);
  },

  updateAndTrigger: function(){
    var self = this;
    Api.updateLesson(this.lesson)
        .then(function(res){
          self.lesson = res.data;
          self.trigger(self.lesson);
        });
    //this is an 'optimistic' refresh. We call trigger before we hear back from the server so the user doesn't see any lag. 
    this.trigger(this.lesson);
  },

  followLesson : function(lesson){
    {/*Check if the user is already following this lesson*/}
    if (AuthStore.auth.user) {
      var following = _.reduce(AuthStore.auth.user.lessons, function(found, elem, key){
            if (found) {
              return true
            } else {
              return (elem.lesson_url === lesson.url)
            }}, false
      )
      if(!following) {
        Api.updateUser({
          lesson_url : lesson.url,
          addLesson : true
        })
      }
    } else {
      console.log('User not found, can\'t follow lesson')
    }
  },

  submitComment: function(comment) {
    
    //update the server
    var self = this;
    Api.addComment(this.lesson, comment)
    .then(function(res){
      self.lesson = res.data;
      self.trigger(self.lesson);
    });
    
    //this is an 'optimistic' refresh. We update and trigger locally 
    //before we hear back from the server so the user doesn't see any lag. 
    this.lesson.comments.push(comment);
    this.trigger(this.lesson);

  },

  deleteComment: function(commentID){
    
    //update the server
    var self = this;
    Api.deleteComment(this.lesson, commentID)
    .then(function(res){
      self.lesson = res.data;
      self.trigger(self.lesson);
    });
    
    //this is an 'optimistic' refresh. We update and trigger locally 
    //before we hear back from the server so the user doesn't see any lag. 
    var commentIndex = this.findCommentIndex(commentID);
    this.lesson.comments.splice(commentIndex, 1);
    this.trigger(this.lesson);
  },

  likeComment: function(commentID, userID){

    //update the server
    var self = this;
    Api.addCommentLike(this.lesson, commentID, { "userID": userID })
    .then(function(res){
      self.lesson = res.data;
      self.trigger(self.lesson);
    });

    //this is an 'optimistic' refresh. We update and trigger locally 
    //before we hear back from the server so the user doesn't see any lag. 
    var commentIndex = this.findCommentIndex(commentID);
    if(this.lesson.comments[commentIndex].likes.indexOf(userID)  === -1){
      this.lesson.comments[commentIndex].likes.push(userID);
    }
    this.trigger(this.lesson);
  },

  unlikeComment: function(commentID, userID){
    
    //update the server
    var self = this;
    Api.deleteCommentLike(this.lesson, commentID, { "userID": userID })
    .then(function(res){
      self.lesson = res.data;
      self.trigger(self.lesson);
    });
    
    //this is an 'optimistic' refresh. We update and trigger locally 
    //before we hear back from the server so the user doesn't see any lag. 
    var commentIndex = this.findCommentIndex(commentID);
    if(this.lesson.comments[commentIndex].likes.indexOf(userID) >= 0){
      var index = this.lesson.comments[commentIndex].likes.indexOf(userID);
      this.lesson.comments[commentIndex].likes.splice(index, 1);
    }
    this.trigger(this.lesson);
  },

  starComment: function(commentID){
    
    //update the server
    var self = this;
    Api.toggleCommentStar(this.lesson, commentID)
    .then(function(res){
      console.log("yipee")
      self.lesson = res.data;
      self.trigger(self.lesson);
    });
    
    //this is an 'optimistic' refresh. We update and trigger locally 
    //before we hear back from the server so the user doesn't see any lag. 
    var commentIndex = this.findCommentIndex(commentID);
    this.lesson.comments[commentIndex].star = !this.lesson.comments[commentIndex].star;
    this.trigger(this.lesson);
  },


  submitReply: function(reply, commentID) {

    //update the server
    var self = this;
    Api.addReply(this.lesson, commentID, reply)
    .then(function(res){
      self.lesson = res.data;
    });
    
    //this is an 'optimistic' refresh. We update and trigger locally 
    //before we hear back from the server so the user doesn't see any lag. 
    var commentIndex = this.findCommentIndex(commentID);
    this.lesson.comments[commentIndex].replies.push(reply);
    this.trigger(this.lesson);
  },

  deleteReply: function(replyID, commentID) {

    //update the server
    var self = this;
    Api.deleteReply(this.lesson, commentID, replyID)
    .then(function(res){
      console.log("yahoo")
      self.lesson = res.data;
    });
    
    //this is an 'optimistic' refresh. We update and trigger locally 
    //before we hear back from the server so the user doesn't see any lag.
    var commentIndex = this.findCommentIndex(commentID);
    var replyIndex = this.findReplyIndex(commentIndex, replyID);
    this.lesson.comments[commentIndex].replies.splice(replyIndex, 1);
    this.trigger(this.lesson);
  },

  likeReply: function(replyID, commentID, userID) {

    //update the server
    var self = this;
    Api.addReplyLike(this.lesson, commentID, replyID, {"userID": userID})
    .then(function(res){
      console.log("cocoa puffs");
      self.lesson = res.data;
    });
    
    //this is an 'optimistic' refresh. We update and trigger locally 
    //before we hear back from the server so the user doesn't see any lag.
    var commentIndex = this.findCommentIndex(commentID);
    var replyIndex = this.findReplyIndex(commentIndex, replyID);
    if(this.lesson.comments[commentIndex].replies[replyIndex].likes.indexOf(userID)  === -1){
      this.lesson.comments[commentIndex].replies[replyIndex].likes.push(userID);
    }
    this.trigger(this.lesson);
  },

  unlikeReply: function(replyID, commentID, userID) {

    //update the server
    var self = this;
    Api.deleteReplyLike(this.lesson, commentID, replyID, {"userID": userID})
    .then(function(res){
      console.log("fruit loops");
      self.lesson = res.data;
    });

    //this is an 'optimistic' refresh. We update and trigger locally 
    //before we hear back from the server so the user doesn't see any lag.
    var commentIndex = this.findCommentIndex(commentID);
    var replyIndex = this.findReplyIndex(commentIndex, replyID);
    var likes = this.lesson.comments[commentIndex].replies[replyIndex].likes;
    var index = likes.indexOf(userID);

    if(index >= 0){
      likes.splice(index, 1);
    }
    this.trigger(this.lesson);
  },

  starReply: function(replyID, commentID){
    var commentIndex = this.findCommentIndex(commentID);
    var replyIndex = this.findReplyIndex(commentIndex, replyID);

    this.lesson.comments[commentIndex].replies[replyIndex].star = !this.lesson.comments[commentIndex].replies[replyIndex].star;
    this.updateAndTrigger();
  },

  findCommentIndex: function(commentID){
    var index;
    _.forEach(this.lesson.comments, function(comment, i){
      if(comment._id === commentID){
        index = i;
      }
    })
    return index;
  },

  findReplyIndex: function(commentIndex, replyID){
    var index;
    _.forEach(this.lesson.comments[commentIndex].replies, function(reply, i){
      if(reply._id === replyID){
        index = i;
      }
    })
    return index;
  }

});
