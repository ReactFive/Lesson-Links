var React = require('react');

var ReplyContent = React.createClass({

  render: function() {
    return (
      <div className="reply-content">
        <p>{this.props.text}</p>
        <small>{this.props.author}</small>
      </div>
    );
  }

});

module.exports = ReplyContent;