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
      studentParam: '',
      studentAnswers: []
    }  
  },

  timeWatched: function() {
    this.setState({
      data : this.state.analytics.timeWatched,
      studentAnswers: this.state.analytics.studentTime,
      studentParam : 'Time Watched',
      xAxis : '% Completed'
    })
  },
  
  setExercise: function(exercise, studentAnswers) {
    this.setState({
      data: exercise,
      studentAnswers: studentAnswers,
      studentParam: 'Answer',
      xAxis: 'Answers'
    });
  },

  render: function() {
    var self = this;
    var data = this.state.data;
    var exercises = this.state.analytics.exercises.answerCount.map(function(exercise, index){
      return <li className="analyticsNavEntry" onClick={function(){self.setExercise(exercise, 
      self.state.analytics.exercises.studentsAnswer[index])}}> Exercise - {index+1} </li>
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
          <div className="analyticsHolder col-lg-10 col-lg-offset-1">

          	<div className="panel panel-default">
              <div className="panel-body">

              <div className="row" id="analytics-view">

                <div className="col-lg-6">
                  <div className="panel panel-default">
                    <div className="panel-body">
              					<Chart className="chart" data={data} yAxis='Number of Students' xAxis={this.state.xAxis}/>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
          	      <div className="panel panel-default">
                    <div className="panel-body">
          	      	  <StudentOutcomeCollection studentAnswers={this.state.studentAnswers} studentParam={this.state.studentParam} />
                    </div>
          	      </div>
                </div>

              </div>
              
              </div>
            </div>

  		    </div>	
        </div>
	    </div>

    </div>
    )
  }
});

module.exports = AnalyticsView