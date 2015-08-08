var React = require('react');

var CommentSubmissionBox = React.createClass({
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
    this.props.submit(this.state.text);
  },
  render: function() {
    return (
      <div id="comment-creation-box" className="panel panel-default">
        <div className="panel-heading">Comments</div>
        <div className="panel panel-body">

          <button href="/" className="btn btn-primary" role="button">Make a comment</button>
          <form onSubmit={this.handleSubmit}>
            <textarea className="form-control" onChange={this.onChange} value={this.state.text}/>
            <button className="btn btn-primary">submit</button>
          </form>

        </div>
      </div>
    );
  }

});

module.exports = CommentSubmissionBox;
