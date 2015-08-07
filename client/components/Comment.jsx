var React = require('react');
var CommentContent = require('./CommentContent.jsx');
var ReplyList = require('./ReplyList.jsx');

var Comment = React.createClass({

  render: function() {
    return (
      <div>
        <CommentContent time={this.props.comment.time} text={this.props.comment.text} />
        <ReplyList replies={this.props.comment.replies}/>
      </div>
    );
  }
});

module.exports = Comment;
