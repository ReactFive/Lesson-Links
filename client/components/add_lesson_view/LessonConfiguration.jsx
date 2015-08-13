var _ = require('lodash');
var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');
var AddLessonStore = require('../../stores/AddLessonStore');
var VideoPlayer = require('./ConfigVideoPlayer.jsx');
var ExerciseTypes = require('./ExerciseTypes.jsx');
//var VideoBox = require('./VideoBox.jsx');

var LessonConfiguration = React.createClass({
  mixins: [Reflux.connect(AddLessonStore, "lesson")],

  render: function() {
    return (
      <div>
        <VideoPlayer />
        <ExerciseTypes />
      </div>
    );
  }

});

module.exports = LessonConfiguration;
