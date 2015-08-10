var React = require('react');
var CommentContent = require('./CommentContent.jsx');
var ReplySubmissionBox = require('./ReplySubmissionBox.jsx');
var ReplyList = require('./ReplyList.jsx');


var Comment = React.createClass({
  getInitialState: function(){
    return {
      showReplyForm: false
    }
  },
  onToggleReplyForm: function(e) {
    e.preventDefault();
    this.setState({ showReplyForm: !this.state.showReplyForm });
  },
  render: function() {
    return (
      <div>
        <CommentContent comment={this.props.comment} toggleReplyForm={this.onToggleReplyForm}/>
        <ReplyList replies={this.props.comment.replies}/>
<<<<<<< HEAD
        <ReplySubmissionBox 
          submitReply={this.props.submitReply} 
=======
        <ReplySubmissionBox id="reply-submission-box"
>>>>>>> Added submit reply to store and improved UI
          comment={this.props.comment}
          showReplyForm={this.state.showReplyForm}
          toggleReplyForm={this.onToggleReplyForm} /> 
      </div>
    );
  }
});

module.exports = Comment;
