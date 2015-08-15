var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../../actions');
var LessonStore = require('../../../stores/lesson-store');

var ReplyContent = React.createClass({

  mixins: [Reflux.connect(LessonStore)],

  getInitialState: function(){
    return {
      liked: false,
      starred: false
    }
  },

  componentWillMount: function(){
    //grabs pre-exiting data about the reply, such as whether the user has liked it or whether it is starred
    this.state.user = window.currentUser;
    this.state.liked = this.props.reply.likes.indexOf(this.state.user._id) >= 0;
    this.state.starred = this.props.reply.star;
  },

  toggleLikeButton: function(e) {
    e.preventDefault();
    this.setState({ liked: !this.state.liked });
  },

  likeReply: function(e){
    e.preventDefault();
    Actions.likeReply(this.props.reply._id, this.props.reply.parent, this.state.user._id);
    this.toggleLikeButton(e);
  },

  unlikeReply: function(e){
    e.preventDefault();
    Actions.unlikeReply(this.props.reply._id, this.props.reply.parent, this.state.user._id);
    this.toggleLikeButton(e);
  },

  render: function() {
    if(LessonStore.lesson){
      var teacher = LessonStore.lesson.teacher.id;

      // Like/Unlike buttons
      // Visible to: - all users (teacher and students). Which button is shown is unique to the user (depending on whether they have liked or unliked that comment)
      // What it does: On click, toggles the the current button (i.e. if click 'like', will add the user to that comments' likes and show 'unlike')
      var likeButton = <p className="comment-like-button" onClick={this.unlikeReply}>Unlike &nbsp; &middot; &nbsp;</p>
      var unlikeButton = <p className="comment-like-button" onClick={this.likeReply}>Like &nbsp; &middot; &nbsp;</p> 

      return (
        <div className="reply-content">
          <p className="comment-author">{this.props.reply.author}</p>
          <p className="comment-text">{this.props.reply.text}</p>
          <div className="comment-toolbar">
            { this.state.liked ? {likeButton} : {unlikeButton} }
            <p className="comment-like-icon glyphicon glyphicon-thumbs-up"></p>
            <p className="comment-likes"> {this.props.reply.likes.length === 0 ? null : this.props.reply.likes.length}</p>
          </div>
        </div>
      );
    }
  }

});

module.exports = ReplyContent;


