var React = require('react');
var Reflux = require('reflux');
var Comment = require('./Comment.jsx');
var LessonStore = require('../../../stores/lesson-store');
var _ = require('lodash');

var CommentList = React.createClass({

  mixins: [Reflux.connect(LessonStore, "lesson")],
  
  render: function() {
    if (this.state.lesson) {
      var that=this;
      var comments = _.sortBy(this.state.lesson.comments,function(o){
		    return o.likes.length;
	    })
      .reverse()
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