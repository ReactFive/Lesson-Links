var React = require('react');
var VideoBox = require('./VideoBox.jsx');
var Content = require('./Content.jsx');

//require('../stylesheets/modules/app.scss');

var LessonView = React.createClass({

  getInitialState: function(){
    return {
      title: "our video",
      url: "https://www.youtube.com/watch?v=xjS6SftYQaQ",
      comments: [{
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
          time: 16,
          text: "That really helped me understand that better",
          replies: []
        },
        {
          time: 23.6,
          text: "I want to confirm what you said",
          replies: []
        },
        {
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
          time: 60,
          text: "Did this work?",
          replies: []
        }]
    };
  },
  onCommentSubmit: function(comment) {
    var player = videojs('attachmentVideo');

    var commentObj = {
      text: comment,
      time: player.currentTime(),
      replies: []
    };

    this.setState({
      comments: this.state.comments.concat(commentObj)
    });
  },
  render: function() {
    return (
        <div className="container">
          <div id='lesson-view'>
            <VideoBox title={this.state.title} url={this.state.url} comments = {this.state.comments} />
            <Content comments = {this.state.comments} submit={this.onCommentSubmit}/>
          </div>
        </div>
    );
  }
});

module.exports = LessonView;