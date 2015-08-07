var React = require('react');

var CommentSubmission = module.exports = 
React.createClass({

  handleSubmit: function(e) {
    e.preventDefault();
    var comment = React.findDOMNode(this.refs.comment).value.trim();
    console.log(comment);
    this.props.onCommentSubmit(comment);
  },

  render: function() {
    return (
      <form id='chatbox' className='chattyBox' onSubmit={this.handleSubmit}>
        <input type="text" placeholder='Hello!' ref="comment" />
      </form>

    );
  }
})