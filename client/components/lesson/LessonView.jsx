var React = require('react');
var VideoBox = require('./VideoBox.jsx');
var Content = require('./Content.jsx');
var _ = require('lodash');

var LessonStore = require('../../stores/lesson-store.js');

var LessonView = React.createClass({
  render: function() {
    return (
        <div>
          <div id='lesson-view'>
            <VideoBox />
            <Content/>
          </div>
        </div>
    );
  }
});

module.exports = LessonView;