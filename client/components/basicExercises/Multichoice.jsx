var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;
var Route = Router.Route;

var Multichoice = React.createClass({

  getInitialState: function(){
    var loadedExercise = this.props.exercise || {};
    var ex = loadedExercise.exercise || {};
    console.log(loadedExercise);

    return {
      question: ex.question || "No question provided",
      answers: ex.answers || [],
      feedback: ex.feedback || [],
      correctOption: +ex.correctOption || 0,
    };
  },

  handleClick: function(clickedOpt){
    console.log(clickedOpt);
    if(this.state.correctOption === clickedOpt) {
      console.log("correct");
      this.setState({
        outcome: true,
        currentFeedback: this.state.feedback[clickedOpt]
      });
    } else{
      console.log("false");
      this.setState({
        outcome: false,
        currentFeedback: this.state.feedback[clickedOpt]
      });
    }
  },
  
  retry: function() {
    this.setState({outcome : null})
  },

  render: function() {
    var view;
    var i = this.state.item;
    var number = this.state.counter;
    var question = this.state.question;
    var outcome = this.state.outcome;
    var opts = this.state.answers.map(function (answer, index) {
      number++;
      var classString = "element-animation";
      classString += number;
      classString += " btn btn-lg btn-primary btn-block";
      var refString = "opts";
      refString += index;
      var handle = this.handleClick;
      return (
          <label className={classString} onClick={handle.bind(null,index)}>
            <span className="btn-label">
              <i className="glyphicon glyphicon-chevron-right"></i>
            </span>
            <input type="radio" name="q_answer" ref={refString}
                   value={index}/>{answer}
          </label>
      )
    }.bind(this));
    console.log(outcome);
    switch (outcome) {
      case false:
        view = (
            <div className="container-fluid">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3><span className="label label-warning text-center" id="qid"></span>Incorrect</h3>
                  </div>
                  {/*end header*/}
                  <div className="modal-body">
                    <div className="col-xs-10 col-xs-offset-2">
                      <blockquote>
                        <p>{ this.state.currentFeedback }</p>
                      </blockquote>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-success" onClick={this.props.onComplete}>Continue Video</button>
                    <button className="btn btn-primary try-again-btn" onClick={this.retry}>Try Again</button>
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
            <div className="container-fluid bg-info">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3><span className="label label-success text-center" id="qid"></span>Correct!</h3>
                  </div>
                  <div className="modal-body">
                    <div className="col-xs-10 col-xs-offset-2">
                      <blockquote>
                        { this.state.currentFeedback }
                      </blockquote>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-success" onClick={this.props.onComplete}>Continue Video</button>
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
            <div className="container-fluid">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4><span className="label label-default" id="qid"><i className="fa fa-question-circle fa-lg"></i></span>{question}</h4>
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
                      {opts}
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

module.exports = Multichoice;