var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Link = Router.Link;

var LibraryStore = require('../../stores/LibraryStore')
var LibAddLesson = require('./LibAddLesson.jsx')
var LibLessonEntry = require('./LibLessonEntry.jsx');
var AuthStore = require('../../stores/AuthStore')
var Actions = require('../../actions');

var _ = require('lodash');
var Moment = require('moment');

var LibLessonCollection = React.createClass({

  mixins: [Reflux.connect(AuthStore, 'auth')],

  render:function(){
    var owner = this.props.owner;

    var lessons = this.props.lessons.map(function(lesson, index){
      return <LibLessonEntry key={index} lesson={lesson} owner={owner}/>
    });
    
    return (
      <ul className="list-group row" id="ulCollection">
        {lessons.length ? {lessons} : <h4 className="emptyLibrary"> No lessons found! </h4>}
      </ul>
    );
  }
});

{/* FOR FUTURE ANIMATION STYLING           <img src='../../public/assets/lock.png' />*/}

module.exports = LibLessonCollection;
