var React = require('react');

var CommentContent = React.createClass({

  render: function() {
    return (
      <div className="comment-content">
        <p>{this.props.time} {this.props.text}</p> 
      </div>
    );
  }

});

module.exports = CommentContent;