var React = require('react');
var Reflux = require('Reflux')
var AnalyticsStore = require('../../stores/AnalyticsStore');
var Actions = require('../../actions');

//This is the parent component for the library view. The file Structure is as follows:
  //AnalyticsView
    //Graph
    //StudentOutcomes
    	//StudentOutcomeEntry

var Chart = require('./Chart.jsx');
var StudentOutcomeCollection = require('./StudentOutcomeCollection.jsx');

var AnalyticsView = React.createClass({
  mixins: [Reflux.connect(AnalyticsStore, 'analytics')],

  getInitialState: function() {
    return {
      data: [], 
      yAxis: '', 
      xAxis: '', 
      analytics : {
        exercises: {
          answerCount: [],
          studentsAnswer: []
        }
      },
      studentAnswers: []
    }  
  },

  timeWatched: function() {
    this.setState({
      data : this.state.analytics.timeWatched,
      xAxis : '% Completed'
    })
  },
  
  setExercise: function(exercise, studentAnswers) {
    this.setState({
      data: exercise,
      studentAnswers: studentAnswers,
      xAxis: 'Answers'
    });
  },

  render: function() {
    var self = this;
    var data = this.state.data;
    var exercises = this.state.analytics.exercises.answerCount.map(function(exercise, index){
      return <li className="analyticsNavEntry" onClick={function(){self.setExercise(exercise, 
      self.state.analytics.exercises.studentsAnswer[index])}}>Exercise #{index+1}</li>
    })

    return (
    <div>
      <div className="analyticsEntryCollection selection">
        <ul>
          <li className="analyticsNavEntry" onClick={this.timeWatched}>Time Watched</li>
            {exercises.length ? {exercises} : ''}
          </ul>
      </div>
      <hr/>
      <div id="analytics-view">
      	<div className="container">
      		<div className="row">
      				<div className="col-lg-6 col-md-12" id="analytics-view">
      					<Chart className="chart" data={data} yAxis='Number of Students' xAxis={this.state.xAxis}/>
       	 			</div>
		      <div className="col-lg-6 col-md-12">
		      	<StudentOutcomeCollection studentAnswers={this.state.studentAnswers} />
		      </div>
		    </div>	
	    </div>
    </div>
    </div>
    )
  }
});

module.exports = AnalyticsView