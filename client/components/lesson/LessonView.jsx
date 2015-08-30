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
var ShortAnswer = require('../basicExercises/ShortAnswer.jsx');
var Categories = require('../basicExercises/Categories/Main.jsx');

var LessonView = React.createClass({
  mixins: [Router.Navigation, Reflux.connect(LessonStore, "lesson"), Reflux.connect(AuthStore, 'auth')],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      exercise: null,
      loggedInUser: true
    }
  },

  componentWillMount: function(){
    Actions.authenticate();
  },

  componentDidMount: function(){
    var self=this;
    Actions.getUser(function(){
      Actions.fetchLesson({sourceComponent: self, url: self.context.router.getCurrentParams().url});
    });
    //Set up a timer to fetch the lesson again every 10 seconds to get any new comments
    this.timer = setInterval(function(){
      Actions.fetchLesson({
        sourceComponent: self, url: self.context.router.getCurrentParams().url
      });
    }, 30000);
  },

  shouldComponentUpdate: function(nextProps, nextState){
    console.log("called from shouldUpdate", nextState);
    if(nextState.auth.loggedIn === false && this.state.loggedInUser === true) {
      this.setState({loggedInUser: false});
      return true;
    }
    return true;
  },

  componentWillUnmount: function(){
    //Stops the lesson from continuing to fetch new comments after leaving the page
    clearInterval(this.timer);
  },

  loadExercise: function(exerciseObj) {
    this.setState({exerciseObj: exerciseObj});
  },

  onExerciseCompleted: function(result) {
    this.state.exerciseObj.done = true;
    // send result to server
    Actions.submitExerciseResult(this.state.exerciseObj, result);

    // clear exercise state in lesson
    this.setState({exerciseObj: null});

    // resume video player
    var player = videojs('attachmentVideo');
    player.play();
  },

  mapExerciseType: function() {
    var exerciseTypeMap = {
      'multiplechoice' : <MultiChoice exercise={this.state.exerciseObj.exercise || {}} onComplete={this.onExerciseCompleted}/>,
      'truefalse' : <TrueFalse exercise={this.state.exerciseObj.exercise || {}} onComplete={this.onExerciseCompleted}/>,
      'shortanswer': <ShortAnswer exercise={this.state.exerciseObj.exercise || {}} onComplete={this.onExerciseCompleted}/>,
      'categories': <Categories exercise={this.state.exerciseObj.exercise || {}} onComplete={this.onExerciseCompleted}/>,
    }

    return exerciseTypeMap[this.state.exerciseObj.type];
  },

  render: function() {
    if(this.state.lesson){

      return (
        <div>
          <div id='lesson-view'>
            <div id="video-box" className="col-lg-12">
              <VideoPlayer onExerciseReached={this.loadExercise} />
            </div>
            {this.state.exerciseObj ? this.mapExerciseType() : <Content />}
          </div>
        </div>
      );
    }else{
      return this.state.loggedInUser ? null : <LoginOverlay/>
    }
  }, 
});

module.exports = LessonView;
