var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Link = Router.Link;

var ShortAnswer = React.createClass({

  getInitialState: function(){
    return {
      exercise: {
        question: "What do the stars represent on the US flag?",
        bestAnswers: "(states|50states|fiftystates)",
        bestFeedback: "Well done",
        altAnswers: "(nations|municipalities)",
        altFeedback: "Uuuh, your close but the wrong scale",
        wrongFeedback: "oh man, are you kidding?"
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
    this.setState({answer: event.target.value.trim()});

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

  render: function() {
    var view;
    var prompt = this.state.statement;
    var title = this.state.title;

    switch (this.state.outcome) {
      case -1:
        view = (
            <div className="container-fluid">
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
                    <Link activeClassName="active" to="/exerciseSA"><button className="btn btn-primary">Try Again</button></Link>
                    <Link activeClassName="active" to="/"><button className="btn btn-success try-again-btn">Continue Video</button></Link>
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
            <div className="container-fluid">
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
                    <Link activeClassName="active" to="/"><button className="btn btn-success">Continue Video</button></Link>
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
            <div className="container-fluid">
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
                    <Link activeClassName="active" to="/exerciseSA"><button className="btn btn-primary">Try Again</button></Link>
                    <Link activeClassName="active" to="/"><button className="btn btn-success try-again-btn">Continue Video</button></Link>
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