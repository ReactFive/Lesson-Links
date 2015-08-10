var React = require('react');
var VideoBox = require('./VideoBox.jsx');
var Content = require('./Content.jsx');
var _ = require('lodash');

var LessonStore = require('../Stores/lesson-store');

var LessonView = React.createClass({

  componentWillMount: function() {
  },
  onCommentSubmit: function(comment) {
    var player = videojs('attachmentVideo');

    var commentObj = {
      id: this.state.comments.length,
      username: "isto",
      text: comment,
      time: player.currentTime(),
      replies: []
    };

    this.setState({
      comments: this.state.comments.concat(commentObj)
    });
  },
  onReplySubmit: function(reply, commentid) {
    var player = videojs('attachmentVideo');

    //wrap the reply in an object
    var replyObj = {
      text: reply
    };

    //find the index of the comment to which the reply should be added
    var commentIndex;
    _.forEach(this.state.comments, function(comment, key){
      if(comment.id === commentid){
        commentIndex = key;
      }
    })
    
    //add the reply to the comments, update the comments state
    var updatedComments = this.state.comments;
    updatedComments[commentIndex].replies.push(replyObj);
    this.setState(function(previousState, currentProps) {
      return {comments: updatedComments};
    });


  },
  render: function() {
    return (
        <div className="container">
          <div id='lesson-view'>
            <VideoBox />
            <Content/>
          </div>
        </div>
    );
  }
});

module.exports = LessonView;