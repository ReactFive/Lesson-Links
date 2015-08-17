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
  mixins: [Reflux.connect(AuthStore, 'auth')],


  render:function(){
    var owner = this.props.owner;
    var lessonList = this.props.lessons;
    console.log(lessonList)
    var lessons = this.props.lessons.map(function(lesson, index){
    var handleClickPub = function(index, event){
      Actions.togglePublish(lessonList[index]);
      lessonList[index].publish = !lessonList[index].publish;
    };
    var handleClickDel = function(index, event){
      Actions.deleteLesson(lessonList[index])
    }
    
    var boundClickPub = handleClickPub.bind(this, index);
    var boundClickDel = handleClickDel.bind(this, index);

    var commentCount = _.reduce(
      lesson.comments, function(total, comment){
        return total + comment.replies.length + 1
      }, 0)
    
    var createdDate;
    if(lesson.published_at) {
      createdDate = Moment(lesson.created_at).format('MMMM Do YYYY, h:mm a')
    } else {
      createdDate = 'Not published'

    var video_id = lesson.video_url.split('v=')[1]
    var ampersandPosition = video_id.indexOf('&');
    if(ampersandPosition != -1) {
      video_id = video_id.substring(0, ampersandPosition);
    }

    return <div className="row">
      <div className="col12">
        <div className="lib-lesson-entry" id="pulse" key={index}>
          <img className="media pull-left videoSnippet" src={'http://img.youtube.com/vi/' + video_id + '/mqdefault.jpg'} />
          <ul className="lib-lesson-info list-unstyled">
            <li className="lib-less-title">
              <a className ="titleAnchor" href= {lesson.publish ? 
                lesson.lesson_url : (Actions.sendLesson(lesson),
                  '/configure')}>
                {lesson.title || 'title not found'}
              </a>
            </li>
            <li className="lib-less-author">
              Author: {lesson.teacher.name || 'anonymous'}
            </li>
            <li className="lib-lesson-stats">
              Comments: {commentCount}    Exercises: {lesson.exercises.length}
            </li> 
            {!!lesson.publish ? 
             <li>
              Published on: {createdDate}
            </li> :
            <a onClick={boundClickPub}>
              Publish
            < /a>}
          </ul>
         <span className="fa fa-trash-o pull-right" onClick={boundClickDel}></span>
        </div> 
      </div>
    </div>
    }})
     return (
        <span >
          {lessons}
        </span>
    )
  }
})


{/* FOR FUTURE ANIMATION STYLING           <img src='../../public/assets/lock.png' />*/}

module.exports = LibLessonEntry;