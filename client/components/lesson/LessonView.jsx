var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var _ = require('lodash');
var Actions = require('../../actions');

var LessonStore = require('../../stores/lesson-store.js');
var AuthStore = require('../../stores/AuthStore');

var VideoBox = require('./VideoBox.jsx');
var Content = require('./Content.jsx');

var LessonView = React.createClass({

  mixins: [Router.Navigation, Reflux.connect(LessonStore, "lesson"), Reflux.connect(AuthStore, 'auth')],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      exercise: null
    }
  },

  componentWillMount: function(){
    
  },

  componentDidMount: function(){
    var self=this;
    Actions.getUser(function(){
      Actions.fetchLesson({sourceComponent: self, url: self.context.router.getCurrentParams().url});
    })
  },

  loadExercise: function() {

  },

  render: function() {

    if(this.state.auth){
      var overlay = this.state.auth && this.state.auth.user ? null : <LoginOverlay/>

      return (
        <div>
          <div id='lesson-view'>
            {overlay}
            <VideoBox />
            <Content/>
          </div>
        </div>
      );      
    }else{
      return null;
    }
  }, 
});

module.exports = LessonView;