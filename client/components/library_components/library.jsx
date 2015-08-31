var React = require('react');
var Router = require('react-router');
var LibraryStore = require('../../stores/LibraryStore');
var AuthStore = require('../../stores/AuthStore');
var Actions = require('../../actions.js');
var Reflux = require('reflux');
var LibLessonEntry = require('./LibLessonEntry.jsx');
var LibLessonCollection = require('./LibLessonCollection.jsx');
var LibAddLesson = require('./LibAddLesson.jsx');
var _ = require('lodash');

var Library = React.createClass({
  mixins: [Reflux.connect(AuthStore, 'auth')],

  getInitialState: function(){
  },

  componentWillMount: function(){
    Actions.getUser();
  },

  render:function(){

    {/*Declare apostrophe*/}
    var apo = "'";

    if (this.state.auth && this.state.auth.user){
      var user = this.state.auth.user;
      {/*Grab User's Name*/}
      var name = this.state.auth.user.local.name;
      
      /* Lessons where user is the teacher */
      var lessonsA = _.filter(user.lessons, function (lesson) { return lesson.teacher.id === user._id }); 

      /* Lessons where user is not the teacher */
      var lessonsB = _.filter(user.lessons, function (lesson) { return lesson.teacher.id !== user._id && lesson.publish });

      return (
        <div className="container lib-lesson-container animated fadeIn">

          {/* Lessons where user is the teacher */}
          <div id="library-filter-header">
            <h1 className="filterColor">
              {name}{apo}s Library
            </h1>
          </div>

          <LibLessonCollection lessons={lessonsA} owner={true} />


          {/* Lessons where user is not the teacher */}
          <div className="library-filter-header">
            <h1 className="filterColor">{name}{apo}s Studies</h1>
          </div>

          <LibLessonCollection lessons={lessonsB} owner={false} />


        </div>
  
        );

   
    } else {
      return <h5>Library didnt load, probably because this.state.auth.user is false</h5>;
    }
  }
});

module.exports = Library;