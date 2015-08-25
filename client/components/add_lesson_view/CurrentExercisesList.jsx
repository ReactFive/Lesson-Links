var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');

var CurrentExercisesList = React.createClass({

  exerciseEntries: function() {
    var self = this;
    console.log("in exercise entries ", self.props.exerciseObjects);
    return this.props.exerciseObjects.map(function(exerciseInfo) {
      var exerciseObj = exerciseInfo;
      var reloadMe = function() {
        this.props.reloadExercise(exerciseObj);
      }.bind(self);

      var minutes = Math.floor(exerciseObj.time / 60).toString();
      if(minutes.length < 2) minutes = '0' + minutes;
      var seconds = (Math.floor(exerciseObj.time) % 60).toString();
      if(seconds.length < 2) seconds = '0' + seconds;
      var timeDisplay = minutes + ':' + seconds;

      return (
          <div className="col-md-12">
            <div className="col-md-9" key={exerciseObj.key} onClick={reloadMe}> {timeDisplay} {exerciseObj.type}</div>
            <span onClick={self.deleteExercise.bind(null, exerciseObj._id)} className="glyphicon glyphicon-remove col-md-3"></span>
          </div>
      )
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
  },

  deleteExercise(exercise_id){

    swal({   title: "Are you sure?",
          text: "You will not be able to recover this exercise",
          type: "warning",   showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, delete it!",
          closeOnConfirm: false },
        function(){
          Actions.deleteExercise(exercise_id);
          swal("Deleted!", "That exercise is deleted.", "success"); });
  }

});

module.exports = CurrentExercisesList;