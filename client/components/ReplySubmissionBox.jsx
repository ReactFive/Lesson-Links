var React = require('react');

var ReplySubmissionBox = React.createClass({
  getInitialState: function(){
    return {
      text: ''
    }
  },
  componentDidUpdate: function(){
    if(this.props.showReplyForm){
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
        { this.props.showReplyForm ? 
          <form onSubmit={this.handleSubmit} className="reply-form-box">
            <textarea className="form-control reply-form" rows="3" onChange={this.onChange} value={this.state.text} ref="test"/>
            <button type="submit" className="btn btn-primary pull-right reply-button" onClick={this.handleSubmit} >Submit</button>
            <button type="submit" className="btn btn-default pull-right reply-button" onClick={this.props.toggleReplyForm} >Cancel</button>
          </form>
        : null }
      </div>
    );
  }

});

module.exports = ReplySubmissionBox;