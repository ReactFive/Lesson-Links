var React = require('react');
var ReplyContent = require('./ReplyContent.jsx');

var Reply = React.createClass({

  render: function() {
    return (
      <li className="reply"> 
        <ReplyContent reply={this.props.reply} />
      </li>
    );
  }

});

module.exports = Reply;