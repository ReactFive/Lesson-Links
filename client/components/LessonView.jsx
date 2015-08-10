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
          username: "colin",
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
          username: "isto",
          time: 16,
          text: "actually its really deep when you start to think about it, like theres always a little hope for you till its really gone, this is how i see that point",
          replies: []
        },
        {
          id: 2,
          username: "esteban",
          time: 23.6,
          text: "I want to confirm what you said",
          replies: []
        },
        {
          id: 3,
          username: "rick",
          time: 28,
          text: "actually its really deep when you start to think about it, like theres always a little hope for you till its really gone, this is how i see that point",
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
          username: "colin",
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
            <VideoBox title={this.state.title} url={this.state.url} comments = {this.state.comments} />
            <Content comments = {this.state.comments} submit={this.onCommentSubmit} submitReply={this.onReplySubmit}/>
          </div>
        </div>
    );
  }
});

module.exports = LessonView;