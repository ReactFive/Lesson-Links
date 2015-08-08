var React = require('react');
var VideoPlayer = require('./VideoPlayer.jsx');

var VideoBox = React.createClass({
  /*{ getInitialState: function(){
      return {
        title: this.props.title,
        url: this.props.url,
        comments: this.props.comments
      };
    }, }*/

  render: function() {
    return (
      <div id="video-box col-lg-12">
        <VideoPlayer title={this.props.title} url={this.props.url} comments = {this.props.comments} />
      </div>
    );
  }

});

module.exports = VideoBox;