var React = require('react');
var Router = require('react-router');
var LibraryStore = require('../../stores/LibraryStore')
var AuthStore = require('../../stores/AuthStore')
var Reflux = require('reflux');
var LibLessonEntry = require('./LibLessonEntry.jsx');
var LibAddLesson = require('./LibAddLesson.jsx');

var Library = React.createClass({
  mixins: [Reflux.connect(AuthStore,"auth")],

  componentWillMount: function(){
    console.log(AuthStore)
  },
  render:function(){
    {/*Grab Teacher's Name*/}
    var name = AuthStore.auth.user.local.name

    {/*Declare apostrophe*/}
    var apo = "'"

    return (
      <div className="lib-lesson-container">
        <div id="library-filter-header">
          <h1>{name}{apo}s Library</h1>
        </div>
        <div id="library-filter">
            <LibLessonEntry lessons = {AuthStore.auth.user.lessons}/>
            <LibAddLesson />
        </div>
        <div id="library-filter-header">
          <h1>{name}{apo}s Studies</h1>
        </div>
        <div id="library-filter">
            <LibLessonEntry lessons = {AuthStore.auth.user.lessons}/>
        </div>
      </div>
    )
  }
});

module.exports = Library;