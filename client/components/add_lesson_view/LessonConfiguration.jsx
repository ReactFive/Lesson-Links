var _ = require('lodash');
var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');
var LessonConfigStore = require('../../stores/LessonConfigStore');
var VideoPlayer = require('./ConfigVideoPlayer.jsx');
var ExerciseTypes = require('./ExerciseTypes.jsx');
var CurrentExercisesList = require('./CurrentExercisesList.jsx');

var MultiChoiceCreation = require('../basicExercises/MultiChoiceCreation.jsx');
var TrueFalseCreation = require('../basicExercises/TrueFalseCreation.jsx');
var ShortAnswerCreation = require('../basicExercises/ShortAnswerCreation.jsx');


var LessonConfiguration = React.createClass({
  mixins: [Reflux.connect(LessonConfigStore, "lesson")],

  getInitialState: function() {
    return {
      editing : null
    }
  },

  componentWillMount: function() {
    Actions.triggerConfigStore();
  },

  mapExerciseType: function() {
    var exerciseTypeMap = {
      'multiplechoice' : <MultiChoiceCreation exerciseState={this.state.exerciseState || {}} onComplete={this.setEditing}/>,
      'truefalse' : <TrueFalseCreation exerciseState={this.state.exerciseState || {}} onComplete={this.setEditing}/>,
      'shortanswer' : <ShortAnswerCreation exerciseState={this.state.exerciseState || {}} onComplete={this.setEditing}/>,
    }

    return exerciseTypeMap[this.state.editing];
  },

  loadExercise: function(exerciseInfo) {
    var exercise = exerciseInfo.exercise;
    this.setState({
      editing: exercise.type,
      exerciseState : exercise
    })
  },

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <VideoPlayer />
          {this.state.lesson && <CurrentExercisesList reloadExercise={this.loadExercise} exercises={this.state.lesson.exercises}/>}
        </div>
        <div className="row">
        {!this.state.editing && 
          <ExerciseTypes chooseType={this.setEditing} />}
        {this.state.editing && 
          this.mapExerciseType()}
        </div>
      </div>
    );
  },

  publishLesson: function() {
    Actions.publish(this.state.lesson)
    .then(function(res) {
      console.log(res);
    })
  },

  setEditing: function(exerciseType) {
    this.setState({
      editing : exerciseType
    })
  }

});

module.exports = LessonConfiguration;
