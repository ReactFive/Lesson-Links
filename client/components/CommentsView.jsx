var React = require('react');
var CommentList = require('./CommentList.jsx');
var CommentSubmission = require('./comment-submission.jsx');

var CommentsView = React.createClass({
  render: function() {
    return (
      <div className="col-lg-10 col-lg-offset-1">
        <CommentSubmission />
        <CommentList comments={this.props.comments}/>
      </div>
    );
  }

});

module.exports = CommentsView;