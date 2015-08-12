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
      alternatives: 3,
      optionsArray: [],
      user: null
    }
  },

  componentWillMount: function(){
    this.setState({user: AuthStore.user});
  },

  formSetup: function(event){
    console.log(event);
    var inputs = [];
    for (var i = 1; i <= event; i++){
      var ID = "opt" + i;
      var nameText = "opt" + i;
      inputs.push(
          <div key={i} className="form-group">
            <label id={ID}>Option: {i}</label>
        <input className="form-control" name="option" type='text' placeholder="Add an option here"/>
      </div>)
    }

    /* for (var i = 0; i < event; i++){
     var IdText = "radio" + 1;
     checks.push(<label key={1} className="radio-inline">
     <input type="radio" name="inlineRadioOptions" id={IdText} value={i+1}/>
     </label>)
     } */
    this.setState({optionsArray: inputs})
  },

  handleSubmit: function(event){
    console.log(event);
  },

  render: function(){
    //var time = videojs("#attachmentVideo").currentTime || 0;
    var options = [
      { value: '0', label: 'One' },
      { value: '1', label: 'Two' },
      { value: '2', label: 'Three' },
      { value: '4', label: 'Four' },
      { value: '5', label: 'Five' }
    ];

    return (
        <div className="container multichoice-container">
          <div className="col-md-6 col-md-offset-3">

            <h3>Create a multiple choice question</h3>

            <Select
              name="Number of items"
              value="Select the number of alternative answers"
              options={options}
              onChange={this.formSetup}
              />

            <form name="multichoiceForm" onSubmit={this.handleSubmit}>
            <h5>Write your question/prompt/problem</h5>
              <div className="form-group">
                <input ref="question" className="form-control" name="name" type='text' placeholder="Question"/>
              </div>

              {this.state.optionsArray}

                /*<div class="radio">
                {this.state.checksForAnswer}
                <div class="radio">*/

              <button className="btn btn-primary">Add to your lesson</button>
              <Link activeClassName="active" to="/"><button className="signup-cancel-btn btn btn-default">Cancel</button></Link>
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