var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../../actions');
// Drop-in replacement for the textarea component which automatically resizes textarea as content changes
// https://github.com/andreypopp/react-textarea-autosize
var Textarea = require('react-textarea-autosize');

var CommentSubmissionBox = React.createClass({
  mixins: [Reflux.listenTo(AuthStore, "onChange")],

  getInitialState: function(){
    return {
      text: '',
      showCommentForm: false
    }
  },

  onChange: function(event, user) {
    this.setState({user : user});
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
      marked_at: videojs('attachmentVideo').currentTime(),
      time: videojs('attachmentVideo').currentTime(),
      author: this.state.user.name,
      replies: []
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
            <br/>
            { this.state.showCommentForm ? 
              <button type="submit" className="btn btn-primary btn-sm pull-right" onClick={this.handleSubmit}>Submit</button>
            : null }
          </form>
        </div>
      </div>
    );
  }

});

module.exports = CommentSubmissionBox;
