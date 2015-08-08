var React = require('react');
var CommentsView = require('./CommentsView.jsx');
var Content = React.createClass({

  render: function() {
    return (
      <div id="content col-lg-12">
        <CommentsView comments={this.props.comments} submit={this.props.submit} submitReply={this.props.submitReply} />
      </div>
    );
  }

});

module.exports = Content;