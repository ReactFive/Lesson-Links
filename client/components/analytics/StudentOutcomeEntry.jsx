var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');

var _ = require('lodash');

var StudentOutcomeEntry = React.createClass({

  render: function() {
      return <div clasName="studentCollection">Name : {this.props.studentAnswer.name} {this.props.studentParam} :{this.props.studentAnswer.answer} </div>
  }

})

module.exports = StudentOutcomeEntry;