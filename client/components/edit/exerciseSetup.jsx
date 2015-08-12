var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;
var AuthStore = require('../../stores/AuthStore');
var Actions = require('../../actions');
var Select = require('react-select');

var exerciseSetup = React.createClass({

  render: function(){
    return (
    <div>
      <h1>Set up the exercises</h1>
    </div>
    )
  }

});

module.exports = exerciseSetup;