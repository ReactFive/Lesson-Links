var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Link = Router.Link;

var ShortAnswer = React.createClass({

  getInitialState: function(){
    var ex = this.props.exercise || {};

    return {
      exercise: {
        question: ex.question || "no question was provided" ,
        bestAnswers: ex.bestAnswers || "",
        bestFeedback: ex.bestFeedback || "no feedback provided",
        altAnswers: ex.altAnswers || null,
        altFeedback: ex.altFeedback || null,
        wrongFeedback: ex.altFeedback || "no feedback provided"
      },
      answer: "",
      outcome: 0
    };
  },

  setAnswerState: function(event){
    console.log(event.target.value);
    this.setState({answer: event.target.value});
  },

  submitAnswer: function(event){
    event.preventDefault();

    var bestCheck = new RegExp(this.state.exercise.bestAnswers);
    var altCheck = new RegExp(this.state.exercise.altAnswers);

    if(bestCheck.test(this.state.answer)){
      this.setState({outcome: 2});
    }
    else if (altCheck.test(this.state.answer)){
      this.setState({outcome: 1});
    } else {
      this.setState({outcome: -1});
    }
  },

  retry: function() {
    this.setState({outcome : 0});
  },

  onComplete: function() {
    var result = {
      answer : this.state.answer,
      correct : this.state.outcome >= 1
    }

    this.props.onComplete(result);
  },

  render: function() {
    var view;
    var title = this.state.title;

    switch (this.state.outcome) {
      case -1:
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
                        <p>{ this.state.exercise.wrongFeedback ? this.state.exercise.wrongFeedback : null }</p>
                      </blockquote>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-primary" onClick={this.retry}>Try Again</button>
                    <button className="btn btn-success try-again-btn" onClick={this.onComplete}>Continue Video</button>
                  </div>
                </div>
                {/*end modal-content*/}
              </div>
              {/*end modal-dialog*/}
            </div>
        );
        break;
      case 2:
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
                        { this.state.exercise.bestFeedback ? this.state.exercise.bestFeedback : null }
                      </blockquote>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-success try-again-btn" onClick={this.onComplete}>Continue Video</button>
                  </div>
                </div>
                {/*end modal-content*/}
              </div>
              {/*end modal-dialog*/}
            </div>
        );
        break;
      case 1:
        view = (
            <div className="container-fluid animated fadeIn">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3><span className="label label-warning text-center" id="qid"><i className="fa fa-thumbs-up fa-lg"></i></span>Partially Correct</h3>
                  </div>
                  <div className="modal-body">
                    <div className="col-xs-10 col-xs-offset-2">
                      <blockquote>
                        { this.state.exercise.altFeedback ? this.state.exercise.altFeedback : null }
                      </blockquote>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-primary" onClick={this.retry}>Try Again</button>
                    <button className="btn btn-success try-again-btn" onClick={this.onComplete}>Continue Video</button>
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
                    <form>
                      <div className="form-group">
                        <label htmlFor="answer"><strong>Answer</strong></label>
                        <input id="answer"
                               className="form-control"
                               name="answer"
                               type="text"
                               ref="answer"
                               value={this.state.answer}
                               onChange={this.setAnswerState}
                               placeholder="Your answer here"/>
                      </div>
                      <button onClick={this.submitAnswer} type="submit" className="btn btn-primary pull-right">Submit</button>
                    </form>

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

module.exports = ShortAnswer;