var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');

var AnalyticsStore = require('../../stores/AnalyticsStore')
var StudentOutcomeEntry = require('./StudentOutcomeEntry.jsx');
var Actions = require('../../actions');

var _ = require('lodash');

var StudentOutcomeCollection = React.createClass({

  render:function(){
    var studentAnswers = this.props.studentAnswers.map(function(studentAnswer, index){
      return <StudentOutcomeEntry key={index} studentAnswer={studentAnswer}/>
    });
    
    return (
      <ul className="list-group row" id="ulCollection">
        {studentAnswers.length ? {studentAnswers} : ''}
      </ul>
    );
  }
})

module.exports = StudentOutcomeCollection;
