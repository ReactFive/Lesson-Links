var React = require('react');
var CommentList = require('./CommentList.jsx');
var CommentSubmissionBox = require('./CommentSubmissionBox.jsx');
var VideoNavBar = require('./VideoNavBar.jsx');

var CommentsView = React.createClass({
  render: function() {

    return (
      <div className="comments-view col-lg-11 col-lg-offset-1">
        <CommentSubmissionBox/>
        <CommentList />
      </div>
    );
  }

});

module.exports = CommentsView;