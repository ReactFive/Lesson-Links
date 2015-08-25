var React = require('react');
var Reflux = require('Reflux')
var AnalyticsStore = require('../../stores/AnalyticsStore');
var Actions = require('../../actions');

var Chart = React.createClass({
    render: function() {
        return (
             <svg width={this.props.width} 
                 height={this.props.height} >
              {this.props.children}
            </svg> 
        );
    }
});

var App = React.createClass({
  getDefaultProps: function() {
    return {
      width: 500,
      height: 500
    }
  },

  getInitialState: function() {
    return {
      data: null
    }
  },

  changeData: function() {
    this.setState({data : null})
  },

  render: function() {
    return (
      <div>
        <hr/>
        <Chart width={this.props.width} 
          height={this.props.height}>
          <Bar data={this.state.data} 
            width={this.props.width} 
            height={this.props.height} />
        </Chart>
      </div>
    );
  }
});
