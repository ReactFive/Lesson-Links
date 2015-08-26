var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');

var _ = require('lodash');
var LessonStore = require('../../stores/lesson-store');

var VideoPlayer = React.createClass({
  mixins: [Reflux.connect(LessonStore, "lesson")],
  getInitialState: function() {
    return {
      videoSetupCompleted: false
    }
  },

  componentDidMount: function(){
    Actions.triggerLessonStore();
  },

  componentWillUpdate: function(nextProps, nextState) {
    if(this.state.videoSetupCompleted) {
      var player = videojs('attachmentVideo');
      var pastComments = player.markers.getMarkers();
      var newComments = _.difference(nextState.lesson.comments, pastComments);
      player.markers.add(newComments);
    }
  },

  componentDidUpdate: function() {
    if(!this.state.videoSetupCompleted && this.state.lesson){
      console.log(this.state.lesson);
      var comments = this.state.lesson.comments,
          exerciseObjs = this.state.lesson.exercises;
      exerciseObjs.forEach(function(exerciseInfo) {
        exerciseInfo.text = exerciseInfo.type;
      });

      var player = this.videoSetup(_.union(comments, exerciseObjs));
      this.setState({
        videoSetupCompleted : true,
        currentComments : this.state.lesson.comments
      });
    }
  },

  componentWillUnmount: function() {
    videojs('attachmentVideo').dispose();
  },

  videoSetup: function(comments){
    var self = this;

    // initialize video.js
    var player = videojs('attachmentVideo').ready(function(){
      player.on('ended', function(){
        alert ("I have triggered");
      })
    })


    // setup markers
    player.markers({
      markers: comments,
      markerStyle: function(marker) {
        if(marker.replies) { // indicates the marker is for a comment
          return {
            'width':'7px',
            'border-radius': '30%',
            'background-color': 'red'
          }
        } else {
          return {
            'width':'7px',
            'border-radius': '30%',
            'background-color': 'yellow'
          }
        }
      },
      markerTip:{
        display: true,
        text: function(marker) {
          if(marker.author) {
            return marker.author.name;
          } else {
            return marker.text;
          }
        },
        time: function(marker) {
          return marker.time;
        }
      },
      onMarkerReached: function(marker) {
        // check if the marker corresponds to an exercise
        if(marker && !marker.replies) {
          player.pause();
          self.props.onExerciseReached(marker);
        }
      }
    });
    return player;
  },
  render: function() {

    return (
        this.state.lesson && this.state.lesson.video_url ?
            <div className="row">
              <div id="test">
                <div className="col-md-10 video-wrapper animated fadeIn">
                  <video id='attachmentVideo'
                         className='video-js vjs-default-skin'
                         width='auto' height='auto'
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