var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;
var AuthStore = require('../../stores/AuthStore');
var Actions = require('../../actions');
var Select = require('react-select');

var MultiChoiceCreation = React.createClass({
  mixins: [Reflux.listenTo(AuthStore, "onChange")],

  getInitialState: function(){
    return {
      optionsArray: [],
      correctChecks: [],
      user: null,
      options: [
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
        { value: '3', label: 'Three' },
        { value: '4', label: 'Four' },
        { value: '5', label: 'Five' }
      ]
    }
  },

  componentWillMount: function(){
    this.setState({user: AuthStore.user});
  },

  formSetup: function(event){
    console.log(event);
    var inputs = [];
    var checks = [];
    for (var i = 0; i < event; i++){
      var ID = "opt" + i;
      var nameText = "opt" + i;
      inputs.push(
          <div key={i} className="form-group">
            <label id={ID}>Option: {i+1}</label>
        <input className="form-control" name="option" type='text' placeholder="Add an option here"/>
      </div>)
    }

    for (var i = 0; i < event; i++){
     var IdText = "radio" + 1;
     checks.push(
         <label key={i} className="radio-inline">
           <input type="radio"name="inlineRadioOptions"/>
           Item {i+1}
         </label>
     )
     }
    this.setState({optionsArray: inputs, correctChecks: checks})
  },

  render: function(){
    //var time = videojs("#attachmentVideo").currentTime || 0

    return (
        <div className="container multichoice-container">
          <div className="col-md-6 col-md-offset-3">

            <h3>Create a multiple choice question</h3>

            <Select
              name="Number of items"
              value="Select the number of alternative answers"
              options={this.state.options}
              onChange={this.formSetup}
              />

            <form name="multichoiceForm" onSubmit={this.handleSubmit}>
            <h5>Write your question/prompt/problem</h5>
              <div className="form-group">
                <input ref="question" className="form-control" name="name" type='text' placeholder="Question"/>
              </div>

              {this.state.optionsArray}

               <div className="correct-answer-label">
                 {!!this.state.optionsArray.length && <span className="correct-answer-label"><strong>Indicate the correct option: </strong></span>}{this.state.correctChecks}
                </div>

              <button className="signup-cancel-btn btn btn-primary pull-right">Add to your lesson</button>
              <Link activeClassName="active" to="/"><button className=" btn btn-default pull-right">Cancel</button></Link>
            </form>
          </div>
        </div>
    )
  },
  onChange: function(event, user){
    this.setState({user: user})
  }
});

module.exports = MultiChoiceCreation;