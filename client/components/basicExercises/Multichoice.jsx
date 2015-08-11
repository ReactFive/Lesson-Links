var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;
var Route = Router.Route;

var Multichoice = React.createClass({

  getInitialState: function(){
    return {
     name: "Exercise 1",
     question: "What is 4 + 7?",
     options: ["11", "7", "32", "43"],
     posFeedback: "This was a fairly easy item, right?",
     negFeedback: "Oops, that should have been easy!?",
     time: 3,
     correct: 1,
     counter: 0,
     outcome: null
    };
  },

  handleClick: function(clickedOpt){
    console.log(clickedOpt);
      if(this.state.correct === clickedOpt) {
        console.log("correct");
        this.setState({outcome: true});
      } else{
        console.log("false");
        this.setState({outcome: false});
     }
  },
  

  render: function() {
    var view;
    var i = this.state.item;
    var number = this.state.counter;
    var question = this.state.question;
    var title = this.state.name;
    var outcome = this.state.outcome;
    var opts = this.state.options.map(function (option, index) {
      number++;
      var classString = "element-animation";
      classString += number;
      classString += " btn btn-lg btn-primary btn-block";
      var refString = "opts";
      refString += index;
      var handle = this.handleClick;
      return (
          <label className={classString}>
            <span className="btn-label"><i className="glyphicon glyphicon-chevron-right"></i></span>
            <input onClick={handle.bind(null,index)} type="radio" name="q_answer" ref={refString}
                   value={index}/>{option}</label>
      )
    }.bind(this));
    console.log(outcome);
    switch (outcome) {
      case false:
        view = (
            <div className="container-fluid bg-info">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3><span className="label label-warning text-center" id="qid"></span>Incorrect</h3>
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
                    <Link activeClassName="active" to="/exercise"><button className="btn btn-primary try-again-btn">Try Again</button></Link>
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
            <div className="container-fluid bg-info">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3><span className="label label-warning" id="qid">{i}</span>{question}</h3>
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