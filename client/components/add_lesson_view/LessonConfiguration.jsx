var _ = require('lodash');
var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');
var AddLessonStore = require('../../stores/AddLessonStore');
var VideoPlayer = require('./ConfigVideoPlayer.jsx');
var ExerciseTypes = require('./ExerciseTypes.jsx');
var MultiChoiceCreation = require('../basicExercises/MultiChoiceCreation.jsx');
//var VideoBox = require('./VideoBox.jsx');

var LessonConfiguration = React.createClass({
  mixins: [Reflux.connect(AddLessonStore, "lesson")],

  getInitialState: function() {
    return {
      editing : null
    }
  },

  render: function() {
    return (
      <div>
        <VideoPlayer />
        {!this.state.editing && 
          <ExerciseTypes chooseType={this.startEditing} />
        }
        {this.state.editing && <MultiChoiceCreation />}
      </div>
    );
  },

  startEditing: function(exerciseType) {
    this.setState({
      editing : exerciseType
    })
  }

});

module.exports = LessonConfiguration;
