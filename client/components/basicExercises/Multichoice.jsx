var React = require('react');

var MultiChoice = React.createClass({
 getInitialState: function(){
  return {
   title: "Exercise 1",
   question: "What is 4 + 7?",
   answers: [],
   correct: "B"
  }
 },


  render: function(){
   return ( <div className="container-fluid bg-info">
      <div className="modal-dialog">
       <div className="modal-content">
         <div className="modal-header">
          <h3><span className="label label-warning" id="qid">2</span>{this.state.title}</h3>
         </div>
         <div className="modal-body">
          <div className="col-xs-3 col-xs-offset-5">
           <div id="loadbar" style="display: none;">
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
           <label className="element-animation1 btn btn-lg btn-primary btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span>
             <input type="radio" name="q_answer" value="1">1 One</label>
            <label className="element-animation2 btn btn-lg btn-primary btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span>
              <input type="radio" name="q_answer" value="2">2 Two</label>
             <label className="element-animation3 btn btn-lg btn-primary btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span>
               <input type="radio" name="q_answer" value="3">3 Three</label>
              <label className="element-animation4 btn btn-lg btn-primary btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span>
                <input type="radio" name="q_answer" value="4">4 Four</label>
              </div>
             </div>
             <div className="modal-footer text-muted">
              <span id="answer"></span>
             </div>
            </div>
           </div>
          </div>
        )
  }

 
})
