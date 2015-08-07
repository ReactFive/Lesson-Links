var React = require('react');
<<<<<<< HEAD
require('../stylesheets/modules/app.scss');
=======
var RouteHandler = require('react-router').RouteHandler;
>>>>>>> Express server working; build process changed to Gulp

var App = React.createClass({
  render: function() {
    return (
<<<<<<< HEAD
      <div id='test'>Hello World</div>
=======
      <div>
        <RouteHandler />
      </div>
>>>>>>> Express server working; build process changed to Gulp
    );
  }
});

module.exports = App;


