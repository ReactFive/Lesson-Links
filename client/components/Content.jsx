var React = require('react');
var CommentsView = require('./CommentsView.jsx');
var Content = React.createClass({

  render: function() {
    return (
      <CommentsView comments={this.props.comments} />
    );
  }

});

module.exports = Content;