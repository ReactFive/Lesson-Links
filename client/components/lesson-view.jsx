var React = require('react');
var CommentSubmission = require('./comment-submission.jsx');
var CommentList = require('./comment-list.jsx');
var VideoPlayer = require('./video-player.jsx');

//require('../stylesheets/modules/app.scss');

var LessonView = React.createClass({
  getInitialState: function(){
    return {
      title: "our video",
      url: "https://www.youtube.com/watch?v=xjS6SftYQaQ",
      comments: [{text:"test comment", time:60}]
    };
  },
  onCommentSubmit: function(comment) {
    var player = videojs('attachmentVideo');

    var commentObj = {
      text: comment,
      time: player.currentTime()
    };

    this.setState({
      comments: this.state.comments.concat(commentObj)
    });
  },
  render: function() {
    return (
      <div id='test'>
        <h2>{this.state.title}</h2>
        <VideoPlayer 
          title={this.state.title} 
          url={this.state.url}
          comments = {this.state.comments} />
        <CommentSubmission onCommentSubmit={this.onCommentSubmit}/>
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
});

module.exports = LessonView;
