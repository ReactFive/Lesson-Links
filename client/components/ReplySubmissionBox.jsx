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
      <div id="comment-creation-box" className="panel panel-default">
        <div className="panel panel-body">

        <button type="submit" className="btn btn-default" onClick={this.onToggleReplyForm}>Reply</button>

        { this.state.showReplyForm ? 
          <form onSubmit={this.handleSubmit}>
            <input className="form-control" onChange={this.onChange} value={this.state.text} ref="test"/><br/>
            <button type="submit" className="btn btn-primary pull-right" onClick={this.handleSubmit} >Submit</button>
            <button type="submit" className="btn btn-default pull-right" onClick={this.onToggleReplyForm} >Cancel</button>
          </form>
        : null }

        </div>
      </div>
    );
  }

});

module.exports = ReplySubmissionBox;