var React = require('react');
var CommentContent = require('./CommentContent.jsx');
var ReplySubmissionBox = require('./ReplySubmissionBox.jsx');
var ReplyList = require('./ReplyList.jsx');


var Comment = React.createClass({
  render: function() {
    return (
      <div>
        <CommentContent comment={this.props.comment}/>
        <ReplySubmissionBox 
          submitReply={this.props.submitReply} 
          comment={this.props.comment} /> 
        <ReplyList replies={this.props.comment.replies}/>
      </div>
    );
  }
});

module.exports = Comment;
