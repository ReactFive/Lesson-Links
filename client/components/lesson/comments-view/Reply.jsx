var React = require('react');
var ReplyContent = require('./ReplyContent.jsx');

var Reply = React.createClass({

  render: function() {
    return (
      <div>
        <ReplyContent author={this.props.reply.author} text={this.props.reply.text} />
      </div>
    );
  }

});

module.exports = Reply;