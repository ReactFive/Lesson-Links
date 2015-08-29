var React = require('react');
var Reflux = require('Reflux')
var AnalyticsStore = require('../../stores/AnalyticsStore');
var Actions = require('../../actions');
var d3 = require('d3');
var ReactD3 = require('react-d3-components')
var _ = require('lodash')

var App = React.createClass({
  mixins: [Reflux.connect(AnalyticsStore, 'analytics')],
  
  getInitialState: function() {
    return {
      width: 400,
      height: 400
    }
  },
  
  render: function() {
    if (this.props.data.length > 0) {
      var colorScale = d3.scale.category20();
      var BarChart = ReactD3.BarChart;
      var values = this.props.data;
      //Remove decimal place after values
      var formatyAxis = d3.format('.0f');

      var yMax = _.reduce(values, function(max, value){
        return Math.max(max, value.y)
      }, 0)
      var yMin = _.reduce(values, function(min, value){
        return Math.min(min, value.y)
      }, 0)

      var tickSize = yMax < 10 ? 1 : Math.floor(Math.sqrt(yMax))

      var data = [{
        values : values,
        label : 'data'
      }]
      
      return  <BarChart
        data={data}
        width={this.state.width}
        height={this.state.height}
        colorScale={colorScale}
        margin={{top: 10, bottom: 50, left: 50, right: 10}}
        xAxis={{innerTickSize: 10, label: this.props.xAxis}}
        yAxis={{tickFormat: formatyAxis, tickValues: d3.range(0,yMax+1, tickSize), innerTickSize: 10, label: this.props.yAxis}} clasName="chart"/>
    } else {
      return null
    }
  }
})
  
module.exports = App;
