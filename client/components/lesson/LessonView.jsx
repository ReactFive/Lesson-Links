var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var _ = require('lodash');
var Actions = require('../../actions');

var LessonStore = require('../../stores/lesson-store.js');
var AuthStore = require('../../stores/AuthStore');

var VideoPlayer = require('./VideoPlayer.jsx');
var Content = require('./Content.jsx');
var LoginOverlay = require('./LoginOverlay.jsx');

var MultiChoice = require('../basicExercises/Multichoice.jsx');
var TrueFalse = require('../basicExercises/TrueFalse.jsx');

var LessonView = React.createClass({
  mixins: [Router.Navigation, Reflux.connect(LessonStore, "lesson"), Reflux.connect(AuthStore, 'auth')],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      exercise: null
    }
  },

  componentWillMount: function(){
    
  },

  componentDidMount: function(){
    var self=this;
    Actions.getUser(function(){
      Actions.fetchLesson({sourceComponent: self, url: self.context.router.getCurrentParams().url});
    })
  },

  loadExercise: function(exercise) {
    console.log(exercise);
    this.setState({exercise: exercise});
  },

  mapExerciseType: function() {
    var exerciseTypeMap = {
      'multiplechoice' : <MultiChoice exercise={this.state.exerciseState || {}} />,
      'truefalse' : <TrueFalse exercise={this.state.exerciseState || {}} />,
    }

    return exerciseTypeMap[this.state.exercise.text];
  },

  render: function() {

    if(this.state.auth){
      console.log("this.state.auth", this.state.auth);
      console.log("this.state.auth.user", this.state.auth.user);
      var overlay = this.state.auth && this.state.auth.user ? null : <LoginOverlay/>

      return (
        <div>
          <div id='lesson-view'>
            {overlay}
            <div id="video-box" className="col-lg-12">
              <VideoPlayer onExerciseReached={this.loadExercise} />
            </div>
            {this.state.exercise ? this.mapExerciseType() : <Content />}
          </div>
        </div>
      );
    }else{
      return null;
    }
  }, 
});

module.exports = LessonView;