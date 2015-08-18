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
    Actions.getUser();
  },

  componentWillMount: function(){
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
          <div className="row">
            <div id="library-filter-header">
              <h1 className="filterColor">
                {name}{apo}s Library
              </h1>
            </div>
          </div>
          <LibLessonCollection lessons = {user.lessons} />
        </div>
      )
      
    } else {
      Actions.getUser();
      console.log("no user yet");
      return null
    }
  }
});

module.exports = Library;