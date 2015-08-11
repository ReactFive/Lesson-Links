var React = require('react');
var Reflux = require('reflux');
var Comment = require('./Comment.jsx');
var LessonStore = require('../../../stores/lesson-store');

var CommentList = React.createClass({

  mixins: [Reflux.connect(LessonStore)],
  render: function() {
    if (this.state.lesson) {
      var that=this;
      var comments = LessonStore.lesson.comments
      .filter(function(comment){
        return comment.time >= 0 ;
      })
      .map(function(comment, index) {
        return <li className="comment-box" key={index}> <Comment comment={comment} submitReply={that.props.submitReply}/> </li>
      });
  
      return (
        <div id="comment-list-container" className="panel panel-default">
          <ul id="comment-list" className="panel panel-body">
            {comments}
          </ul>
        </div>
      );
    } else {
      return null
    }
  }
})

module.exports = CommentList;