var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');

var CurrentExercisesList = React.createClass({

  exerciseEntries: function() {
    var self = this;
  
    return this.props.exerciseObjects.map(function(exerciseObj) {
      if (!exerciseObj._id) return null;
      var reloadMe = function(e) {
        e.stopPropagation();
        this.props.reloadExercise(exerciseObj);
      }.bind(self);

      var minutes = Math.floor(exerciseObj.time / 60).toString();
      if(minutes.length < 2) minutes = '0' + minutes;
      var seconds = (Math.floor(exerciseObj.time) % 60).toString();
      if(seconds.length < 2) seconds = '0' + seconds;
      var timeDisplay = minutes + ':' + seconds;
      console.log("Exercise obj", exerciseObj);
      return (
          <div className="exercise-entry col-md-12 animated fadeIn" onClick={reloadMe}>
            <span onClick={self.deleteExercise.bind(null, exerciseObj._id)} className="glyphicon glyphicon-remove pull-right"></span>
            <span key={exerciseObj.key}> 
              {timeDisplay} {exerciseObj.type} <br/>
              {exerciseObj.exercise.question}
            </span>
         </div>
      )
    })
  },

  render: function() {
    return (
      <div id="current-exercises" className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Current exercises</h3>
        </div>
        <div className="panel-body exercise-list-body exercise-list-body-wide">
          {this.exerciseEntries()}
        </div>
      </div>

    )
  },

  deleteExercise(exercise_id, e){
    console.log(e);
    e.stopPropagation();

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