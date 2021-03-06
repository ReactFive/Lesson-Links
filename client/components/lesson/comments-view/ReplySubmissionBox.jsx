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

  componentDidMount: function(){
    if(this.props.showReplyForm){
      React.findDOMNode(this.refs.test).focus();
    }
  },

  onChange: function(e) {
    this.setState({text: e.target.value});
  },

  onBlur: function(){
    if(this.state.text === ''){
      this.props.toggleReplyForm();
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var replyObj = {
      author: {
        name: window.currentUser.local.name,
        id: window.currentUser._id
      },
      text: this.state.text,
      likes: [],
      star: false,
      parent: this.props.comment._id
    };
    
    Actions.submitReply(replyObj, this.props.comment._id);

    this.setState({
      text: ''
    });

    React.findDOMNode(this.refs.test).focus();

  },
  render: function() {
    return (
      <div id="reply-creation-box">
          <form onSubmit={this.handleSubmit} className="reply-form-box">
            <Textarea 
              className="form-control reply-form" 
              value={this.state.text} 
              ref="test"
              onChange={this.onChange}
              onBlur={this.onBlur}></Textarea>
            <button type="submit" className="btn btn-primary btn-xs pull-right reply-button" onClick={this.handleSubmit} >Submit</button>
            <button type="submit" className="btn btn-default btn-xs pull-right reply-button" onClick={this.props.toggleReplyForm} >Cancel</button>
          </form>
      </div>
    );
  }

});

module.exports = ReplySubmissionBox;