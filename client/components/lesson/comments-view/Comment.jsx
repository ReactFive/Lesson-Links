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
      <li className="comment-box">
        <CommentContent comment={this.props.comment} toggleReplyForm={this.onToggleReplyForm}/>
        <ReplyList replies={this.props.comment.replies}/>

        <ReplySubmissionBox id="reply-submission-box"
          comment={this.props.comment}
          showReplyForm={this.state.showReplyForm}
          toggleReplyForm={this.onToggleReplyForm} /> 
      </li>
    );
  }
});

module.exports = Comment;
