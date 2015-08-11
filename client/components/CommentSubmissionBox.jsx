var React = require('react');
var Reflux = require('reflux');
var Actions = require('../actions');
var AuthStore = require('../stores/AuthStore');

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
      author: "current User",
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
        <div className="panel panel-body">
          <form onSubmit={this.handleSubmit} className="comment-form-box">
            <textarea 
              className="form-control comment-form" 
              placeholder="Share your questions..."
              value={this.state.text}
              onChange={this.onInputChange} 
              onFocus={this.onFormFocus} 
              onBlur={this.onFormBlur} />
            <br/>
            { this.state.showCommentForm ? 
              <button type="submit" className="btn btn-primary pull-right" onClick={this.handleSubmit}>Submit</button>
            : null }
          </form>
        </div>
      </div>
    );
  }

});

module.exports = CommentSubmissionBox;
