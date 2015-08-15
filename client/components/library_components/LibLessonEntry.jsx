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
      lessonList[index].publish = !lessonList[index].publish
    }
    var boundClick = handleClick.bind(this,index);



    return <div className="row">
      <div className="col12">
        <div className="lib-lesson-entry" id="pulse" key={index}>
          <img className="videoSnippet" src="../../public/assets/video_sample.png"></img>
          <div className="lib-lesson-info">
            <p className="lib-less-title">
              <a className ="titleAnchor" href={lesson.lesson_url || '/'}>
                {lesson.title || 'title not found'}
              </a>
              <p className="lib-less-author">By: {lesson.teacher.name || 'anonymous'}
              </p>
            </p>
            <p className="lib-lesson-stats">
              Comments: 12    Exercises: 5
              <p>
                Published: June 20th, 2015 2:45PM
              </p>
            </p>
          </div>
        </div> 
      </div>
    </div>
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