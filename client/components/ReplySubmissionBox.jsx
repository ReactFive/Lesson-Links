var React = require('react');

var ReplySubmissionBox = React.createClass({
  getInitialState: function(){
    return {
      text: ''
    }
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.submitReply(this.state.text, this.props.comment.id); 
    this.props.toggleReplyForm();
  },
  render: function() {
    return (
      <div id="comment-creation-box" className="panel panel-default">
        <div className="panel panel-body">
          <form onSubmit={this.handleSubmit}>
            <textarea className="form-control" onChange={this.onChange} value={this.state.text}/>
            <button type="submit" className="btn btn-default" onClick={this.handleSubmit} >Submit</button>
          </form>

        </div>
      </div>
    );
  }

});

module.exports = ReplySubmissionBox;