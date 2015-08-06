var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashHistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');

var routes = (
    <Router history={new HashHistory}>
      <Route path="/" component={Main}>
      </Route>
    </Router>
);

module.exports = routes;