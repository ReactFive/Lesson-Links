var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');

var _ = require('lodash');

var StudentOutcomeEntry = React.createClass({

  render: function() {
      return <div className="row studEntry">
      	<div className="col-lg-4 student boldStudent"> 
      		{this.props.studentAnswer.name} 
      	</div>
      	<div className="col-lg-8 answer"> 
      		<span className="boldStudent">{this.props.studentParam} : </span>
      		<span>{this.props.studentAnswer.answer} </span>
      	</div>
      	<hr/>
      </div>
  }

})

module.exports = StudentOutcomeEntry;