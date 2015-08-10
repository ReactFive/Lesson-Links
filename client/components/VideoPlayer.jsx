var React = require('react');
var Reflux = require('reflux');

var _ = require('lodash');
var LessonStore = require('../stores/lesson-store');

var VideoPlayer = React.createClass({
  mixins: [Reflux.connect(LessonStore, "lesson")],
  getInitialState: function() {
    videoSetupCompleted: false
  },
  componentWillReceiveProps: function(nextProps){
  },
  componentWillMount: function(){
  },
  componentDidMount: function(){
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
    if(!this.state.videoSetupCompleted){
      this.state.lesson.comments.forEach(function(comment) {
        comment.time = comment.marked_at;
      });
      var player = this.videoSetup(this.state.lesson.comments);
      this.setState({videoSetupCompleted : true});
      this.setState({currentComments : this.state.lesson.comments});
    }
  },
  videoSetup: function(comments){
    // initialize video.js
    var player = videojs('attachmentVideo');
    // setup plugin
    player.markers({
      markers: comments,
      markerStyle: {
        'width':'7px',
        'border-radius': '30%',
        'background-color': 'red'
      },
      markerTip:{
        display: true,
        text: function(marker) {
          return "Break: "+ marker.text;
        },
        time: function(marker) {
          return marker.time;
        }
      },
      breakOverlay:{
        display: false,
        displayTime: 3,
        style:{
          'width':'100%',
          'height': '20%',
          'background-color': 'rgba(0,0,0,0.7)',
          'color': 'white',
          'font-size': '17px'
        },
        text: function(marker) {
          return "Break overlay: " + marker.overlayText;
        }
      },
      onMarkerClick: function(marker) {},
      onMarkerReached: function(marker) {}
    });
    return player;
  },
  render: function() {
    return (
      this.state.lesson && this.state.lesson.video_url ?
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="embed-responsive embed-responsive-16by9">
              <video id='attachmentVideo'
                className='video-js vjs-default-skin'
                  width='640' height='390'
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