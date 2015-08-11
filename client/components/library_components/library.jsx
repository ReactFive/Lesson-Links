var React = require('react');

var LibLessonEntry = require('./LibLessonEntry.jsx');
var LibAddLesson = require('./LibAddLesson.jsx');

var TEST = [{
    title: "Lesson One",
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
    title: "Lesson 5 - S",
    url: "https://www.youtube.com/watch?v=pw1DeLy2Xsw",
    teacher: {
      id: "888",
      name: "Isto"
    },
    publish: true,
    comments: [{
      marked_at : 13.345,
      author    : "Abhi Gulati",
      text      : "I didn't really get what you are doing with that for loop?"
    }]
  }];

var Library = React.createClass({
  getInitialState: function(){
    return {lessons: TEST}
  },
  render:function(){
    
    {/*Grab Teacher's Name*/}
    var name = this.state.lessons[0].teacher.name

    {/*Declare apostrophe*/}
    var apo = "'"

    return (
      <div className="lib-lesson-container">
        <div id="library-filter-header">
          <h1>{name}{apo}s Library</h1>
        </div>
        <div id="library-filter">
            <LibLessonEntry lessons = {this.state.lessons}/>
            <LibAddLesson />
        </div>
        <div id="library-filter-header">
          <h1>{name}{apo}s Studies</h1>
        </div>
        <div id="library-filter">
            <LibLessonEntry lessons = {this.state.lessons}/>
        </div>
      </div>
    )
  }
});

module.exports = Library;