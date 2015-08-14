var React = require('react');
var LibraryStore = require('../../stores/LibraryStore')
var LibAddLesson = require('./LibAddLesson.jsx')
var AuthStore = require('../../stores/AuthStore')
var Router = require('react-router')
var Link = Router.Link;

var LibLessonEntry = React.createClass({

  render:function(){
    var owner = this.props.owner;
    var lessonList = this.props.lessons;
    var lessons = this.props.lessons.map(function(lesson, index){
    var handleClick = function(index, event){
      LibraryStore.togglePublish(lessonList[index])
    }
    var boundClick = handleClick.bind(this,index);
    return <span className="lib-lesson-entry" key={index}>
        <p>
          <p className="lib-less-title">
            <a href={lesson.lesson_url || '/'}>
              {lesson.title || 'title not found'}
            </a>
          </p>
          <p className="lib-less-author">By: {lesson.teacher.name || 'anonymous'}</p>
        </p> 
        <p className="lib-lock">
          {owner ? lesson.publish ? 
            <a onClick={boundClick}>Published< /a> : 
            <a onClick={boundClick}>Not Published< /a> 
          : ''}
          
        </p> 
      </span>
    })
     return (
        <span >
          {lessons}
        </span>
    )
  }
})


{/* FOR FUTURE ANIMATION STYLING           <img src='../../public/assets/lock.png' />*/}

module.exports = LibLessonEntry;