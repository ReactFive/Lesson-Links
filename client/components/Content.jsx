var React = require('react');
var CommentsView = require('./CommentsView.jsx');
var Content = React.createClass({

  render: function() {
    return (
      <div id="content">
        <CommentsView comments={this.props.comments} />
      </div>
    );
  }

});

module.exports = Content;