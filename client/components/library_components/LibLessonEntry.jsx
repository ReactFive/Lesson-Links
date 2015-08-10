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

          <div className="lib-lock">
            <a>lock</a>
          </div> 

        </span>
    });

    return (
        <span className="lib-lesson-entry">
          {lessons}
        </span>
    );
  }
});

{/*            <img src='../../public/assets/lock.png' />*/}

module.exports = LibLessonEntry;