var React = require('react');

var CommentContent = React.createClass({

  render: function() {
    return (
      <div className="comment-content">
        <p>ID: {this.props.comment.id} </p> <br/>
        <p>time: {this.props.comment.time} </p> <br/>
        <p>text: {this.props.comment.text} </p> <br/>
      </div>
    );
  }

});

module.exports = CommentContent;