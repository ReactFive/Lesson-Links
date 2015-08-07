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
      <VideoPlayer title={this.props.title} url={this.props.url} comments = {this.props.comments} />
    );
  }

});

module.exports = VideoBox;