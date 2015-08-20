var React = require('react');
var Reflux = require('reflux');

var CurrentExercisesList = React.createClass({
  exerciseEntries: function() {
    var self = this;

    return this.props.exercises.map(function(exerciseInfo) {
      var exercise = exerciseInfo.exercise;
      var reloadMe = function() {
        this.props.reloadExercise(exerciseInfo);
      }.bind(self);
      return <p key={exerciseInfo.key} onClick={reloadMe}> {exercise.type} {exercise.time}</p>
    })
  },

  render: function() {
    return (
    <div className="row col-md-5">
      <button className="col-xs-2 col-xs-offset-5 btn-block btn-primary">Publish your lesson</button>
      <div id="current-exercises" className="col-xs-3 panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Current exercises</h3>
        </div>
        <div className="panel-body">
          {this.exerciseEntries()}
        </div>
      </div>
      </div>
    )
  }
})

module.exports = CurrentExercisesList;