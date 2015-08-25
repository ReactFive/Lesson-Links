var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');
var Router = require('react-router')
var Link = Router.Link;
var Navigation = Router.Navigation;
var truncate = require('truncate');

var _ = require('lodash');
var Moment = require('moment');

var LibLessonEntry = React.createClass({
  mixins: [Navigation],


  publish: function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("publish clicked!");
    Actions.togglePublish(this.props.lesson);
  },

  deleteLesson: function(e) {
    var self = this;
    e.preventDefault();
    e.stopPropagation();
    swal({
      title: "Are you sure?",
      text: "Clicking 'Delete' will remove this lesson from your Library!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: false
    },
    function(isConfirm){   
      if (isConfirm) {
        swal("Deleted!", "This lesson has been removed from your library!", "success");
        Actions.deleteLesson(self.props.lesson);  
      } 
    }); 
  },

  getLink: function(e){
    var self = this;
    e.preventDefault();
    e.stopPropagation();
    console.log("I ran")
    swal("Your Lesson Link is...", "www.lesson-links.com/" + this.props.lesson.lesson_url, "info")
  },

  gotoAnalytics: function(e){
    var self = this;
    e.preventDefault();
    e.stopPropagation();
    console.log("I ran")
    swal("Analytics Currently Unavailable!", "Analytics for '" + this.props.lesson.title + "' are currently unavailable. Please check back soon!", "error")
  },

  gotoConfigure: function () {
    Actions.sendLesson(this.props.lesson);
    this.transitionTo('/configure');
  },

  gotoLesson: function() {
    this.transitionTo('/' + this.props.lesson.lesson_url);
  },

  render: function() {
    var lesson = this.props.lesson;

    var commentCount = _.reduce(
      lesson.comments, function(total, comment){
        return total + comment.replies.length + 1
      }, 0);

    var createdDate;
    if(lesson.published_at) {
      createdDate = Moment(lesson.created_at).format('MMMM Do YYYY, h:mm a')
    } else {
      createdDate = 'Not published'
    }

    var video_id = lesson.video_url.split('v=')[1];
    var ampersandPosition = video_id.indexOf('&');
    if(ampersandPosition != -1) {
      video_id = video_id.substring(0, ampersandPosition);
    }
    
    var publishDisplay = lesson.publish ?
        <li> Published on: {createdDate} </li>
      : <li>Not Published</li>;

    var imgUrl = 'http://img.youtube.com/vi/' + video_id + '/mqdefault.jpg'

    return (
      <li className="list-group-item col-md-6 col-xs-12 lib-lesson-entry animated fadeIn" onClick={lesson.publish ? this.gotoLesson : this.gotoConfigure}>
          <img className="hidden-xs media pull-left videoSnippet" src={imgUrl} />
          <ul className="lib-lesson-info list-unstyled">
            <li className="lib-less-title">
              <li className ="titleAnchor">
               {truncate(lesson.title, 20) || 'title not found'}
              </li>
            </li>
            <li className="lib-less-author">
              Author: {truncate(lesson.teacher.name, 20) || 'anonymous'}
            </li>
            <li className="lib-lesson-stats">
              Comments: {commentCount}    Exercises: {lesson.exercises.length}
            </li>
            <li className="pubdate">
              {publishDisplay}
            </li>
          </ul>
          <span className="fa fa-link pull-right" id="link" onClick={this.getLink}></span>
          <span className="fa fa-trash-o pull-right" id="trashcan" onClick={this.deleteLesson}></span>
          <span className="fa fa-bar-chart pull-right" id="chart" onClick={this.gotoAnalytics}></span>
      </li>
    );
  }

})

module.exports = LibLessonEntry;


