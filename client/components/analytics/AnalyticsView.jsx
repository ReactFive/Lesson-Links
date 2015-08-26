var React = require('react');
var Reflux = require('Reflux')
var AnalyticsStore = require('../../stores/AnalyticsStore');
var Actions = require('../../actions');

var Chart = require('./Chart.jsx');

var AnalyticsView = React.createClass({
  mixins: [Reflux.connect(AnalyticsStore, 'analytics')],

  getInitialState: function() {
    return {data: []}  
  },

  showAll: function() {
    this.setState({data : this.state.analytics.timeWatched})
  },
  
  filter: function() {
    this.setState({data: filtered});
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
         <Chart data={data} />
      </div>
    </div>
    );
  } else {
    return null
  }
  }
});

module.exports = AnalyticsView