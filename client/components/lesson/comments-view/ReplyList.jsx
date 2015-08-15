var React = require('react');
var Reply = require('./Reply.jsx');

var ReplyList = React.createClass({

  render: function() {
    var replies = this.props.replies.map(function(reply, index) {
      return <Reply key={reply._id} reply={reply}/>
    });
    return ( 
      <ul id="reply-list">
        {replies}
      </ul>
    );
  }

});

module.exports = ReplyList;