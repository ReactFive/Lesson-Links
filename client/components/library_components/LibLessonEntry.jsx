var React = require('react');

var LibLessonEntry = React.createClass({
  render:function(){

    var lessons = this.props.lessons.map(function(lesson, index){
      return <span className="lib-lesson-preview" key={index}>
      
          <ul>
            <li>Title: {lesson.title}</li>
            <li>url: {lesson.url} </li>
            <li>Author: {lesson.teacher.name}</li>
          </ul> 

          <div id="lib-lesson-lock">
            <h1>test-lock</h1>
            <img src='../../public/assets/lock.png' />
          </div> 

        </span>
    });

    return (
        <div id="lib-lesson-entry">
          <h1>test-entrypath</h1>
          {lessons}
        </div>
    );
  }
});

module.exports = LibLessonEntry;