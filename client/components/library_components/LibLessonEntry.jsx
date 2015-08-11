var React = require('react');

var LibAddLesson = require('./LibAddLesson.jsx')

var LibLessonEntry = React.createClass({
  render:function(){

    var lessons = this.props.lessons.map(function(lesson, index){
      return <span className="lib-lesson-entry" key={index}>
      
          <p>
            <p className="lib-less-title">Title: {lesson.title}</p>
            <p className="lib-less-author">Author: {lesson.teacher.name}</p>
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