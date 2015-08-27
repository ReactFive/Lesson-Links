var React = require('react');
var Reflux = require('Reflux')
var AnalyticsStore = require('../../stores/AnalyticsStore');
var Actions = require('../../actions');
var d3 = require('d3');
var ReactD3 = require('react-d3-components')

var App = React.createClass({
  mixins: [Reflux.connect(AnalyticsStore, 'analytics')],
  
  getInitialState: function() {
    return {
      data: [
        {x:'20', y:1},
        {x:'40', y:2},
        {x:'60', y:3},
        {x:'80', y:4},
        {x:'100', y:5}
      ],
      width: 500,
      height: 500
    }
  },
  
  render: function() {
    if (this.props.data.length > 0) {
      var colorScale = d3.scale.category20();
      var BarChart = ReactD3.BarChart;
      var values = this.props.data;
      var data = [{
        values : values,
        label : '#ff7f0e'
      }]

      
      return  <BarChart
        data={data}
        width={this.state.width}
        height={this.state.height}
        colorScale={colorScale}
        margin={{top: 10, bottom: 50, left: 50, right: 10}}
        xAxis={{innerTickSize: 10, label: this.props.xAxis}}
        yAxis={{innerTickSize: 10, label: this.props.yAxis}}/>

    } else {
      return null
    }
  }
})
  
module.exports = App;
