var React = require('react');

var RouteHandler = require('react-router').RouteHandler;
var CommentSubmission = require('./comment-submission.jsx');
var CommentList = require('./comment-list.jsx');
//require('../stylesheets/modules/app.scss');

var App = React.createClass({
  getInitialState: function(){
    return {
      title: "our video",
      url: "https://www.youtube.com/watch?v=xjS6SftYQaQ",
      comments: []
    };
  },
  render: function() {
    return (
      <div>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;


