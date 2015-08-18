var React = require('react');
var Reflux = require('reflux');
var LibraryStore = require('../../stores/LibraryStore')
var LibAddLesson = require('./LibAddLesson.jsx')
var LibLessonEntry = require('./LibLessonEntry.jsx');
var AuthStore = require('../../stores/AuthStore')
var Actions = require('../../actions');
var Router = require('react-router')
var Link = Router.Link;
var _ = require('lodash')
var Moment = require('moment')

var LibLessonCollection = React.createClass({
  mixins: [Reflux.connect(AuthStore, 'auth')],

  render:function(){
    var owner = this.props.owner;
    var lessonList = this.props.lessons;
    console.log("lessonList", lessonList)
    var lessons = this.props.lessons.map(function(lesson, index){
      return <LibLessonEntry lesson={lesson}/>
    });
    // var handleClickPub = function(index, event){
    //   Actions.togglePublish(lessonList[index]);
    //   lessonList[index].publish = !lessonList[index].publish;
    // };
    // var handleClickDel = function(index, event){
    //   Actions.deleteLesson(lessonList[index])
    // }
    
    // var boundClickPub = handleClickPub.bind(this, index);
    // var boundClickDel = handleClickDel.bind(this, index);
    console.log(lessons);
    return (
      <div >
        {lessons}
      </div>
    )
  }
})


{/* FOR FUTURE ANIMATION STYLING           <img src='../../public/assets/lock.png' />*/}

module.exports = LibLessonCollection;
