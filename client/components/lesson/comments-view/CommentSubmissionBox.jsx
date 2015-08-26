var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../../actions');
var AuthStore = require('../../../stores/AuthStore.js');
// Drop-in replacement for the textarea component which automatically resizes textarea as content changes
// https://github.com/andreypopp/react-textarea-autosize
var Textarea = require('react-textarea-autosize');

var CommentSubmissionBox = React.createClass({
  mixins: [Reflux.connect(AuthStore, "auth")],

  getInitialState: function(){
    return {
      text: '',
      showCommentForm: false
    }
  },

  onInputChange: function(e) {
    this.setState({text: e.target.value});
  },

  onToggleCommentForm: function(){
    this.setState({ showCommentForm: !this.state.showCommentForm });
  },

  onFormFocus: function(){
    if(this.state.text === ''){
      var player = videojs('attachmentVideo');
      player.pause();
      this.onToggleCommentForm();
    }
  },

  onFormBlur: function(){
    if(this.state.text === ''){
      this.onToggleCommentForm();
    }
  },

  handleSubmit: function(e){
    e.preventDefault();
    Actions.submitComment({
      text: this.state.text,
      time: videojs('attachmentVideo').currentTime(),
      replies: [],
      likes: [],
      author: {
        name: window.currentUser.local.name,
        id: window.currentUser._id
      }
    });

    this.setState({
      text: ''
    });
    this.onToggleCommentForm();
  },
  render: function() {
    return (
      <div id="comment-creation-box" className="panel panel-default">
        <div className="panel panel-body comment-creation-form">
          <form onSubmit={this.handleSubmit} className="comment-form-box">
            <Textarea 
              className="form-control comment-form" 
              placeholder="Share your questions..."
              value={this.state.text}
              onChange={this.onInputChange} 
              onFocus={this.onFormFocus} 
              onBlur={this.onFormBlur}></Textarea>
            
            { this.state.showCommentForm ? 
              <div> <br/> <button type="submit" className="btn btn-primary btn-sm pull-right submit-comment-btn" onClick={this.handleSubmit}>Submit</button></div>
            : null }
          </form>
        </div>
      </div>
    );
  }

});

module.exports = CommentSubmissionBox;
