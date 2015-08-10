var React = require('react');
var Reflux = require('reflux');
var LessonStore = require('../stores/lesson-store');

var VideoPlayer = require('./VideoPlayer.jsx');

var VideoBox = React.createClass({
//  mixins: [Reflux.connect(LessonStore, "lesson")],
  /*{ getInitialState: function(){
      return {
        title: this.props.title,
        url: this.props.url,
        comments: this.props.comments
      };
    }, }*/

  render: function() {
    //console.log(this.state.lesson);
    return (
      <div id="video-box col-lg-12">
        <VideoPlayer />
      </div>
    );
  }

});

module.exports = VideoBox;