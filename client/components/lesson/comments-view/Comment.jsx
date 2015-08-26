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

  onClick: function(e) {
    e.preventDefault();
    this.setState({ showReplyForm: !this.state.showReplyForm });
  },

  onToggleReplyForm: function() {
    this.setState({ showReplyForm: !this.state.showReplyForm });
  },


  render: function() {

    return (
      <li className="comment-box animated fadeInUp">
        <CommentContent comment={this.props.comment} toggleReplyForm={this.onClick}/>
        <ReplyList replies={this.props.comment.replies}/>
        {this.state.showReplyForm ? 
        <ReplySubmissionBox id="reply-submission-box"
          comment={this.props.comment}
          showReplyForm={this.state.showReplyForm}
          toggleReplyForm={this.onToggleReplyForm} />
          : null }
      </li>
    );
  }
});

module.exports = Comment;
