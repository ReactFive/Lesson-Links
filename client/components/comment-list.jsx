var React = require('react');

var CommentList = React.createClass({
  render: function() {
    var comments = this.props.comments.map(function(comment, index) {
      return <li key={index}> {comment.time} {comment.text} </li>
    });
    return (
      <ul>
        {comments}
      </ul>
    );
  }
})

module.exports = CommentList;