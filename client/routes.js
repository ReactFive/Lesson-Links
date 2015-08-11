var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;

var App = require('./components/App');
var LandingPage = require('./components/LandingPage.jsx');
var LessonView = require('./components/lesson/LessonView.jsx');
var LibraryView = require('./components/library_components/LibraryView.jsx');
var SignupView = require('./components/signup/SignupView.jsx');
var NotFound = require('./components/404/NotFound.jsx');

var routes = (
    <Route handler={App}>
      <Route path='/' handler={LandingPage} />
      <Route path='/register' handler={SignupView} />
      <Route path='/lesson' handler={LessonView} />
      <Route path='/library' handler={LibraryView} />
      <NotFoundRoute handler={NotFound}/>
    </Route>
);

module.exports = routes;