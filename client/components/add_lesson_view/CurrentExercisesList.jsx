var React = require('react');
var Reflux = require('reflux');

var CurrentExercisesList = React.createClass({
  exerciseEntries: function() {
    return this.props.exercises.map(function(exercise) {
      return <p>{exercise.type} {exercise.time}</p>
    })
  },

  render: function() {
    return (
      <div id="current-exercises" className="col-xs-3 panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Current exercises</h3>
        </div>
        <div className="panel-body">
          {this.exerciseEntries()}
        </div>
      </div>
    )
  }
})

module.exports = CurrentExercisesList;