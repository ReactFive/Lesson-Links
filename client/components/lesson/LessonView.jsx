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

  componentDidMount: function(){
    var self=this;
    Actions.getUser(function(){
      Actions.fetchLesson({sourceComponent: self, url: self.context.router.getCurrentParams().url});
    })

    //Set up a timer to fetch the lesson again every 10 seconds to get any new comments
    this.timer = setInterval(function(){
      Actions.fetchLesson({
        sourceComponent: self, url: self.context.router.getCurrentParams().url
      })
    }, 30000);
  },

  componentWillUnmount: function(){
    //Stops the lesson from continuing to fetch new comments after leaving the page
    clearInterval(this.timer);
  },

  loadExercise: function(exerciseObj) {
    this.setState({exerciseObj: exerciseObj});
  },

  onExerciseCompleted: function(result) {
    
    // send result to server
    Actions.submitExerciseResult(this.state.exercise, result);

    // clear exercise state in lesson
    this.setState({exercise: null});

    // resume video player
    var player = videojs('attachmentVideo');
    player.play();
  },

  mapExerciseType: function() {
    var exerciseTypeMap = {
      'multiplechoice' : <MultiChoice exercise={this.state.exerciseObj.exercise || {}} onComplete={this.onExerciseCompleted}/>,
      'truefalse' : <TrueFalse exercise={this.state.exerciseObj.exercise || {}} onComplete={this.onExerciseCompleted}/>,
    }

    return exerciseTypeMap[this.state.exercise.text];
  },

  render: function() {

    if(this.state.lesson){
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