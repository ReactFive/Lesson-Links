var React = require('react');

var ReplyContent = React.createClass({

  render: function() {
    return (
      <div className="reply-content">
        <p className="comment-author">{this.props.author}</p>
        <p className="comment-text">{this.props.text}</p><br/>
      </div>
    );
  }

});

module.exports = ReplyContent;