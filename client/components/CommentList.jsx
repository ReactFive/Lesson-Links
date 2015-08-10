var React = require('react');
var Comment = require('./Comment.jsx');

var CommentList = React.createClass({
  render: function() {
    var that=this;
    var comments = this.props.comments.map(function(comment, index) {
      return <li className="comment-box" key={index}> <Comment comment={comment} submitReply={that.props.submitReply}/> </li>
    });
    return (
      <div id="comment-list-container" className="panel panel-default">
        <ul id="comment-list" className="panel panel-body">
          {comments}
        </ul>
      </div>
    );
  }
})

module.exports = CommentList;