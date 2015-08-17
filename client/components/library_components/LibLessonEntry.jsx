var React = require('react');
var Reflux = require('reflux');
var LibraryStore = require('../../stores/LibraryStore')
var LibAddLesson = require('./LibAddLesson.jsx')
var AuthStore = require('../../stores/AuthStore')
var Actions = require('../../actions');
var Router = require('react-router')
var Link = Router.Link;
var _ = require('lodash')
var Moment = require('moment')

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
      Actions.deleteLesson(lessonList[index])
    }
    
    var boundClick = handleClick.bind(this, index);
    var boundClickDel = handleClickDel.bind(this, index);

    var commentCount = _.reduce(
      lesson.comments, function(total, comment){
        return total + comment.replies.length + 1
      }, 0)
    
    var createdDate = Moment(lesson.created_at).format('MMMM Do YYYY, h:mm a')

    return <div className="row">
      <div className="col12">
        <div className="lib-lesson-entry" id="pulse" key={index}>
          <img className="media pull-left videoSnippet" src="../../public/assets/video_sample.png"></img>
          <ul className="lib-lesson-info list-unstyled">
            <li className="lib-less-title">
              <a className ="titleAnchor" href={lesson.lesson_url || '/'}>
                {lesson.title || 'title not found'}
              </a>
            </li>
            <li className="lib-less-author">
              Author: {lesson.teacher.name || 'anonymous'}
            </li>
            <li className="lib-lesson-stats">
              Comments: {commentCount}    Exercises: {lesson.exercises.length}
            </li> 
            <li>
              Created on: {createdDate}
            </li>
          </ul>
          <i class="fa fa-trash-o"></i>
          <i class="fa fa-unlock-alt"></i>
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