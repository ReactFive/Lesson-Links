var React = require('react');
var ReplyContent = require('./ReplyContent.jsx');

var Reply = React.createClass({

  render: function() {
    return (
      <li className="reply"> 
        <ReplyContent author={this.props.reply.author} text={this.props.reply.text} />
      </li>
    );
  }

});

module.exports = Reply;