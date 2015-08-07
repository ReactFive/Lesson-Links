var React = require('react');
var CommentList = require('./comment-list.jsx');
var CommentSubmission = require('./comment-submission.jsx');

var CommentsView = React.createClass({
  render: function() {
    return (
      <div>
        <CommentSubmission />
        <CommentList comments={this.props.comments}/>
      </div>
    );
  }

});

module.exports = CommentsView;