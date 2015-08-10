var React = require('react');

var ReplySubmissionBox = React.createClass({
  getInitialState: function(){
    return {
      text: '',
      showReplyForm: false
    }
  },
  onToggleReplyForm: function(e) {
    e.preventDefault();
    this.setState({ showReplyForm: !this.state.showReplyForm });
  },
  componentDidUpdate: function(){
    if(this.state.showReplyForm){
      React.findDOMNode(this.refs.test).focus();
    }
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.submitReply(this.state.text, this.props.comment.id);
    this.setState({
      text: ''
    });

  },
  render: function() {
    return (
      <div id="reply-creation-box">
        <p className="comment-reply-button" onClick={this.onToggleReplyForm}>Reply</p>

        { this.state.showReplyForm ? 
          <form onSubmit={this.handleSubmit}>
            <textarea className="form-control" onChange={this.onChange} value={this.state.text} ref="test"/><br/>
            <button type="submit" className="btn btn-primary pull-right" onClick={this.handleSubmit} >Submit</button>
            <button type="submit" className="btn btn-default pull-right" onClick={this.onToggleReplyForm} >Cancel</button>
          </form>
        : null }
      </div>
    );
  }

});

module.exports = ReplySubmissionBox;