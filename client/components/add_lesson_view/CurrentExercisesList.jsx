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
      return <div key={exerciseInfo.key} onClick={reloadMe}> {exercise.type} {exercise.time}<span className="glyphicon glyphicon-remove pull-right"></span></div>
    })
  },

  render: function() {
    return (
        <li className="list-group-item col-md-4">
          <div id="current-exercises" className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Current exercises</h3>
            </div>
            <div className="panel-body exercise-list-body exercise-list-body-wide">
              {this.exerciseEntries()}
            </div>
            <div className="panel-footer">
              <button onClick={this.props.onPublish} className="btn-block btn-default">Publish your lesson</button>
            </div>
          </div>
        </li>
    )
  }
})

module.exports = CurrentExercisesList;