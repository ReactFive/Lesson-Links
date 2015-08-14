var _ = require('lodash');
var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');
var LessonConfigStore = require('../../stores/LessonConfigStore');
var VideoPlayer = require('./ConfigVideoPlayer.jsx');
var ExerciseTypes = require('./ExerciseTypes.jsx');
var MultiChoiceCreation = require('../basicExercises/MultiChoiceCreation.jsx');
var TrueFalseCreation = require('../basicExercises/TrueFalseCreation.jsx');


var LessonConfiguration = React.createClass({
  mixins: [Reflux.connect(LessonConfigStore, "lesson")],

  getInitialState: function() {
    return {
      editing : null
    }
  },

  mapExerciseType: function() {
    var exerciseTypeMap = {
      'multiplechoice' : <MultiChoiceCreation onComplete={this.setEditing}/>,
      'truefalse' : <TrueFalseCreation onComplete={this.setEditing}/>
    }

    return exerciseTypeMap[this.state.editing];
  },

  render: function() {
    return (
      <div>
        <VideoPlayer />
        {!this.state.editing && 
          <ExerciseTypes chooseType={this.setEditing} />
        }
        {this.state.editing && 
          this.mapExerciseType()}
      </div>
    );
  },

  setEditing: function(exerciseType) {
    this.setState({
      editing : exerciseType
    })
  }

});

module.exports = LessonConfiguration;
