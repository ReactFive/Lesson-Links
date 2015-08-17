var React = require('react');
var Reflux = require('reflux');
var LibraryStore = require('../../stores/LibraryStore')
var LibAddLesson = require('./LibAddLesson.jsx')
var AuthStore = require('../../stores/AuthStore')
var Actions = require('../../actions');
var Router = require('react-router')
var Link = Router.Link;
var _ = require('lodash')

var LibLessonEntry = React.createClass({

  render:function(){
    var owner = this.props.owner;
    var lessonList = this.props.lessons;
    var lessons = this.props.lessons.map(function(lesson, index){
    var handleClick = function(index, event){
      Actions.togglePublish(lessonList[index]);
      lessonList[index].publish = !lessonList[index].publish;
    };
    var handleClickDel = function(index, event){
      console.log('inside click handler')
      Actions.deleteLesson(lessonList[index])
    }
    
    var boundClick = handleClick.bind(this, index);
    var boundClickDel = handleClickDel.bind(this, index);

    var commentCount = _.reduce(
      lesson.comments, function(total, comment){
        console.log(total)
        return total + comment.replies.length + 1
      }, 0)


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
              Comments: {commentCount}    Exercises: {lesson.exercises.length}
              <p>
                Published: {lesson.created_at}
              </p>
              <a onClick={boundClickDel}>Remove< /a>
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