var React = require('react');
var CommentContent = require('./CommentContent.jsx');
var ReplySubmissionBox = require('./ReplySubmissionBox.jsx');
var ReplyList = require('./ReplyList.jsx');


var Comment = React.createClass({
  getInitialState: function() {
       return { showReplyForm: false };
   },
  onToggleReplyForm: function() {
    //e.preventDefault();
    this.setState({ showReplyForm: !this.state.showReplyForm });
  },
  render: function() {
    return (
      <div>
        <CommentContent comment={this.props.comment}/>
        <input type="submit" value="Reply" onClick={this.onToggleReplyForm} />
        
        { this.state.showReplyForm ? 
          <ReplySubmissionBox 
            submitReply={this.props.submitReply} 
            comment={this.props.comment} 
            toggleReplyForm={this.onToggleReplyForm} /> 
        : null }

        <ReplyList replies={this.props.comment.replies}/>
      </div>
    );
  }
});

module.exports = Comment;
