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
    return {data: []}  
  },

  showAll: function() {
    this.setState({data : this.state.analytics.timeWatched})
  },
  
  filter: function() {
    this.setState({data: this.state.analytics.exercises[0]});
  },

  render: function() {
    var data = this.state.data;

    if (data) {
    return (
    <div>
      <div className="selection">
            <ul>
              <li onClick={this.showAll}>All</li>
              <li onClick={this.filter}>Filter</li>
            </ul>
          </div>
          <hr/>
      <div id="analytics-view">
      	<div className="container">
      		<div className="row">
      				<div className="col-lg-6 col-md-12" id="analytics-view">
         				<Chart data={data} />
     	 			</div>
			      <div className="col-lg-6 col-md-12">
			      	<StudentOutcomeCollection />
			      </div>
			    </div>	
		    </div>
      </div>
    </div>
    );
  } else {
    return null
  }
  }
});

module.exports = AnalyticsView