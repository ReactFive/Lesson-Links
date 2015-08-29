var _ = require('lodash');
var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');
var Router = require('react-router');
var Navigation = Router.Navigation;

var LessonConfigStore = require('../../stores/LessonConfigStore');
var VideoPlayer = require('./ConfigVideoPlayer.jsx');
var ExerciseTypes = require('./ExerciseTypes.jsx');
var CurrentExercisesList = require('./CurrentExercisesList.jsx');

var MultiChoiceCreation = require('../basicExercises/MultiChoiceCreation.jsx');
var TrueFalseCreation = require('../basicExercises/TrueFalseCreation.jsx');
var ShortAnswerCreation = require('../basicExercises/ShortAnswerCreation.jsx');


var LessonConfiguration = React.createClass({
  mixins: [Reflux.connect(LessonConfigStore, "lesson"), Navigation],

  getInitialState: function() {
    return {
      editing : null
    }
  },

  componentWillMount: function() {
    Actions.triggerConfigStore();
  },

  mapExerciseType: function() {
    var onDoneEditing = function() {
      this.setState({
        editing: null,
        exerciseState : null
      })
    }.bind(this);

    var exerciseTypeMap = {
      'multiplechoice' : <MultiChoiceCreation exerciseState={this.state.exerciseState || {}} onComplete={onDoneEditing}/>,
      'truefalse' : <TrueFalseCreation exerciseState={this.state.exerciseState || {}} onComplete={onDoneEditing}/>,
      'shortanswer' : <ShortAnswerCreation exerciseState={this.state.exerciseState || {}} onComplete={onDoneEditing}/>,
    }

    return exerciseTypeMap[this.state.editing];
  },

  loadExercise: function(exerciseObj) {
    this.setState({
      editing: exerciseObj.type,
      exerciseState : exerciseObj
    })
  },

  render: function() {
    return (
        <div id="lesson-config-view">

          <div className="col-lg-8">
              <div className="panel config-video-box">
                <VideoPlayer />
              </div>

              <div className="panel panel-default">
                <div className="panel-header">
                  {!this.state.editing && <ExerciseTypes chooseType={this.setEditing} />}
                </div>
                <div className="panel-body">
                  {this.state.editing && this.mapExerciseType()}
                </div>
              </div>

          </div>
       
          <div className="col-lg-4">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <h5>Configure your lesson</h5>
                    <ol>
                      <li>Click on the video timeline where you want an exercise to appear to the student.</li>
                      <li>Select the type of exercise you'd like to add</li>
                      <li>Fill out the exercise form</li>
                      <li>Repeat!</li>
                      <li>When you've added all of your exercises, click Publish to make your lesson link publicly available</li>
                    </ol>
                  </div>
                  <div className="panel-footer">
                    <button onClick={this.publishLesson} className="btn-block btn-success">Publish your lesson</button>
                  </div>
                </div>
              
                {this.state.lesson && 
                  <CurrentExercisesList reloadExercise={this.loadExercise} exerciseObjects={this.state.lesson.exercises}/>}
              </div>
            </div>
          </div>
  
        </div>
    );
  },

  publishLesson: function() {
    var self = this;

    Actions.publish(this.state.lesson)
        .then(function(res) {
          console.log("published: ", res);
          self.transitionTo('/library');
        })
  },

  setEditing: function(exerciseType) {
    this.setState({
      editing : exerciseType
    })
  }

});

module.exports = LessonConfiguration;
