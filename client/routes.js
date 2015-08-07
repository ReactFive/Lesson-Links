var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;

var App = require('./components/App');
var Home = require('./components/home');
var LessonView = require('./components/LessonView.jsx')
var LessonView = require('./components/lesson-view.jsx')
var LibraryView = require('./components/library_components/library-view.jsx')

var routes = (
    <Route handler={App}>
      <Route path='/' handler={Home} />
      <Route path='/lesson' handler={LessonView} />
      <Route path='/library' handler={LibraryView} />
    </Route>
);

module.exports = routes;