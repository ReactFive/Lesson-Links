var React = require('react');

var ReplyContent = React.createClass({

  render: function() {
    return (
      <div className="reply-content">
        <p>{this.props.text}</p>
        <small>some other user</small>
      </div>
    );
  }

});

module.exports = ReplyContent;