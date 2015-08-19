var React = require('react');
var VideoBox = require('./VideoBox.jsx');
var Content = require('./Content.jsx');
var LoginOverlay = require('./LoginOverlay.jsx');
var _ = require('lodash');
var Actions = require('../../actions');
var LessonStore = require('../../stores/lesson-store.js');
var AuthStore = require('../../stores/AuthStore');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;

var LessonView = React.createClass({

  mixins: [Router.Navigation, Reflux.connect(LessonStore), Reflux.connect(AuthStore, 'auth')],

  contextTypes: {
    router: React.PropTypes.func
  },

  componentWillMount: function(){
    var self=this;
    Actions.fetchLesson({sourceComponent: this, url: this.context.router.getCurrentParams().url})
    .then(function(res){
      Actions.followLesson(self.context.router.getCurrentParams().url)
    })
  },

  render: function() {
    return (
      <div>
        <div id='lesson-view'>
          {this.state.auth && this.state.auth.user ? null : <LoginOverlay/>}
          <VideoBox />
          <Content/>

        </div>
      </div>
    );
  }, 
});

module.exports = LessonView;