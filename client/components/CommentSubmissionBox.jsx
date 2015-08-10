var React = require('react');

var CommentSubmissionBox = React.createClass({
  getInitialState: function(){
    return {
      text: '',
      showCommentForm: false
    }
  },
  onChange: function(e) {
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
    this.props.submit(this.state.text);
    this.setState({
      text: ''
    });
    this.onToggleCommentForm();
  },
  render: function() {
    return (
      <div id="comment-creation-box" className="panel panel-default">
        <div className="panel panel-body">
          <form onSubmit={this.handleSubmit}>
            <textarea 
              className="form-control" 
              placeholder="Share your questions..."
              value={this.state.text}
              onChange={this.onChange} 
              onFocus={this.onFormFocus} 
              onBlur={this.onFormBlur} />
            <br/>
            { this.state.showCommentForm ? 
              <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
            : null }
          </form>
        



        </div>
      </div>
    );
  }

});

module.exports = CommentSubmissionBox;
