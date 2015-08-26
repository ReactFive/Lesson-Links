var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Link = Router.Link;

var AnalyticsStore = require('../../stores/AnalyticsStore')
var StudentOutcomeEntry = require('./StudentOutcomeEntry.jsx');
var AuthStore = require('../../stores/AuthStore')
var Actions = require('../../actions');

var _ = require('lodash');
var Moment = require('moment');

var StudentOutcomeCollection = React.createClass({

  mixins: [Reflux.connect(AuthStore, 'auth')],

  render:function(){
    return <div>test</div>
    /*var owner = this.props.owner;

    var lessons = this.props.lessons.map(function(lesson, index){
      return <LibLessonEntry key={index} lesson={lesson}/>
    });
    
    return (
      <ul className="list-group row" id="ulCollection">
        {lessons.length ? {lessons} : <h4 className="emptyLibrary"> No lessons found! </h4>}
      </ul>
    );*/
  }
})

module.exports = StudentOutcomeCollection;
