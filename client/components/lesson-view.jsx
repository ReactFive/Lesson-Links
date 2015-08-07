var React = require('react');
var CommentSubmission = require('./comment-submission.jsx');
var CommentList = require('./comment-list.jsx');
var VideoBox = require('./VideoBox.jsx');
var Content = require('./Content.jsx');

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
      <div id='lesson-view'>
        <VideoBox title={this.state.title} url={this.state.url} comments = {this.state.comments} />
        <Content comments = {this.state.comments}/>
      </div>
    );
  }
});

module.exports = LessonView;