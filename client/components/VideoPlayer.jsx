var React = require('react');
var _ = require('lodash');

var VideoPlayer = React.createClass({
  componentWillReceiveProps: function(nextProps){
    var newComments = _.difference(nextProps.comments, this.props.comments);
    var player = videojs('attachmentVideo');
    player.markers.add(newComments);
  },
  componentWillMount: function(){
  },
  componentDidMount: function(){
    return this.videoSetup();
  },
  videoSetup: function(){
    // initialize video.js
    var player = videojs('attachmentVideo');
    // setup plugin
    player.markers({
      markers: this.props.comments,
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
      <video id='attachmentVideo' 
      className='video-js vjs-default-skin' 
      width='740'
      height='264' 
      controls preload='auto'
      data-setup={'{ "techOrder": ["youtube"], "src": "' + this.props.url + '" }'}>
      </video>
    )
  }  
})

module.exports = VideoPlayer;