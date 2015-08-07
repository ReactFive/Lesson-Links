var React = require('react');

var RouteHandler = require('react-router').RouteHandler;
var CommentSubmission = require('./comment-submission.jsx');
var CommentList = require('./CommentList.jsx');
var VideoPlayer = require('./VideoPlayer.jsx');
var LessonView = require('./LessonView.jsx')
//require('../stylesheets/modules/app.scss');

var App = React.createClass({
  getInitialState: function(){
    return null;
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


