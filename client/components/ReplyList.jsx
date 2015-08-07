var React = require('react');
var Reply = require('./Reply.jsx');

var ReplyList = React.createClass({

  render: function() {
    var replies = this.props.replies.map(function(reply, index) {
      return <li className="reply list-group-item" key={index}> <Reply reply={reply}/> </li>
    });
    return ( 
      <ul id="reply-list" className="list-group">
        {replies}
      </ul>
    );
  }

});

module.exports = ReplyList;