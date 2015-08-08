var React = require('react');

var LibLessonLock = require('./lib-lesson-lock.jsx')

var LibLessonPreview = React.createClass({
  render:function(){

    var lessons = this.props.lessons.map(function(lesson, index){
      return <span className="lib-lesson-preview" key={index}> 
        <ul>
          <li>Title: {lesson.title}</li>
          <li>url: {lesson.url} </li>
          <li>Author: {lesson.teacher.name}</li>
        </ul> 
        <LibLessonLock />    
      </span>
    });

    return (
        <div id="lib-lesson-preview">
          {lessons}
        </div>
    );
  }
});

module.exports = LibLessonPreview;