var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;
var Route = Router.Route;

var MultiChoiceCreation = React.createClass({
  mixins: [Reflux.listenTo(AuthStore, "onChange")],

  getInitialState: function(){
    return {
      choiceNumber: 4,
      optionsArray: []
    }
  },

  componentWillMount: function(){
    this.setState({user: AuthStore.user});
  },

  formSetup: function(){
    var inputs = [];
    for (var i = 0; i < choiceNumber; i++){
      var ID = "opt" + i;
      var nameText = "opt" + i;
      inputArray.push(
          <div className="form-group">
            <label id={ID}>Option: {i}</label>
        <input ref={i} className="form-control" name="option" type='text' placeholder="Add an option here"/>
      </div>)
    }
    this.setState({optionsArray: inputs})
  },

  handleSubmit: function(){

  },

  render: function(){
    var time = videojs("#attachmentVideo").currentTime;
    return ( <div className="container multichoice-container">
          <form name="numberOfItems" onChange={this.formSetup}>
            <select value="choices">
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">Apple</option>
            </select>
          </form>

          <div className="col-md-6 col-md-offset-3">

            <h1>Create a multiple choice question</h1>
            <form name="multichoiceForm" onSubmit={this.handleSubmit}>

              <div className="form-group">
                <label id="question">Link a multiple-choice question at {time}</label>
                <input ref="question" className="form-control" name="name" type='text' placeholder="Question"/>
              </div>

              {this.state.optionsArray}

              <button className="btn btn-primary">Add to your exercise</button>
              <Link activeClassName="active" to="/"><button className="signup-cancel-btn btn btn-default">Cancel</button></Link>
            </form>
          </div>
        </div>
    )
  }
  onChange: function(event, user){
    this.setState({user: user})
  }
});

module.exports =  MultiChoiceCreation;