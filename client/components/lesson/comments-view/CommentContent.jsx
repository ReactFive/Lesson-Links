var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../../actions');
var LessonStore = require('../../../stores/lesson-store');

var CommentContent = React.createClass({

  mixins: [Reflux.connect(LessonStore)],

  getInitialState: function(){
    return {
      liked: false,
      starred: false
    }
  },

  componentWillMount: function(){
    //grabs pre-exiting data about the comment, such as whether the user has liked it or whether it is starred
    this.state.user = window.currentUser;
    this.state.liked = this.props.comment.likes.indexOf(this.state.user._id) >= 0;
    this.state.starred = this.props.comment.star;
  },

  toggleLikeButton: function(e) {
    e.preventDefault();
    this.setState({ liked: !this.state.liked });
  },

  toggleStarButton: function(e){
    e.preventDefault();
    this.setState({ starred: !this.state.starred });
  },

  likeComment: function(e){
    e.preventDefault();
    Actions.likeComment(this.props.comment._id, this.state.user._id);
    this.toggleLikeButton(e);
  },

  unlikeComment: function(e){
    e.preventDefault();
    Actions.unlikeComment(this.props.comment._id, this.state.user._id);
    this.toggleLikeButton(e);
  },

  starComment: function(e){
    e.preventDefault();
    Actions.starComment(this.props.comment._id, this.state.user._id);
    this.toggleStarButton(e);
  },

  deleteComment: function(e){
    e.preventDefault();
    Actions.deleteComment(this.props.comment._id);
  },

  render: function() {

    if(LessonStore.lesson){

      var teacher = LessonStore.lesson.teacher.id;
      
      // Empty star button
      // Visible to: - teacher sees it on all comments with 'starred' property set to 'false'
      // What it does: On click, sets the 'starred' property to 'true' 
      var emptyStar = (this.state.user._id === teacher) ? 
        <p className="comment-star-button glyphicon glyphicon-star-empty" onClick={this.starComment}> </p> : null;

      // Full star button
      // Visible to: - teacher and students sees it on all comments with 'starred' property set to 'true'
      // What it does: On click (only available to the teacher), will set the 'starred' property to 'false'
      var fullStar = (this.state.user._id === teacher) ? 
        <p className="comment-star-button glyphicon glyphicon-star" onClick={this.starComment}> </p>
        :
        <p className="comment-star-button glyphicon glyphicon-star" title="The owner of this lesson has approved this post!"> </p>

      // Like/Unlike buttons
      // Visible to: - all users (teacher and students). Which button is shown is unique to the user (depending on whether they have liked or unliked that comment)
      // What it does: On click, toggles the the current button (i.e. if click 'like', will add the user to that comments' likes and show 'unlike')
      var likeButton = <p className="comment-like-button" onClick={this.unlikeComment}>Unlike &nbsp; &middot; &nbsp;</p>
      var unlikeButton = <p className="comment-like-button" onClick={this.likeComment}>Like &nbsp; &middot; &nbsp;</p> 

      // Delete button
      // Visible to: - teacher sees it on all comments.
      //             - students see it only on their own comments.
      // What it does: On click, deletes the comment from the database 
      var deleteButton = (this.state.user._id === teacher || this.state.user._id === this.props.comment.author.id) ?
        <p className="comment-delete-button" onClick={this.deleteComment}>[Delete]</p> : null;

      return (
        <div className="comment-content">
          { this.state.starred ? {fullStar} : {emptyStar} }
          <p className="comment-author">{this.props.comment.author.name} </p> 
          <p className="comment-video-timestamp">@ {this.props.comment.time} seconds </p> 
          <p className="comment-text">{this.props.comment.text} </p>
          <div className="comment-toolbar">
            { this.state.liked ? {likeButton} : {unlikeButton} }
            <p className="comment-reply-button" onClick={this.props.toggleReplyForm}>Reply</p>  &nbsp; &middot; &nbsp;
            <p className="comment-like-icon glyphicon glyphicon-thumbs-up"></p>
            <p className="comment-likes"> {this.props.comment.likes.length === 0 ? null : this.props.comment.likes.length}</p>
            {deleteButton}
          </div>
        </div>
      );
    } else {
      return null
    }
  }
})

module.exports = CommentContent;