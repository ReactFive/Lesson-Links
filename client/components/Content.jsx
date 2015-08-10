var React = require('react');
var CommentsView = require('./CommentsView.jsx');
var Content = React.createClass({

  render: function() {
    return (
      <div id="content col-lg-12">
        <CommentsView />
      </div>
    );
  }

});

module.exports = Content;