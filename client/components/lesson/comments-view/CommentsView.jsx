var React = require('react');
var CommentList = require('./CommentList.jsx');
var CommentSubmissionBox = require('./CommentSubmissionBox.jsx');
var VideoNavBar = require('./VideoNavBar.jsx');

var CommentsView = React.createClass({
  render: function() {

    return (
      <div className="container">
        <div className="row">
          <div className="comments-view col-md-12">
            <CommentSubmissionBox/>
            <CommentList />
          </div>
        </div>
      </div>
    );
  }

});

module.exports = CommentsView;