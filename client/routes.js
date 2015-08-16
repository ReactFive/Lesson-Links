var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Redirect = Router.Redirect;

var App = require('./components/App');
var LandingPage = require('./components/LandingPage.jsx');
var LessonView = require('./components/lesson/LessonView.jsx');
var LibraryView = require('./components/library_components/LibraryView.jsx');
var SignupView = require('./components/signup/SignupView.jsx');
var AddLessonView = require('./components/add_lesson_view/AddLessonView.jsx');
var NotFound = require('./components/404/NotFound.jsx');
var LessonConfiguration = require('./components/add_lesson_view/LessonConfiguration.jsx');
var Exercise = require('./components/basicExercises/Multichoice.jsx');
var ExerciseTrueFalse = require('./components/basicExercises/TrueFalse.jsx');
var MultiChoiceCreation = require('./components/basicExercises/MultiChoiceCreation.jsx');
var TrueFalseCreation = require('./components/basicExercises/TrueFalseCreation.jsx');
var EditView = require('./components/edit/EditView.jsx');
var ShortAnswerCreation = require('./components/basicExercises/ShortAnswerCreation.jsx');


var routes = (
      <Route path="/" handler={App}>
        <DefaultRoute handler={LandingPage}/>
        <Route path='/register' handler={SignupView} />
        <Route path='/library' handler={LibraryView} />
        <Route path='/add-lesson' handler={AddLessonView}/>
        <Redirect from="/lesson" to="/add-lesson"/>
        <Route path='/configure' handler={LessonConfiguration}/>
        <Redirect from="/edit" to="/configure"/>
        {/*these two routes are for development purposes*/}
        <Route path='/exercise' handler={Exercise} />
        <Route path='/exerciseTF' handler={ExerciseTrueFalse} />
        <Route path='/multiplechoice' handler={MultiChoiceCreation} />
        <Route path='/truefalse' handler={TrueFalseCreation} />
        <Route path='/shortanswer' handler={ShortAnswerCreation} />
        <Route path='/:url' handler={LessonView} />
        <NotFoundRoute handler={NotFound}/>
      </Route>
);

module.exports = routes;