var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var AuthStore = require('../../stores/AuthStore.js');
var ExerciseSetup = require('./exerciseSetup.jsx');
var VideoBox = require('../lesson/VideoBox.jsx');


var EditView= React.createClass({

  render: function(){
    return (<div>
      <VideoBox/>
      <ExerciseSetup />
    </div>
    )
  }
});

module.exports = EditView;