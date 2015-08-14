var React = require('react');
var Reflux = require('reflux');

var _ = require('lodash');
var AddLessonStore = require('../../stores/AddLessonStore');

var VideoPlayer = React.createClass({
  mixins: [Reflux.connect(AddLessonStore, "lesson")],

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
      player.markers.add(newExercises);
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
    player.markers({
      markers: []
    });
    
    return player;
  },
  render: function() {
    console.log("# exercises", this.state.lesson &&
      this.state.lesson.exercises.length);
    return (
      this.state.lesson && this.state.lesson.video_url ?
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="">
              <video id='attachmentVideo'
                className='video-js vjs-default-skin'
                width='700' height='394'
                controls preload='auto'
                data-setup={'{ "techOrder": ["youtube"], "src": "' + this.state.lesson.video_url + '" }'}>
              </video>
            </div>
          </div>
        </div>
        : null
    )
  }  
})

module.exports = VideoPlayer;