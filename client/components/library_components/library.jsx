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
      console.log(user);
      {/*Grab User's Name*/}
      var name = this.state.auth.user.local.name;

      return (
        <div className="container lib-lesson-container">

          {/* Lessons where user is the teacher */}
          <div id="library-filter-header">
            <h1 className="filterColor">
              {name}{apo}s Library
            </h1>
            <hr/>
          </div>
          <LibLessonCollection lessons = {
              _.filter(user.lessons, function (lesson) {
                return lesson.teacher.id === user._id
              })
            } owner = {true}/>

          {/* Lessons where user is not the teacher */}
          <div className="library-filter-header">
            <h1 className="filterColor">{name}{apo}s Studies</h1>
            <hr/>
          </div>

          <LibLessonCollection lessons = {
            _.filter(user.lessons, function (lesson) {
              return lesson.teacher.id !== user._id && lesson.publish
            })
          } owner = {false}/>

        </div>
      )
      
    } else {
      return null;
    }
  }
});

module.exports = Library;