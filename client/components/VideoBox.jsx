var React = require('react');
var Reflux = require('reflux');
var LessonStore = require('../stores/lesson-store');

var VideoPlayer = require('./VideoPlayer.jsx');

var VideoBox = React.createClass({

  render: function() {
    return (
      <div id="video-box col-lg-12">
        <VideoPlayer />
      </div>
    );
  }

});

module.exports = VideoBox;