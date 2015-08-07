var React = require('react');

var ReplyContent = React.createClass({

  render: function() {
    return (
      <div className="reply-content">
        <p>{this.props.time} {this.props.text}</p> 
      </div>
    );
  }

});

module.exports = ReplyContent;