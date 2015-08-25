var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Nav = require('./header-footer/nav.jsx');
var Footer = require('./header-footer/footer.jsx');
var Router = require('react-router');

var App = React.createClass({
  getInitialState: function(){
    return null;
  },
  render: function() {
    return (
      <div>
        <Nav />
          <div id="main-content">
            <RouteHandler />
          </div>
      </div>
    );
  }
});

module.exports = App;