var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;
var Route = Router.Route;

var TrueFalse = React.createClass({

  getInitialState: function() {
    var loadedExercise = this.props.exercise || {};
    return {
      exercise: {
        question: loadedExercise.question || "No question provided",
        correctOption: loadedExercise.correctOption || "No correct answer chosen",
        feedbackTrue: loadedExercise.feedbackTrue || "No feedback provided",
        feedbackFalse: loadedExercise.feedbackFalse || "No feedback provided"
      },
      outcome: null
    };
  },

  handleClick: function(clickedOpt){
    if(clickedOpt === this.state.exercise.correctOption) {
      this.setState({outcome: true});
    } else{
      this.setState({outcome: false});
    }
  },

  onComplete: function() {
    var result = {
      correct : this.state.outcome,
      answer : this.state.outcome ? this.state.exercise.correctOption : !this.state.exercise.correctOption
    }

    this.props.onComplete(result);
  },

  render: function() {
    var view;

    switch (this.state.outcome) {
      case false:
        view = (
            <div className="container-fluid animated fadeIn">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3><span className="label label-warning text-center" id="qid"><i className="fa fa-thumbs-down fa-lg"></i></span>Incorrect</h3>
                  </div>
                  {/*end header*/}
                  <div className="modal-body">
                    <div className="col-xs-10 col-xs-offset-2">
                      <blockquote>
                        <p>{ this.state.exercise.feedbackFalse ? this.state.exercise.feedbackTrue : null }</p>
                      </blockquote>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-success" onClick={this.onComplete}>Continue Video</button>
                  </div>
                </div>
                {/*end modal-content*/}
              </div>
              {/*end modal-dialog*/}
            </div>
        );
        break;
      case true:
        view = (
            <div className="container-fluid animated fadeIn">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3><span className="label label-success text-center" id="qid"><i className="fa fa-thumbs-up fa-lg"></i></span>Correct!</h3>
                  </div>
                  <div className="modal-body">
                    <div className="col-xs-10 col-xs-offset-2">
                      <blockquote>
                        <p>{ this.state.exercise.feedbackTrue ? this.state.exercise.feedbackFalse : null }</p>
                      </blockquote>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-success" onClick={this.onComplete}>Continue Video</button>
                  </div>
                </div>
                {/*end modal-content*/}
              </div>
              {/*end modal-dialog*/}
            </div>
        );
        break;
      default:
        view = (
            <div className="container-fluid animated fadeIn">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4><span className="label label-default" id="qid"><i className="fa fa-question-circle fa-lg"></i></span>{this.state.exercise.question}</h4>
                  </div>
                  {/*end header*/}
                  <div className="modal-body">
                    <div className="col-xs-3 col-xs-offset-5">
                      <div id="loadbar">
                        <div className="blockG" id="rotateG_01"></div>
                        <div className="blockG" id="rotateG_02"></div>
                        <div className="blockG" id="rotateG_03"></div>
                        <div className="blockG" id="rotateG_04"></div>
                        <div className="blockG" id="rotateG_05"></div>
                        <div className="blockG" id="rotateG_06"></div>
                        <div className="blockG" id="rotateG_07"></div>
                        <div className="blockG" id="rotateG_08"></div>
                      </div>
                    </div>

                    <div className="quiz" id="quiz" data-toggle="buttons">
                      <label onClick={this.handleClick.bind(null, "true")} className="element-animation1 btn btn-lg btn-primary btn-block">
                        <span className="btn-label"><i className="glyphicon glyphicon-chevron-right"></i></span>
                        <input type="radio" name="q_answer" ref="true" value="true"/>TRUE</label>

                      <label onClick={this.handleClick.bind(null, "false")}className="element-animation1 btn btn-lg btn-primary btn-block">
                        <span className="btn-label"><i className="glyphicon glyphicon-chevron-right"></i></span>
                        <input type="radio" name="q_answer" ref="false" value="false"/>FALSE</label>
                    </div>
                  </div>{/*end modal-body*/}
                  <div className="modal-footer text-muted">
                    <span id="answer"></span>
                  </div>{/*end footer*/}
                </div>{/*end modal-content*/}
              </div>{/*end modal-dialog*/}
            </div>
        );

    }
    return (
        <div>{view}</div>
    );
  }
});

module.exports = TrueFalse;