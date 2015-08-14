var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../../actions');
// Drop-in replacement for the textarea component which automatically resizes textarea as content changes
// https://github.com/andreypopp/react-textarea-autosize
var Textarea = require('react-textarea-autosize');

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
 
    Actions.submitReply({
      text: this.state.text, 
      author: window.currentUser.local.name
    }, this.props.comment.key);

    this.setState({
      text: ''
    });

  },
  render: function() {
    return (
      <div id="reply-creation-box">
        { this.props.showReplyForm ? 
          <form onSubmit={this.handleSubmit} className="reply-form-box">
            <Textarea className="form-control reply-form" rows={2} onChange={this.onChange} value={this.state.text} ref="test"></Textarea>
            <button type="submit" className="btn btn-primary btn-xs pull-right reply-button" onClick={this.handleSubmit} >Submit</button>
            <button type="submit" className="btn btn-default btn-xs pull-right reply-button" onClick={this.props.toggleReplyForm} >Cancel</button>
          </form>
        : null }
      </div>
    );
  }

});

module.exports = ReplySubmissionBox;