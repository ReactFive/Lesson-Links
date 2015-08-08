var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Nav = require('./header-footer/nav.jsx');
var Footer = require('./header-footer/footer.jsx');

var App = React.createClass({
  getInitialState: function(){
    return null;
  },
  render: function() {
    return (
      <div>
        <Nav />
         <RouteHandler />
        <Footer />
      </div>
    );
  }
});

module.exports = App;