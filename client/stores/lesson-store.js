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
    this.lesson.comments.push(comment);
    this.updateAndTrigger();
  },

  deleteComment: function(commentID){
    var commentIndex = this.findCommentIndex(commentID);
    this.lesson.comments.splice(commentIndex, 1);
    this.updateAndTrigger();
  },

  likeComment: function(commentID, userID){
    var commentIndex = this.findCommentIndex(commentID);
    if(this.lesson.comments[commentIndex].likes.indexOf(userID)  === -1){
      this.lesson.comments[commentIndex].likes.push(userID);
    }
    this.updateAndTrigger();
  },

  unlikeComment: function(commentID, userID){
    var commentIndex = this.findCommentIndex(commentID);
    if(this.lesson.comments[commentIndex].likes.indexOf(userID) >= 0){
      var index = this.lesson.comments[commentIndex].likes.indexOf(userID);
      this.lesson.comments[commentIndex].likes.splice(index, 1);
    }
    this.updateAndTrigger();
  },

  starComment: function(commentID, userID){
    var commentIndex = this.findCommentIndex(commentID);
    this.lesson.comments[commentIndex].star = !this.lesson.comments[commentIndex].star;
    this.updateAndTrigger();
  },


  submitReply: function(reply, commentID) {
    var commentIndex = this.findCommentIndex(commentID);
    this.lesson.comments[commentIndex].replies.push(reply);
    this.updateAndTrigger();
  },

  likeReply: function(replyID, commentID, userID) {
    var commentIndex = this.findCommentIndex(commentID);
    var replyIndex = this.findReplyIndex(commentIndex, replyID);
    if(this.lesson.comments[commentIndex].replies[replyIndex].likes.indexOf(userID)  === -1){
      this.lesson.comments[commentIndex].replies[replyIndex].likes.push(userID);
    }
    this.updateAndTrigger();
  },

  unlikeReply: function(replyID, commentID, userID) {
    var commentIndex = this.findCommentIndex(commentID);
    var replyIndex = this.findReplyIndex(commentIndex, replyID);
    var likes = this.lesson.comments[commentIndex].replies[replyIndex].likes;
    var index = likes.indexOf(userID);

    if(index >= 0){
      likes.splice(index, 1);
    }
    this.updateAndTrigger();
  },

  starReply: function(replyID, commentID){
    var commentIndex = this.findCommentIndex(commentID);
    var replyIndex = this.findReplyIndex(commentIndex, replyID);

    this.lesson.comments[commentIndex].replies[replyIndex].star = !this.lesson.comments[commentIndex].replies[replyIndex].star;
    this.updateAndTrigger();
  },

  deleteReply: function(replyID, commentID) {
    var commentIndex = this.findCommentIndex(commentID);
    var replyIndex = this.findReplyIndex(commentIndex, replyID);

    this.lesson.comments[commentIndex].replies.splice(replyIndex, 1);
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
