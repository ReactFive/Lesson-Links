var React = require('react');
var VideoBox = require('./VideoBox.jsx');
var Content = require('./Content.jsx');
var _ = require('lodash');

//require('../stylesheets/modules/app.scss');

var LessonView = React.createClass({

  getInitialState: function(){
    return {
      title: "our video",
      url: "https://www.youtube.com/watch?v=xjS6SftYQaQ",
      comments: [{
          id: 0,
          time: 9.5,
          text: "I don't get what you are saying",
          replies: [ 
            {
              text: "This is a reply."
            },
            {
              text: "This is another reply."
            }
          ]
        },
        {
          id: 1,
          time: 16,
          text: "That really helped me understand that better",
          replies: []
        },
        {
          id: 2,
          time: 23.6,
          text: "I want to confirm what you said",
          replies: []
        },
        {
          id: 3,
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
          id: 4,
          time: 60,
          text: "Did this work?",
          replies: []
        }]
    };
  },
  onCommentSubmit: function(comment) {
    var player = videojs('attachmentVideo');

    var commentObj = {
      id: this.state.comments.length,
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
            <VideoBox title={this.state.title} url={this.state.url} comments = {this.state.comments} />
            <Content comments = {this.state.comments} submit={this.onCommentSubmit} submitReply={this.onReplySubmit}/>
          </div>
        </div>
    );
  }
});

module.exports = LessonView;