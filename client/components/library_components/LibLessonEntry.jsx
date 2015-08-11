var React = require('react');

var LibAddLesson = require('./LibAddLesson.jsx')

var LibLessonEntry = React.createClass({
  render:function(){

    var lessons = this.props.lessons.map(function(lesson, index){
      return <span className="lib-lesson-entry" key={index}>
      
          <ul>
            <li>Title: {lesson.title}</li>
            <li>
              url: {lesson.url} 
            </li>
            <li>Author: {lesson.teacher.name}</li>
          </ul> 
          <p>
            <p className="lib-less-title">{lesson.title}</p>
            <p className="lib-less-author">By: {lesson.teacher.name}</p>
          </p> 

          <p className="lib-lock">
            <a>publish?</a>
          </p> 

        </span>
    });

    return (
        <span >
          {lessons}
        </span>
    );
  }
});


{/* FOR FUTURE ANIMATION STYLING           <img src='../../public/assets/lock.png' />*/}

module.exports = LibLessonEntry;