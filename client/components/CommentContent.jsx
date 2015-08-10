var React = require('react');

var CommentContent = React.createClass({

  render: function() {
    return (
      <div className="comment-content">
        <p className="comment-username">{this.props.comment.username} </p> 
        <p className="comment-video-timestamp">@ {this.props.comment.time} seconds </p> 
        <p className="comment-text">{this.props.comment.text} </p>
      </div>
    );
  }

});

module.exports = CommentContent;