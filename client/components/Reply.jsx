var React = require('react');
var ReplyContent = require('./ReplyContent.jsx');

var Reply = React.createClass({

  render: function() {
    return (
      <div>
        <ReplyContent time={this.props.reply.time} text={this.props.reply.text} />
      </div>
    );
  }

});

module.exports = Reply;