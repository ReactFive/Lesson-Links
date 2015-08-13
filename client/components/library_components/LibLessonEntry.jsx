var React = require('react');
var LibraryStore = require('../../stores/LibraryStore')
var LibAddLesson = require('./LibAddLesson.jsx')
var AuthStore = require('../../stores/AuthStore')
var Router = require('react-router')
var Link = Router.Link;

// LibraryStore.togglePublish(lesson)

var LibLessonEntry = React.createClass({
  render:function(){
    var owner = this.props.owner
    var lessons = this.props.lessons.map(function(lesson, index){
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
            {owner ? <a>Publish?</a> : ''}
            
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