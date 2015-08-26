var React = require('react');
var Reflux = require('Reflux')
var AnalyticsStore = require('../../stores/AnalyticsStore');
var Actions = require('../../actions');

var ElapsedTime = require('./ElapsedTime.jsx');

var AnalyticsView = React.createClass({

  render: function() {
    console.log('test')
    return (
      <div id="analytics-view">
         <ElapsedTime />
      </div>
    );
  }
});

module.exports = AnalyticsView