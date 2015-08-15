var React = require('react');
var Reflux = require('reflux');

var VideoNavBar = React.createClass({

  render: function() {
    return (
      <div id="video-nav-bar">
          <p className="glyphicon glyphicon-chevron-left"></p>
          Markers
          <p className="glyphicon glyphicon-chevron-right"></p>
      </div>
    );
  }

});

module.exports = VideoNavBar;