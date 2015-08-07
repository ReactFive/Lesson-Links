(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
  displayName: 'App',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(RouteHandler, null)
    );
  }
});

module.exports = App;

},{"react":"react","react-router":"react-router"}],2:[function(require,module,exports){
'use strict';

var React = require('react');
var Link = require('react-router').Link;

var Home = module.exports = React.createClass({
  displayName: 'exports',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'h3',
        { className: 'text-center' },
        'This will be home.'
      )
    );
  }
});

},{"react":"react","react-router":"react-router"}],3:[function(require,module,exports){
'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('../routes.js');

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(React.createElement(Handler, null), document.getElementById('root'));
});

},{"../routes.js":4,"react":"react","react-router":"react-router"}],4:[function(require,module,exports){
'use strict';

var React = require('react');
var Route = require('react-router').Route;
//var Route = ReactRouter.Route;

var App = require('./components/App');
var Home = require('./components/home');

var routes = React.createElement(
  Route,
  { handler: App },
  React.createElement(Route, { path: '/', handler: Home })
);

module.exports = routes;

},{"./components/App":1,"./components/home":2,"react":"react","react-router":"react-router"}]},{},[3]);
