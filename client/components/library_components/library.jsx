var React = require('react');
var Router = require('react-router');
var LibraryStore = require('../../stores/LibraryStore');
var AuthStore = require('../../stores/AuthStore');
var Actions = require('../../actions.js');
var Reflux = require('reflux');
var LibLessonEntry = require('./LibLessonEntry.jsx');
var LibAddLesson = require('./LibAddLesson.jsx');
var _ = require('lodash');

var Library = React.createClass({
  mixins: [Reflux.connect(AuthStore, 'auth')],

  getInitialState: function(){
  },

  componentWillMount: function(){
  },

  render:function(){

    {/*Declare apostrophe*/}
    var apo = "'";

    console.log(this.auth);
    if (this.auth.user){
      var user = this.auth.user;
      {/*Grab User's Name*/}
      var name = user.local.name;

      return (
        <div className="lib-lesson-container">
          <div id="library-filter-header">
            <h1 className="filterColor">
              {name}{apo}s Library
            </h1>
          </div>
          <div className="library-filter">
            <LibLessonEntry lessons = {
              _.filter(user.lessons, function(lesson){return lesson.teacher.id === user._id
              })
            } owner = {true}/>
          </div>
          <div className="library-filter-header">
            <h1 className="filterColor">{name}{apo}s Studies</h1>
          </div>
          <div className="library-filter row">
            <LibLessonEntry lessons = {
              _.filter(user.lessons, function(lesson){return lesson.teacher.id !== user._id
              })
            } owner = {false}/>

          </div>
        </div>
      )
    } else {
      Actions.getUser();
      return null
    }
  }
});

module.exports = Library;