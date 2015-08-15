var React = require('react');
var Reflux = require('reflux');

var _ = require('lodash');
var LessonConfigStore = require('../../stores/LessonConfigStore');

var VideoPlayer = React.createClass({
  mixins: [Reflux.connect(LessonConfigStore, "lesson")],

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

      var player = this.videoSetup();
      this.setState({
        videoSetupCompleted : true,
      });
    }
  },
  videoSetup: function(){
    // initialize video.js
    var player = videojs('attachmentVideo');
    if(typeof player.markers === 'function') {
        player.markers({
        markers: []
      });
    }

    return player;
  },
  render: function() {
    console.log("# exercises", this.state.lesson &&
      this.state.lesson.exercises.length);
    if(this.state.lesson && this.state.lesson.video_url) {
      return (
        <div className="col-xs-7 col-xs-offset-1">
          <div className="">
            <video id='attachmentVideo'
              className='video-js vjs-default-skin'
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