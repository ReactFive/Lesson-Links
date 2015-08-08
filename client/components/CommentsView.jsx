var React = require('react');
var CommentList = require('./CommentList.jsx');
var CommentSubmissionBox = require('./CommentSubmissionBox.jsx');

var CommentsView = React.createClass({
  render: function() {

    return (
      <div className="col-lg-10 col-lg-offset-1">
        <CommentSubmissionBox submit={this.props.submit}/>
        <CommentList />
      </div>
    );
  }

});

module.exports = CommentsView;