var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');

var ShortAnswer = React.createClass({

  getInitialState: function(){
    return {
      exercise: {
        question: "What do the stars represent on the US flag?",
        bestAnswers: "/(states|50states|fiftystates)/",
        bestFeedback: "Well done",
        altAnswers: "/(nations|municipalities)/",
        altFeedback: "Uuuh, your close but the wrong scale"
      },
      answer: "",
      feedback: ""
    };
  },

  setAnswerState: function(event){
    console.log(event.target.value);
    this.setState({answer: event.target.value});
  },


  render: function() {
    var view;
    var prompt = this.state.statement;
    var title = this.state.title;

    switch (this.state.outcome) {
      case false:
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
                        <p>{ this.state.negFeedback ? this.state.negFeedback : null }</p>
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
      case true:
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
                        { this.state.posFeedback ? this.state.posFeedback : null }
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
      default:
        view = (
            <div className="container-fluid">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3><span className="label label-default" id="qid"><i className="fa fa-question-circle fa-lg"></i></span>{this.state.exercise.question}</h3>
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

                      <label className="element-animation1 btn btn-lg btn-primary btn-block">
                        <span className="btn-label"><i className="glyphicon glyphicon-chevron-right"></i></span>
                        <input className="form-control" onChange={this.setAnswerState} type="text" name="q_answer" ref="input"
                               value={this.state.answer}/></label>

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

module.exports = ShortAnswer;