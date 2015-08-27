var React = require('react');
var Reflux = require('reflux');
var Actions = require('./../../actions');
var Router = require('react-router');
var Navigation = Router.Navigation;

var _ = require('lodash');
var LessonConfigStore = require('../../stores/LessonConfigStore');

var VideoPlayer = React.createClass({
  mixins: [Navigation, Reflux.connect(LessonConfigStore, "lesson")],

  getInitialState: function() {
    return {
      videoSetupCompleted: false
    }
  },

  componentWillUpdate: function(nextProps, nextState) {
    if(this.state.videoSetupCompleted) {
      var player = videojs('attachmentVideo');
      var pastExercises = player.markers.getMarkers();
      var newExercises = _.difference(nextState.lesson.exercises, pastExercises);
      if(newExercises.length > 0) {
        player.markers.add(newExercises);
      }
    }
  },

  componentDidUpdate: function() {

    if(!this.state.videoSetupCompleted){

      var self=this;
      if(!this.state.lesson){
        self.transitionTo('/library');
        return;
      }
      var player = this.videoSetup();
      this.setState({
        videoSetupCompleted : true,
      });
      player.load();
      setTimeout(function() {
        var duration = player.duration();
        Actions.setVideoDuration(this.state.lesson, duration);
      }.bind(this), 3000);
    } else {

    }
  },

  componentWillUnmount: function() {
    if(this.state.lesson){
      videojs('attachmentVideo').dispose();
    }
  },

  videoSetup: function(){
    // initialize video.js
    var player = videojs('attachmentVideo');
    if(typeof player.markers === 'function') {
      var exercises = this.state.lesson.exercises;
      var exerciseMarkers = exercises.map(function(exercise) {
        var markerObj = _.cloneDeep(exercise);
        markerObj.text = markerObj.exercise.type;
        return markerObj;
      })
      player.markers({
        markers: exerciseMarkers
      });
    }

    return player;
  },
  render: function() {
    if(this.state.lesson && this.state.lesson.video_url) {
      return (
          <div className="panel panel-default">
            <div className="panel-body">
            <video id='attachmentVideo'
              className='video-js vjs-default-skin embed-responsive-item'
              width='500' height='300'
              controls preload='auto'
              data-setup={'{ "techOrder": ["youtube"], "src": "' + this.state.lesson.video_url + '" }'}>
            </video>
            </div>
          </div>
      )
    } else {
      return null;
    }
  }  
})

module.exports = VideoPlayer;
