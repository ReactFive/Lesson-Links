var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');

var _ = require('lodash');

var StudentOutcomeEntry = React.createClass({

  render: function() {
      return <div clasName="studentCollection"> {this.props.studentAnswer.name} Answer :{this.props.studentAnswer.answer} </div>
  }

})

module.exports = StudentOutcomeEntry;