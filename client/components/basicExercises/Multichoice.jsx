var React = require('react');

var Multichoice = React.createClass({

  getInitialState: function(){
    return {
     name: "Exercise 1",
     question: "What is 4 + 7?",
     options: ["11", "7", "32", "43"],
     correct: 2,
     item: 1,
     counter: 0
    };
  },

  handleClick: function(){

  },

  render: function() {
    var i = this.state.item;
    var number = this.state.counter;
    var question = this.state.question;
    var title = this.state.name;
    var opts = this.state.options.map(function(option, index){
      number++;
      var classString = "element-animation";
      classString+= number;
      classString+= " btn btn-lg btn-primary btn-block";
      var refString = "opts";
      refString += index;
      return (
        <label className={classString}>
          <span className="btn-label"><i className="glyphicon glyphicon-chevron-right"></i></span>
          <input key={index} type="radio" name="q_answer" ref={refString} value={index}/>{option}</label>
        )
    });
    return (
    <div className="container-fluid bg-info">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3><span className="label label-warning" id="qid">{i}</span>{question}</h3>
          </div>{/*end header*/}
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
    )
   }
});

module.exports = Multichoice;
