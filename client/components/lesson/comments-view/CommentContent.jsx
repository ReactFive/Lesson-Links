var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../../actions');
var AuthStore = require('../../../stores/AuthStore.js');

var CommentContent = React.createClass({
  mixins: [Reflux.connect(AuthStore)],

  getInitialState: function(){
    return {
      liked: false,
      starred: false
    }
  },

  toggleLikeButton: function(e) {
    e.preventDefault();
    this.setState({ liked: !this.state.liked });
  },

  toggleStarButton: function(e){
    e.preventDefault();
    this.setState({ starred: !this.state.starred });
  },

  onChange: function(event, user) {
    this.setState({user : user});
  },

  componentDidMount: function() {
    this.state.user = AuthStore.user;
  },

  deleteComment: function(e){
    e.preventDefault();
    Actions.deleteComment(this.props.comment.key);
  },

  likeComment: function(e){
    e.preventDefault();
    Actions.likeComment(this.props.comment.key, this.state.user.name);
    this.toggleLikeButton(e);
  },

  unlikeComment: function(e){
    e.preventDefault();
    Actions.unlikeComment(this.props.comment.key, this.state.user.name);
    this.toggleLikeButton(e);
  },

  starComment: function(e){
    e.preventDefault();
    // Mark that comment as 'starred' or 'unstarred' on the server by toggling it's star property
    // Actions.starComment(this.props.comment.key, this.state.user.name);
    this.toggleStarButton(e);
  },

  render: function() {
    return (
      <div className="comment-content">
        { this.state.starred ? 
          <p className="comment-star-button glyphicon glyphicon-star" onClick={this.starComment}> </p> 
          :
          <p className="comment-star-button glyphicon glyphicon-star-empty" onClick={this.starComment}> </p> 
        }
        <p className="comment-author">{this.props.comment.author} </p> 
        <p className="comment-video-timestamp">@ {this.props.comment.time} seconds </p> 
       
       
        <p className="comment-text">{this.props.comment.text} </p>

        <div className="comment-toolbar">
          { this.state.liked ? 
            <p className="comment-like-button" onClick={this.unlikeComment}>Unlike &nbsp; &middot; &nbsp;</p> 
            :
            <p className="comment-like-button" onClick={this.likeComment}>Like &nbsp; &middot; &nbsp;</p> 
          }
          <p className="comment-reply-button" onClick={this.props.toggleReplyForm}>Reply</p>  &nbsp; &middot; &nbsp;
          <p className="comment-like-icon glyphicon glyphicon-thumbs-up"></p>
          <p className="comment-likes"> {this.props.comment.likes.length === 0 ? null : this.props.comment.likes.length}</p>
          <p className="comment-delete-button" onClick={this.deleteComment}>[Delete]</p>
        </div>
      </div>
    );
  }

});

module.exports = CommentContent;