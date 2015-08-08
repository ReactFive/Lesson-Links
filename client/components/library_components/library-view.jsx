var React = require('react');
//**Declare additional variable necessary for view

//var LibFilter = require('./lib-filter.jsx');

//var LibFilterHeader = require('./lib-filter-header.jsx')

//var Library = require('./library.jsx')

//var LibLessonOptions = require('./lib-lesson-options.jsx');

//var LibLessonPreview = require('./lib-lesson-preview.jsx');
var userID = "54ff4ed8476278905d04a1e6"

var TEST = [{
    title: "Lesson One - T",
    url: "https://www.youtube.com/watch?v=pw1DeLy2Xsw",
    teacher: {
      id: "54ff4ed8476278905d04a1e6",
      name: "Rick"
    },
    publish: true,
    comments: [{
      marked_at : 13.345,
      author    : "Abhi Gulati",
      text      : "I didn't really get what you are doing with that for loop?"
    }]
  },
    {
    title: "Lesson 2 - S",
    url: "https://www.youtube.com/watch?v=pw1DeLy2Xsw",
    teacher: {
      id: "888",
      name: "Rick"
    },
    publish: true,
    comments: [{
      marked_at : 13.345,
      author    : "Abhi Gulati",
      text      : "I didn't really get what you are doing with that for loop?"
    }]
  },
    {
    title: "Lesson 3 - S",
    url: "https://www.youtube.com/watch?v=pw1DeLy2Xsw",
    teacher: {
      id: "888",
      name: "Rick"
    },
    publish: true,
    comments: [{
      marked_at : 13.345,
      author    : "Abhi Gulati",
      text      : "I didn't really get what you are doing with that for loop?"
    }]
  },
    {
    title: "Lesson 4 - T",
    url: "https://www.youtube.com/watch?v=pw1DeLy2Xsw",
    teacher: {
      id: "54ff4ed8476278905d04a1e6",
      name: "Rick"
    },
    publish: true,
    comments: [{
      marked_at : 13.345,
      author    : "Abhi Gulati",
      text      : "I didn't really get what you are doing with that for loop?"
    }]
  },
    {
    title: "Lesson 5 -",
    url: "https://www.youtube.com/watch?v=pw1DeLy2Xsw",
    teacher: {
      id: "888",
      name: "Rick"
    },
    publish: true,
    comments: [{
      marked_at : 13.345,
      author    : "Abhi Gulati",
      text      : "I didn't really get what you are doing with that for loop?"
    }]
  }];

var LibraryView = React.createClass({
  getInitialState: function(){
    return {lessons: TEST}
  },
  onLockClick: function(lock){
    console.log("locked!")
  },
  render: function() {
    return (
      <div id="library-view">
        <LibFilter lessons = {this.state.lessons}/>
      </div>
    );
  }
});

var LibFilter = React.createClass({
  render:function(){
    return (
      <div id="library-filter">
        <LibFilterHeader />
        <Library lessons = {this.props.lessons}/>
      </div>
    )
  }
});

var LibFilterHeader = React.createClass({
  render:function(){
    return (
      <div id="library-filter-header">
        <h1>My Library</h1>
      </div>
    )
  }
});

var Library = React.createClass({
  render:function(){
    return (
      <div id="library">
        <LibLessonEntry lessons = {this.props.lessons}/>
      </div>
    )
  }
});

var LibLessonEntry = React.createClass({
  render:function(){
    return (
      <div id="lib-lesson-entry">
        <LibLessonPreview lessons = {this.props.lessons} />
        <LibLessonLock />
      </div>
    )
  }
});

var LibLessonPreview = React.createClass({
  render:function(){
    var lessons = this.props.lessons.map(function(lesson, index){
      return <span key={index}> 
        <ul>
          <li>Title: {lesson.title}</li>
          <li>url: {lesson.url} </li>
          <li>Author: {lesson.teacher.name}</li>
        </ul> 
      </span>
    });
    return (
      <div id="lib-lesson-entry">
      {lessons}
      </div>
    );
  }
});

var LibLessonLock = React.createClass({
  render:function(){
    return (
      <div id="lib-lesson-entry">
        <p>Lesson Lock</p>
      </div>
    )
  }
});

module.exports = LibraryView;