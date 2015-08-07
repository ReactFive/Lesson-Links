var React = require('react');
//**Declare additional variable necessary for view

//var LibFilter = require('./lib-filter.jsx');

//var LibFilterHeader = require('./lib-filter-header.jsx')

//var Library = require('./library.jsx')

//var LibLessonOptions = require('./lib-lesson-options.jsx');

//var LibLessonPreview = require('./lib-lesson-preview.jsx');
var userID = "54ff4ed8476278905d04a1e6"

var testLessons = [ {
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
  onLockClick: function(lock){
    console.log("locked!")
  },
  render: function() {
    return (
      <div>
        <LibFilter />
      </div>
    );
  }
});

var LibFilter = React.createClass({
  render:function(){
    return (
      <div>
        <LibFilterHeader />
        <Library />
      </div>
    )
  }
});

var LibFilterHeader = React.createClass({
  render:function(){
    return (
      <div>
        <h1>My Library</h1>
      </div>
    )
  }
});

var LibFilterHeader = React.createClass({
  render:function(){
    return (
        <h1>My Library</h1>
    )
  }
});

var Library = React.createClass({
  render:function(){
    return (
      <div>
        <h1>My Library</h1>
      </div>
    )
  }
});

module.exports = LibraryView;