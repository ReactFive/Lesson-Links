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
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.submit(this.state.text);
    this.onToggleCommentForm();
  },
  render: function() {
    return (
      <div id="comment-creation-box" className="panel panel-default">
        <div className="panel panel-body">

          <input type="submit" value="Question? Comment?" className="btn btn-primary" onClick={this.onToggleCommentForm} />
          
          { this.state.showCommentForm ? 
            <form onSubmit={this.handleSubmit}>
              <textarea className="form-control" onChange={this.onChange} value={this.state.text}/>
              <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
            </form>
          : null }



        </div>
      </div>
    );
  }

});

module.exports = CommentSubmissionBox;
