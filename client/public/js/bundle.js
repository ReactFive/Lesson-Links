(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Reflux = require('reflux');

module.exports = Reflux.createActions(['login', 'authenticate', 'logout', 'signup', 'submitComment', 'submitReply', 'fetchLesson', 'updateUser', 'deleteComment', 'likeComment', 'unlikeComment', 'starComment', 'likeReply', 'unlikeReply', 'starReply', 'deleteReply', 'createLesson', 'sendLesson', 'getUser', 'createExercise', 'followLesson', 'togglePublish', 'publish', 'deleteLesson', 'triggerConfigStore', 'triggerLessonStore', 'updateExercise', 'deleteExercise']);

},{"reflux":"reflux"}],2:[function(require,module,exports){
"use strict";

var React = require("react");
var Router = require('react-router');
var LINK = Router.Link;

var NotFound = React.createClass({
  displayName: "NotFound",

  render: function render() {
    return React.createElement(
      "div",
      { className: "container error-container", id: "404err" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { classname: "col-md-12" },
          React.createElement(
            "div",
            { className: "error-template" },
            React.createElement(
              "h1",
              null,
              "Oops!"
            ),
            React.createElement(
              "h2",
              null,
              "404 Not Found"
            ),
            React.createElement(
              "div",
              { className: "error-details" },
              "Sorry, requested page not found!"
            ),
            React.createElement(
              "div",
              { className: "error-actions" },
              React.createElement(
                LINK,
                { to: "/", className: "btn btn-primary btn-lg" },
                React.createElement("span", { "class": "glyphicon glyphicon-home" }),
                "Take Me Home "
              ),
              React.createElement(
                LINK,
                { to: "/", className: "btn btn-default btn-lg" },
                React.createElement("span", {
                  "class": "glyphicon glyphicon-envelope" }),
                " Contact Support "
              )
            )
          )
        )
      )
    );
  }
});

module.exports = NotFound;

},{"react":"react","react-router":"react-router"}],3:[function(require,module,exports){
'use strict';

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Nav = require('./header-footer/nav.jsx');
var Footer = require('./header-footer/footer.jsx');
var Router = require('react-router');

var App = React.createClass({
  displayName: 'App',

  getInitialState: function getInitialState() {
    return null;
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Nav, null),
      React.createElement(
        'div',
        { id: 'main-content' },
        React.createElement(RouteHandler, null)
      ),
      React.createElement(Footer, null)
    );
  }
});

module.exports = App;

},{"./header-footer/footer.jsx":21,"./header-footer/nav.jsx":22,"react":"react","react-router":"react-router"}],4:[function(require,module,exports){
'use strict';

var React = require('react');
var Link = require('react-router').Link;
var Nav = require('./header-footer/nav.jsx');

// require('../../sass/LandingPage.scss');

var Home = module.exports = React.createClass({
  displayName: 'exports',

  render: function render() {
    return React.createElement(
      'div',
      { id: 'myCarousel', className: 'carousel slide' },
      React.createElement(
        'ol',
        { className: 'carousel-indicators' },
        React.createElement('li', { 'data-target': '#myCarousel', 'data-slide-to': '0', className: 'active' }),
        React.createElement('li', { 'data-target': '#myCarousel', 'data-slide-to': '1' }),
        React.createElement('li', { 'data-target': '#myCarousel', 'data-slide-to': '2' })
      ),
      React.createElement(
        'div',
        { className: 'carousel-inner' },
        React.createElement(
          'div',
          { className: 'item active' },
          React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
              'div',
              { className: 'carousel-caption' },
              React.createElement(
                'h1',
                { className: 'logo' },
                'Lesson Links'
              ),
              React.createElement(
                'h3',
                { className: 'sublogo' },
                'Annotated  Educational  Videos.'
              ),
              React.createElement(
                'p',
                null,
                'To be colored, styled, and replaced with a gif soon! '
              ),
              React.createElement(
                'p',
                null,
                React.createElement('p', null)
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'item item2' },
          React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
              'div',
              { className: 'carousel-caption' },
              React.createElement(
                'h1',
                null,
                'How it all Works'
              ),
              React.createElement(
                'p',
                null,
                'Information and graphics coming soon...'
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'item item3' },
          React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
              'div',
              { className: 'carousel-caption' },
              React.createElement(
                'h1',
                null,
                'Our Team'
              ),
              React.createElement(
                'p',
                null,
                'Images to be added - Richard Van Camp, Isto Barton, Colin Wiley, Abhi Gulati, Esteban Castaño'
              )
            ),
            React.createElement(
              'div',
              { className: 'carousel-caption' },
              React.createElement(
                'h1',
                null,
                'Our Stack'
              ),
              React.createElement(
                'p',
                null,
                'Images to be added: Node Express React Reflux MongoDB'
              )
            )
          )
        )
      ),
      React.createElement(
        'a',
        { className: 'left carousel-control', href: '#myCarousel', 'data-slide': 'prev' },
        React.createElement('span', { className: 'icon-prev' })
      ),
      React.createElement(
        'a',
        { className: 'right carousel-control', href: '#myCarousel', 'data-slide': 'next' },
        React.createElement('span', { className: 'icon-next' })
      )
    );
  }
});

},{"./header-footer/nav.jsx":22,"react":"react","react-router":"react-router"}],5:[function(require,module,exports){
'use strict';

var React = require('react');
var AddVideoBox = require('./AddVideoBox.jsx');
var _ = require('lodash');

var LessonStore = require('../../stores/lesson-store.js');

var AddLessonView = React.createClass({
  displayName: 'AddLessonView',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'addwrapper' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(AddVideoBox, null)
      )
    );
  }
});

module.exports = AddLessonView;

},{"../../stores/lesson-store.js":50,"./AddVideoBox.jsx":6,"lodash":"lodash","react":"react"}],6:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var CreateLessonStore = require('../../stores/CreateLessonStore.js');
var Actions = require('../../actions.js');
var Navigation = Router.Navigation;

var AddVideoBox = React.createClass({
  displayName: 'AddVideoBox',

  mixins: [Navigation, Reflux.connect(CreateLessonStore, "result")],

  getInitialState: function getInitialState() {
    return {
      title: '',
      video_url: '',
      lesson_url: '',
      published: false,
      result: {
        invalidURL: false,
        invalidYoutubeURL: false,
        createdLesson: false
      }
    };
  },

  onInputChange: function onInputChange(e) {
    this.setState({ title: React.findDOMNode(this.refs.title).value });
    this.setState({ video_url: React.findDOMNode(this.refs.video_url).value });
    this.setState({ lesson_url: React.findDOMNode(this.refs.lesson_url).value });
  },

  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    var lesson_url = this.state.lesson_url.replace(/\s+/g, '-');
    Actions.createLesson({
      title: this.state.title,
      video_url: this.state.video_url,
      lesson_url: lesson_url,
      published: this.state.published
    });
  },

  gotoConfigure: function gotoConfigure(e) {
    e.preventDefault();
    this.transitionTo('/configure');
  },

  render: function render() {
    //This error message appears underneath the video URL if it is already in the database
    var errorMessage = this.state.result.invalidURL ? React.createElement(
      'div',
      { className: 'invalid-URL-error' },
      React.createElement(
        'p',
        null,
        'This URL is taken. Please try a different one.'
      )
    ) : null;

    var youtubeErrorMessage = this.state.result.invalidYoutubeURL ? React.createElement(
      'div',
      { className: 'invalid-URL-error' },
      React.createElement(
        'p',
        null,
        'This is not a valid Youtube URL. Please try a different one.'
      )
    ) : null;

    var apo = "'";

    //This success message appears underneath the form when the lesson is successfully saved.
    var successMessage = this.state.result.createdLesson ? React.createElement(
      'div',
      { className: 'alert alert-success' },
      React.createElement(
        'p',
        null,
        React.createElement(
          'strong',
          null,
          'Your lesson has been created!'
        )
      ),
      React.createElement(
        'p',
        null,
        'Title:  ',
        this.state.title
      ),
      React.createElement(
        'p',
        null,
        'Video:  ',
        this.state.video_url
      ),
      React.createElement(
        'p',
        null,
        'Your lesson',
        apo,
        's unique URL:',
        React.createElement('br', null),
        React.createElement(
          'strong',
          null,
          'www.lesson-links.com/',
          this.state.lesson_url.replace(/\s+/g, '-')
        )
      ),
      React.createElement('br', null),
      React.createElement(
        'p',
        null,
        'Click NEXT to configure your lesson exercises'
      )
    ) : null;

    //Once the user successfully creates a lesson, saves it successfully, and clicks 'save',
    //the button changes to 'next' so they can click it to continue to the configure page.
    var button = this.state.result.createdLesson ? React.createElement(
      'button',
      {
        type: 'submit',
        className: 'btn btn-success pull-right',
        onClick: this.gotoConfigure },
      'Next'
    ) : React.createElement(
      'button',
      {
        type: 'submit',
        className: 'btn btn-primary pull-right',
        onClick: this.handleSubmit },
      'Save'
    );

    return React.createElement(
      'div',
      { className: 'lesson-create col-xs-8 col-xs-offset-2' },
      React.createElement(
        'div',
        { className: 'panel panel-default lesson-create-panel' },
        React.createElement(
          'div',
          { className: 'panel-header text-center' },
          React.createElement(
            'h3',
            null,
            'CREATE A LESSON'
          )
        ),
        React.createElement(
          'div',
          { className: 'panel-body' },
          React.createElement(
            'form',
            { className: 'form-horizontal' },
            React.createElement(
              'div',
              { className: 'form-group' },
              React.createElement(
                'label',
                { htmlFor: 'lesson', className: 'col-sm-3 control-label' },
                React.createElement(
                  'strong',
                  null,
                  'Lesson Title:'
                )
              ),
              React.createElement(
                'div',
                { className: 'col-sm-9' },
                React.createElement('input', {
                  id: 'lesson',
                  className: 'form-control',
                  type: 'text',
                  placeholder: 'What is the name of your new Lesson?',
                  ref: 'title',
                  value: this.state.title,
                  onChange: this.onInputChange })
              )
            ),
            React.createElement(
              'div',
              { className: 'form-group' },
              React.createElement(
                'label',
                { htmlFor: 'video_url', className: 'col-sm-3 control-label' },
                React.createElement(
                  'strong',
                  null,
                  'Video URL:'
                )
              ),
              React.createElement(
                'div',
                { className: 'col-sm-9' },
                React.createElement('input', {
                  id: 'video_url',
                  className: 'form-control',
                  type: 'url',
                  placeholder: 'Input your video URL here. We currently only support YouTube videos.',
                  name: 'newVideoUrl', ref: 'video_url',
                  value: this.state.video_url,
                  onChange: this.onInputChange })
              )
            ),
            React.createElement(
              'div',
              { className: 'form-group' },
              React.createElement(
                'label',
                { htmlFor: 'lesson_url', className: 'col-sm-3 control-label' },
                React.createElement(
                  'strong',
                  null,
                  'Key words for URL'
                )
              ),
              React.createElement(
                'div',
                { className: 'col-sm-9' },
                React.createElement('input', {
                  id: 'lesson_url',
                  className: 'form-control',
                  type: 'text',
                  placeholder: '/shakespeare-in-the-movies-lesson2',
                  name: 'newVideoUrl',
                  ref: 'lesson_url',
                  value: this.state.lesson_url,
                  onChange: this.onInputChange }),
                youtubeErrorMessage,
                errorMessage
              )
            ),
            React.createElement(
              'div',
              { className: 'col-md-offset-3 col-md-7' },
              successMessage
            ),
            button
          )
        )
      )
    );
  }

});

module.exports = AddVideoBox;

},{"../../actions.js":1,"../../stores/CreateLessonStore.js":47,"react":"react","react-router":"react-router","reflux":"reflux"}],7:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');

var _ = require('lodash');
var LessonConfigStore = require('../../stores/LessonConfigStore');

var VideoPlayer = React.createClass({
  displayName: 'VideoPlayer',

  mixins: [Reflux.connect(LessonConfigStore, "lesson")],

  getInitialState: function getInitialState() {
    return {
      videoSetupCompleted: false
    };
  },

  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
    if (this.state.videoSetupCompleted) {
      var player = videojs('attachmentVideo');
      var pastExercises = player.markers.getMarkers();
      var newExercises = _.difference(nextState.lesson.exercises, pastExercises);
      if (newExercises.length > 0) {
        player.markers.add(newExercises);
      }
    }
  },

  componentDidUpdate: function componentDidUpdate() {
    if (!this.state.videoSetupCompleted) {
      var player = this.videoSetup();
      this.setState({
        videoSetupCompleted: true
      });
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    videojs('attachmentVideo').dispose();
  },

  videoSetup: function videoSetup() {
    // initialize video.js
    var player = videojs('attachmentVideo');
    if (typeof player.markers === 'function') {
      var exercises = this.state.lesson.exercises;
      var exerciseMarkers = exercises.map(function (exercise) {
        var markerObj = _.cloneDeep(exercise);
        markerObj.text = markerObj.exercise.type;
        return markerObj;
      });
      player.markers({
        markers: exerciseMarkers
      });
    }

    return player;
  },
  render: function render() {
    console.log("# exercises", this.state.lesson && this.state.lesson.exercises);
    if (this.state.lesson && this.state.lesson.video_url) {
      return React.createElement(
        'div',
        { className: 'panel panel-default' },
        React.createElement(
          'div',
          { className: 'panel-body' },
          React.createElement('video', { id: 'attachmentVideo',
            className: 'video-js vjs-default-skin embed-responsive-item',
            width: '500', height: '300',
            controls: true, preload: 'auto',
            'data-setup': '{ "techOrder": ["youtube"], "src": "' + this.state.lesson.video_url + '" }' })
        )
      );
    } else {
      return null;
    }
  }
});

module.exports = VideoPlayer;

},{"../../stores/LessonConfigStore":48,"lodash":"lodash","react":"react","reflux":"reflux"}],8:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');

var CurrentExercisesList = React.createClass({
  displayName: 'CurrentExercisesList',

  exerciseEntries: function exerciseEntries() {
    var self = this;

    return this.props.exercises.map(function (exerciseInfo) {
      var exercise = exerciseInfo.exercise;
      var reloadMe = (function () {
        this.props.reloadExercise(exerciseInfo);
      }).bind(self);

      var minutes = Math.floor(exercise.time / 60).toString();
      if (minutes.length < 2) minutes = '0' + minutes;
      var seconds = (Math.floor(exercise.time) % 60).toString();
      if (seconds.length < 2) seconds = '0' + seconds;
      var timeDisplay = minutes + ':' + seconds;

      return React.createElement(
        'div',
        { className: 'col-md-12' },
        React.createElement(
          'div',
          { className: 'col-md-9', key: exerciseInfo.key, onClick: reloadMe },
          ' ',
          timeDisplay,
          ' ',
          exercise.type
        ),
        React.createElement('span', { onClick: self.deleteExercise.bind(null, exerciseInfo._id), className: 'glyphicon glyphicon-remove col-md-3' })
      );
    });
  },

  render: function render() {
    return React.createElement(
      'li',
      { className: 'list-group-item col-md-4' },
      React.createElement(
        'div',
        { id: 'current-exercises', className: 'panel panel-default' },
        React.createElement(
          'div',
          { className: 'panel-heading' },
          React.createElement(
            'h3',
            { className: 'panel-title' },
            'Current exercises'
          )
        ),
        React.createElement(
          'div',
          { className: 'panel-body exercise-list-body exercise-list-body-wide' },
          this.exerciseEntries()
        ),
        React.createElement(
          'div',
          { className: 'panel-footer' },
          React.createElement(
            'button',
            { onClick: this.props.onPublish, className: 'btn-block btn-default' },
            'Publish your lesson'
          )
        )
      )
    );
  },

  deleteExercise: function deleteExercise(exercise_id) {

    swal({ title: "Are you sure?",
      text: "You will not be able to recover this exercise",
      type: "warning", showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: false }, function () {
      Actions.deleteExercise(exercise_id);
      swal("Deleted!", "That exercise is deleted.", "success");
    });
  }

});

module.exports = CurrentExercisesList;

},{"../../actions":1,"react":"react","reflux":"reflux"}],9:[function(require,module,exports){
'use strict';

var _ = require('lodash');
var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');
var Select = require('react-select');

var ExerciseTypes = React.createClass({
  displayName: 'ExerciseTypes',

  getInitialState: function getInitialState() {
    return {
      exerciseTypes: [{ label: 'Multiple Choice', value: 'multiplechoice' }, { label: 'True/False', value: 'truefalse' }, { label: 'Short Answer', value: 'shortanswer' }],
      selectedType: null
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      { id: 'ExerciseTypeSelection', className: '' },
      React.createElement(
        'form',
        { id: 'exerciseTypeForm', className: 'form-inline', onSubmit: this.handleSubmit },
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(Select, {
            className: 'col-xs-6 col-xs-offset-1',
            ref: 'ExerciseType',
            name: 'Type of Exercise',
            placeholder: 'Select the type of exercise',
            options: this.state.exerciseTypes,
            onChange: this.updateSelected }),
          React.createElement(
            'button',
            { className: 'col-xs-3 signup-cancel-btn btn btn-primary' },
            'Add to your lesson'
          )
        )
      )
    );
  },

  updateSelected: function updateSelected(choice) {
    this.state.selectedType = choice;
  },

  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    this.props.chooseType(this.state.selectedType);
  }
});

module.exports = ExerciseTypes;

},{"../../actions":1,"lodash":"lodash","react":"react","react-select":71,"reflux":"reflux"}],10:[function(require,module,exports){
'use strict';

var _ = require('lodash');
var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');
var Router = require('react-router');
var Navigation = Router.Navigation;

var LessonConfigStore = require('../../stores/LessonConfigStore');
var VideoPlayer = require('./ConfigVideoPlayer.jsx');
var ExerciseTypes = require('./ExerciseTypes.jsx');
var CurrentExercisesList = require('./CurrentExercisesList.jsx');

var MultiChoiceCreation = require('../basicExercises/MultiChoiceCreation.jsx');
var TrueFalseCreation = require('../basicExercises/TrueFalseCreation.jsx');
var ShortAnswerCreation = require('../basicExercises/ShortAnswerCreation.jsx');

var LessonConfiguration = React.createClass({
  displayName: 'LessonConfiguration',

  mixins: [Reflux.connect(LessonConfigStore, "lesson"), Navigation],

  getInitialState: function getInitialState() {
    return {
      editing: null
    };
  },

  componentWillMount: function componentWillMount() {
    Actions.triggerConfigStore();
  },

  mapExerciseType: function mapExerciseType() {
    var onDoneEditing = (function () {
      this.setState({
        editing: null,
        exerciseState: null
      });
    }).bind(this);

    var exerciseTypeMap = {
      'multiplechoice': React.createElement(MultiChoiceCreation, { exerciseState: this.state.exerciseState || {}, onComplete: onDoneEditing }),
      'truefalse': React.createElement(TrueFalseCreation, { exerciseState: this.state.exerciseState || {}, onComplete: onDoneEditing }),
      'shortanswer': React.createElement(ShortAnswerCreation, { exerciseState: this.state.exerciseState || {}, onComplete: onDoneEditing })
    };

    return exerciseTypeMap[this.state.editing];
  },

  loadExercise: function loadExercise(exerciseInfo) {
    var exercise = exerciseInfo.exercise;
    exercise.id = exerciseInfo._id;
    this.setState({
      editing: exercise.type,
      exerciseState: exercise
    });
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'ul',
        { className: 'list-group row config-container' },
        React.createElement(
          'li',
          { className: 'list-group-item col-md-8' },
          React.createElement(VideoPlayer, null)
        ),
        this.state.lesson && React.createElement(CurrentExercisesList, { onPublish: this.publishLesson, reloadExercise: this.loadExercise, exercises: this.state.lesson.exercises }),
        React.createElement(
          'li',
          { className: 'list-group-item col-md-12' },
          !this.state.editing && React.createElement(ExerciseTypes, { chooseType: this.setEditing })
        )
      ),
      React.createElement(
        'div',
        { className: 'panel panel-default' },
        this.state.editing && this.mapExerciseType()
      )
    );
  },

  publishLesson: function publishLesson() {
    var self = this;

    Actions.publish(this.state.lesson).then(function (res) {
      console.log("published: ", res);
      self.transitionTo('/library');
    });
  },

  setEditing: function setEditing(exerciseType) {
    this.setState({
      editing: exerciseType
    });
  }

});

module.exports = LessonConfiguration;

},{"../../actions":1,"../../stores/LessonConfigStore":48,"../basicExercises/MultiChoiceCreation.jsx":11,"../basicExercises/ShortAnswerCreation.jsx":14,"../basicExercises/TrueFalseCreation.jsx":18,"./ConfigVideoPlayer.jsx":7,"./CurrentExercisesList.jsx":8,"./ExerciseTypes.jsx":9,"lodash":"lodash","react":"react","react-router":"react-router","reflux":"reflux"}],11:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;
var AuthStore = require('../../stores/AuthStore');
var LessonConfigStore = require('../../stores/LessonConfigStore');
var Actions = require('../../actions');
var Select = require('react-select');
var TextInput = require('./TextInput.jsx');
var Textarea = require('./Textarea.jsx');
var _ = require('lodash');

var MultiChoiceCreation = React.createClass({
  displayName: 'MultiChoiceCreation',

  mixins: [Reflux.connect(AuthStore, "auth"), Reflux.connect(LessonConfigStore, "lesson"), Navigation],

  getInitialState: function getInitialState() {
    var loadedState = this.props.exerciseState;
    return {
      exercise: {
        question: loadedState.question || "",
        numbs: loadedState.numbs || 6,
        optNumbs: loadedState.optNumbs || 3,
        correctOption: loadedState.correctOption || null,
        answers: loadedState.answers || ["", "", "", "", ""],
        feedback: loadedState.feedback || ["", "", "", "", ""],
        options: [{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }, { value: '3', label: 'Option 3' }, { value: '4', label: 'Option 4' }, { value: '5', label: 'Option 5' }]
      }
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var loadedState = nextProps.exerciseState;
    this.setState({
      exercise: {
        question: loadedState.question || "",
        numbs: loadedState.numbs || 6,
        optNumbs: loadedState.optNumbs || 3,
        correctOption: loadedState.correctOption || null,
        answers: loadedState.answers || ["", "", "", "", ""],
        feedback: loadedState.feedback || ["", "", "", "", ""],
        options: [{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }, { value: '3', label: 'Option 3' }, { value: '4', label: 'Option 4' }, { value: '5', label: 'Option 5' }]
      }
    });
  },

  formSetup: function formSetup(event) {
    this.state.exercise['optNumbs'] = event;
    this.state.exercise['numbs'] = event * 2;
    this.setState({ exercise: this.state.exercise });
  },

  checkHandle: function checkHandle(event) {
    this.state.exercise.correctOption = event.target.value;
    this.setState({ exercise: this.state.exercise });
  },

  setExerciseState: function setExerciseState(event) {
    if (event.target.name.indexOf('answers') >= 0 || event.target.name.indexOf('feedback') >= 0) {
      var fieldInfo = event.target.name.split('-');
      var optionInfoType = fieldInfo[0],
          optionInfoIndex = fieldInfo[1];

      this.state.exercise[optionInfoType][optionInfoIndex] = event.target.value;
      this.setState({ exercise: this.state.exercise });
    } else {
      this.state.exercise[event.target.name] = event.target.value;
      this.setState({ exercise: this.state.exercise });
    }
  },

  createInputs: function createInputs() {
    var self = this;

    var inputs = [];
    var i;
    for (i = 0; i < self.state.exercise.optNums; i++) {
      inputs.push(React.createElement(
        'span',
        null,
        React.createElement(TextInput, {
          wrapperClass: 'form-group',
          htmlFor: 'option' + i,
          id: 'option' + i,
          ref: 'option' + i,
          key: i * 10,
          name: 'answers-' + i,
          label: self.state.exercise.options[0].label,
          value: self.state.exercise.answers[i] || "",
          onChange: self.setExerciseState,
          placeholder: 'Add an option here' }),
        React.createElement(Textarea, {
          htmlFor: 'feedback' + i,
          id: 'feedback' + i,
          ref: 'feedback' + i,
          key: i * 20,
          label: 'Feedback to these answers when entered by a learner:',
          wrapperClass: 'form-group',
          name: 'feedback-' + i,
          value: self.state.exercise.feedback[i] || "",
          onChange: self.setExerciseState })
      ));
    }
    return inputs;
  },

  render: function render() {

    var classString = {};
    var radioClassString = {};
    for (var i = 0; i < 10; i++) {
      if (i < this.state.exercise.numbs) {
        classString[i] = "form-group";
      } else {
        classString[i] = "hidden";
      }
    }
    for (var i = 0; i < 5; i++) {
      if (i < this.state.exercise.optNumbs) {
        radioClassString[i] = "radio-inline";
      } else {
        radioClassString[i] = "hidden";
      }
    }

    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'div',
        { className: 'modal-dialog' },
        React.createElement(
          'div',
          { className: 'modal-content' },
          React.createElement(
            'div',
            { className: 'modal-header' },
            React.createElement(
              'h3',
              null,
              'Create/Update a Multiple Choice Question'
            )
          ),
          React.createElement(
            'div',
            { className: 'modal-body' },
            React.createElement(Select, {
              name: 'Number of items',
              value: 'Select the number of alternative answers',
              options: this.state.exercise.options,
              onChange: this.formSetup }),
            React.createElement(
              'form',
              { name: 'multichoiceForm', onSubmit: this.handleSubmit },
              React.createElement(
                'h5',
                null,
                'Write your question/prompt/problem'
              ),
              React.createElement(
                'div',
                { className: 'form-group' },
                React.createElement('input', { ref: 'question',
                  className: 'form-control',
                  name: 'question',
                  type: 'text',
                  value: this.state.exercise.question,
                  onChange: this.setExerciseState,
                  placeholder: 'Question' })
              ),
              this.createInputs(),
              React.createElement(
                'div',
                { onChange: this.checkHandle, className: 'correct-answer-label' },
                React.createElement(
                  'span',
                  { className: 'correct-answer-label' },
                  React.createElement(
                    'strong',
                    null,
                    'Indicate the best option: '
                  )
                ),
                React.createElement(
                  'label',
                  { htmlFor: 'correct1', className: radioClassString[0] },
                  React.createElement('input', { ref: 'correct1', type: 'radio', name: 'correct', value: '0',
                    defaultChecked: this.state.exercise.correctOption === "0" }),
                  '1'
                ),
                React.createElement(
                  'label',
                  { htmlFor: 'correct2', className: radioClassString[1] },
                  React.createElement('input', { ref: 'correct2', type: 'radio', name: 'correct', value: '1',
                    defaultChecked: this.state.exercise.correctOption === "1" }),
                  '2'
                ),
                React.createElement(
                  'label',
                  { htmlFor: 'correct3', className: radioClassString[2] },
                  React.createElement('input', { ref: 'correct3', type: 'radio', name: 'correct', value: '2',
                    defaultChecked: this.state.exercise.correctOption === "2" }),
                  '3'
                ),
                React.createElement(
                  'label',
                  { htmlFor: 'correct4', className: radioClassString[3] },
                  React.createElement('input', { ref: 'correct4', type: 'radio', name: 'correct', value: '3',
                    defaultChecked: this.state.exercise.correctOption === "3" }),
                  '4'
                ),
                React.createElement(
                  'label',
                  { htmlFor: 'correct5', className: radioClassString[4] },
                  React.createElement('input', { ref: 'correct5', type: 'radio', name: 'correct', value: '4',
                    defaultChecked: this.state.exercise.correctOption === "4" }),
                  '5'
                )
              ),
              React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                  'div',
                  { className: 'col-md-offset-6' },
                  React.createElement(
                    'button',
                    { type: 'submit', className: 'signup-cancel-btn btn btn-primary margin-right' },
                    'Save / Update'
                  ),
                  React.createElement(
                    'button',
                    { onClick: this.handleCancel, className: ' btn btn-default' },
                    'Cancel'
                  )
                )
              )
            )
          )
        )
      )
    );
  },

  handleSubmit: function handleSubmit(event) {
    event.preventDefault();

    var time = videojs("#attachmentVideo").currentTime();

    var exercise = _.cloneDeep(this.state.exercise);
    exercise.time = time;
    exercise.type = "multiplechoice";
    exercise.answers = removeBlanks(exercise.answers);
    exercise.feedback = removeBlanks(exercise.feedback);

    console.log(exercise);
    if (exercise.question.length && exercise.options.length) {
      Actions.createExercise(exercise);
      this.props.onComplete();
    } else {
      toastr['warning']('Make sure you have a question and options');
    }

    function removeBlanks(array) {
      var arr = [];
      arr = _.remove(array, function (o) {
        return o !== "";
      });
      return arr;
    }
  },

  handleCancel: function handleCancel(event) {
    event.preventDefault();
    console.log("cancel clicked");
    this.props.onComplete();
  },

  onChange: function onChange(event, user) {
    this.setState({ user: user });
  }
});

module.exports = MultiChoiceCreation;

},{"../../actions":1,"../../stores/AuthStore":46,"../../stores/LessonConfigStore":48,"./TextInput.jsx":15,"./Textarea.jsx":16,"lodash":"lodash","react":"react","react-router":"react-router","react-select":71,"reflux":"reflux"}],12:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;
var Route = Router.Route;

var Multichoice = React.createClass({
  displayName: 'Multichoice',

  getInitialState: function getInitialState() {
    var loadedExercise = this.props.exercise || {};
    console.log(loadedExercise);

    return {
      question: loadedExercise.question || "No question provided",
      answers: loadedExercise.answers || [],
      feedback: loadedExercise.feedback || [],
      correctOption: +loadedExercise.correctOption || 0
    };
  },

  handleClick: function handleClick(clickedOpt) {
    console.log(clickedOpt);
    if (this.state.correctOption === clickedOpt) {
      console.log("correct");
      this.setState({
        outcome: true,
        currentFeedback: this.state.feedback[clickedOpt]
      });
    } else {
      console.log("false");
      this.setState({
        outcome: false,
        currentFeedback: this.state.feedback[clickedOpt]
      });
    }
  },

  retry: function retry() {
    this.setState({ outcome: null });
  },

  render: function render() {
    var view;
    var i = this.state.item;
    var number = this.state.counter;
    var question = this.state.question;
    var outcome = this.state.outcome;
    var opts = this.state.answers.map((function (answer, index) {
      number++;
      var classString = "element-animation";
      classString += number;
      classString += " btn btn-lg btn-primary btn-block";
      var refString = "opts";
      refString += index;
      var handle = this.handleClick;
      return React.createElement(
        'label',
        { className: classString, onClick: handle.bind(null, index) },
        React.createElement(
          'span',
          { className: 'btn-label' },
          React.createElement('i', { className: 'glyphicon glyphicon-chevron-right' })
        ),
        React.createElement('input', { type: 'radio', name: 'q_answer', ref: refString,
          value: index }),
        answer
      );
    }).bind(this));
    console.log(outcome);
    switch (outcome) {
      case false:
        view = React.createElement(
          'div',
          { className: 'container-fluid' },
          React.createElement(
            'div',
            { className: 'modal-dialog' },
            React.createElement(
              'div',
              { className: 'modal-content' },
              React.createElement(
                'div',
                { className: 'modal-header' },
                React.createElement(
                  'h3',
                  null,
                  React.createElement('span', { className: 'label label-warning text-center', id: 'qid' }),
                  'Incorrect'
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-body' },
                React.createElement(
                  'div',
                  { className: 'col-xs-10 col-xs-offset-2' },
                  React.createElement(
                    'blockquote',
                    null,
                    React.createElement(
                      'p',
                      null,
                      this.state.currentFeedback
                    )
                  )
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-footer' },
                React.createElement(
                  'button',
                  { className: 'btn btn-success', onClick: this.props.onComplete },
                  'Continue Video'
                ),
                React.createElement(
                  'button',
                  { className: 'btn btn-primary try-again-btn', onClick: this.retry },
                  'Try Again'
                )
              )
            )
          )
        );
        break;
      case true:
        view = React.createElement(
          'div',
          { className: 'container-fluid bg-info' },
          React.createElement(
            'div',
            { className: 'modal-dialog' },
            React.createElement(
              'div',
              { className: 'modal-content' },
              React.createElement(
                'div',
                { className: 'modal-header' },
                React.createElement(
                  'h3',
                  null,
                  React.createElement('span', { className: 'label label-success text-center', id: 'qid' }),
                  'Correct!'
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-body' },
                React.createElement(
                  'div',
                  { className: 'col-xs-10 col-xs-offset-2' },
                  React.createElement(
                    'blockquote',
                    null,
                    this.state.currentFeedback
                  )
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-footer' },
                React.createElement(
                  'button',
                  { className: 'btn btn-success', onClick: this.props.onComplete },
                  'Continue Video'
                )
              )
            )
          )
        );
        break;
      default:
        view = React.createElement(
          'div',
          { className: 'container-fluid' },
          React.createElement(
            'div',
            { className: 'modal-dialog' },
            React.createElement(
              'div',
              { className: 'modal-content' },
              React.createElement(
                'div',
                { className: 'modal-header' },
                React.createElement(
                  'h4',
                  null,
                  React.createElement(
                    'span',
                    { className: 'label label-default', id: 'qid' },
                    React.createElement('i', { className: 'fa fa-question-circle fa-lg' })
                  ),
                  question
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-body' },
                React.createElement(
                  'div',
                  { className: 'col-xs-3 col-xs-offset-5' },
                  React.createElement(
                    'div',
                    { id: 'loadbar' },
                    React.createElement('div', { className: 'blockG', id: 'rotateG_01' }),
                    React.createElement('div', { className: 'blockG', id: 'rotateG_02' }),
                    React.createElement('div', { className: 'blockG', id: 'rotateG_03' }),
                    React.createElement('div', { className: 'blockG', id: 'rotateG_04' }),
                    React.createElement('div', { className: 'blockG', id: 'rotateG_05' }),
                    React.createElement('div', { className: 'blockG', id: 'rotateG_06' }),
                    React.createElement('div', { className: 'blockG', id: 'rotateG_07' }),
                    React.createElement('div', { className: 'blockG', id: 'rotateG_08' })
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'quiz', id: 'quiz', 'data-toggle': 'buttons' },
                  opts
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-footer text-muted' },
                React.createElement('span', { id: 'answer' })
              )
            )
          )
        );

    }
    return React.createElement(
      'div',
      null,
      view
    );
  }
});

module.exports = Multichoice;
/*end header*/ /*end modal-content*/ /*end modal-dialog*/ /*end modal-content*/ /*end modal-dialog*/ /*end header*/ /*end modal-body*/ /*end footer*/ /*end modal-content*/ /*end modal-dialog*/

},{"react":"react","react-router":"react-router","reflux":"reflux"}],13:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Link = Router.Link;

var ShortAnswer = React.createClass({
  displayName: 'ShortAnswer',

  getInitialState: function getInitialState() {
    return {
      exercise: {
        question: "What do the stars represent on the US flag?",
        bestAnswers: "(states|50states|fiftystates)",
        bestFeedback: "Well done",
        altAnswers: "(nations|municipalities)",
        altFeedback: "Uuuh, your close but the wrong scale",
        wrongFeedback: "oh man, are you kidding?"
      },
      answer: "",
      outcome: 0
    };
  },

  setAnswerState: function setAnswerState(event) {
    console.log(event.target.value);
    this.setState({ answer: event.target.value });
  },

  submitAnswer: function submitAnswer(event) {
    event.preventDefault();
    this.setState({ answer: event.target.value.trim() });

    var bestCheck = new RegExp(this.state.exercise.bestAnswers);
    var altCheck = new RegExp(this.state.exercise.altAnswers);

    if (bestCheck.test(this.state.answer)) {
      this.setState({ outcome: 2 });
    } else if (altCheck.test(this.state.answer)) {
      this.setState({ outcome: 1 });
    } else {
      this.setState({ outcome: -1 });
    }
  },

  render: function render() {
    var view;
    var prompt = this.state.statement;
    var title = this.state.title;

    switch (this.state.outcome) {
      case -1:
        view = React.createElement(
          'div',
          { className: 'container-fluid' },
          React.createElement(
            'div',
            { className: 'modal-dialog' },
            React.createElement(
              'div',
              { className: 'modal-content' },
              React.createElement(
                'div',
                { className: 'modal-header' },
                React.createElement(
                  'h3',
                  null,
                  React.createElement(
                    'span',
                    { className: 'label label-warning text-center', id: 'qid' },
                    React.createElement('i', { className: 'fa fa-thumbs-down fa-lg' })
                  ),
                  'Incorrect'
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-body' },
                React.createElement(
                  'div',
                  { className: 'col-xs-10 col-xs-offset-2' },
                  React.createElement(
                    'blockquote',
                    null,
                    React.createElement(
                      'p',
                      null,
                      this.state.exercise.wrongFeedback ? this.state.exercise.wrongFeedback : null
                    )
                  )
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-footer' },
                React.createElement(
                  Link,
                  { activeClassName: 'active', to: '/exerciseSA' },
                  React.createElement(
                    'button',
                    { className: 'btn btn-primary' },
                    'Try Again'
                  )
                ),
                React.createElement(
                  Link,
                  { activeClassName: 'active', to: '/' },
                  React.createElement(
                    'button',
                    { className: 'btn btn-success try-again-btn' },
                    'Continue Video'
                  )
                )
              )
            )
          )
        );
        break;
      case 2:
        view = React.createElement(
          'div',
          { className: 'container-fluid' },
          React.createElement(
            'div',
            { className: 'modal-dialog' },
            React.createElement(
              'div',
              { className: 'modal-content' },
              React.createElement(
                'div',
                { className: 'modal-header' },
                React.createElement(
                  'h3',
                  null,
                  React.createElement(
                    'span',
                    { className: 'label label-success text-center', id: 'qid' },
                    React.createElement('i', { className: 'fa fa-thumbs-up fa-lg' })
                  ),
                  'Correct!'
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-body' },
                React.createElement(
                  'div',
                  { className: 'col-xs-10 col-xs-offset-2' },
                  React.createElement(
                    'blockquote',
                    null,
                    this.state.exercise.bestFeedback ? this.state.exercise.bestFeedback : null
                  )
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-footer' },
                React.createElement(
                  Link,
                  { activeClassName: 'active', to: '/' },
                  React.createElement(
                    'button',
                    { className: 'btn btn-success' },
                    'Continue Video'
                  )
                )
              )
            )
          )
        );
        break;
      case 1:
        view = React.createElement(
          'div',
          { className: 'container-fluid' },
          React.createElement(
            'div',
            { className: 'modal-dialog' },
            React.createElement(
              'div',
              { className: 'modal-content' },
              React.createElement(
                'div',
                { className: 'modal-header' },
                React.createElement(
                  'h3',
                  null,
                  React.createElement(
                    'span',
                    { className: 'label label-warning text-center', id: 'qid' },
                    React.createElement('i', { className: 'fa fa-thumbs-up fa-lg' })
                  ),
                  'Partially Correct'
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-body' },
                React.createElement(
                  'div',
                  { className: 'col-xs-10 col-xs-offset-2' },
                  React.createElement(
                    'blockquote',
                    null,
                    this.state.exercise.altFeedback ? this.state.exercise.altFeedback : null
                  )
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-footer' },
                React.createElement(
                  Link,
                  { activeClassName: 'active', to: '/exerciseSA' },
                  React.createElement(
                    'button',
                    { className: 'btn btn-primary' },
                    'Try Again'
                  )
                ),
                React.createElement(
                  Link,
                  { activeClassName: 'active', to: '/' },
                  React.createElement(
                    'button',
                    { className: 'btn btn-success try-again-btn' },
                    'Continue Video'
                  )
                )
              )
            )
          )
        );
        break;
      default:
        view = React.createElement(
          'div',
          { className: 'container-fluid' },
          React.createElement(
            'div',
            { className: 'modal-dialog' },
            React.createElement(
              'div',
              { className: 'modal-content' },
              React.createElement(
                'div',
                { className: 'modal-header' },
                React.createElement(
                  'h4',
                  null,
                  React.createElement(
                    'span',
                    { className: 'label label-default', id: 'qid' },
                    React.createElement('i', { className: 'fa fa-question-circle fa-lg' })
                  ),
                  this.state.exercise.question
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-body' },
                React.createElement(
                  'form',
                  null,
                  React.createElement(
                    'div',
                    { className: 'form-group' },
                    React.createElement(
                      'label',
                      { htmlFor: 'answer' },
                      React.createElement(
                        'strong',
                        null,
                        'Answer'
                      )
                    ),
                    React.createElement('input', { id: 'answer',
                      className: 'form-control',
                      name: 'answer',
                      type: 'text',
                      ref: 'answer',
                      value: this.state.answer,
                      onChange: this.setAnswerState,
                      placeholder: 'Your answer here' })
                  ),
                  React.createElement(
                    'button',
                    { onClick: this.submitAnswer, type: 'submit', className: 'btn btn-primary pull-right' },
                    'Submit'
                  )
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-footer text-muted' },
                React.createElement('span', { id: 'answer' })
              )
            )
          )
        );

    }
    return React.createElement(
      'div',
      null,
      view
    );
  }

});

module.exports = ShortAnswer;
/*end header*/ /*end modal-content*/ /*end modal-dialog*/ /*end modal-content*/ /*end modal-dialog*/ /*end modal-content*/ /*end modal-dialog*/ /*end header*/ /*end modal-body*/ /*end footer*/ /*end modal-content*/ /*end modal-dialog*/

},{"react":"react","react-router":"react-router","reflux":"reflux"}],14:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var AuthStore = require('../../stores/AuthStore');
var LessonConfigStore = require('../../stores/LessonConfigStore');
var Actions = require('../../actions');
var TextInput = require('./TextInput.jsx');
var Textarea = require('./Textarea.jsx');

var _ = require('lodash');

var ShortAnswerCreation = React.createClass({
  displayName: 'ShortAnswerCreation',

  mixins: [Reflux.connect(AuthStore, "auth"), Reflux.connect(LessonConfigStore, "lesson"), Navigation],

  getInitialState: function getInitialState() {
    var loadedState = this.props.exerciseState || {};
    var updating = Object.keys(loadedState).length;
    return {
      exercise: {
        question: loadedState.question || "",
        bestAnswers: loadedState.bestAnswers || "",
        bestFeedback: loadedState.bestFeedback || "",
        altAnswers: loadedState.altAnswers || "",
        altFeedback: loadedState.altFeedback || "",
        id: loadedState.id || undefined
      },
      updating: !!updating
    };
  },

  setExerciseState: function setExerciseState(event) {
    var field = event.target.name;
    this.state.exercise[field] = event.target.value;
    return this.setState({ exercise: this.state.exercise });
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var loadedState = nextProps.exerciseState;
    var updating = Object.keys(loadedState).length;
    this.setState({
      exercise: {
        question: loadedState.question || "",
        bestAnswers: loadedState.bestAnswers || "",
        bestFeedback: loadedState.bestFeedback || "",
        altAnswers: loadedState.altAnswers || "",
        altFeedback: loadedState.altFeedback || "",
        id: loadedState.id || undefined
      },
      updating: !!updating
    });
  },

  render: function render() {

    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'div',
        { className: 'modal-dialog' },
        React.createElement(
          'div',
          { className: 'modal-content' },
          React.createElement(
            'div',
            { className: 'modal-header' },
            React.createElement(
              'h3',
              null,
              'Create/Update a Short Answer Question'
            )
          ),
          React.createElement(
            'div',
            { className: 'modal-body' },
            React.createElement(
              'form',
              { name: 'shortAnswerForm' },
              React.createElement(
                'h5',
                null,
                'Write a prompt requiring a short answer'
              ),
              React.createElement(
                'div',
                { className: 'form-group' },
                React.createElement('input', {
                  ref: 'question',
                  className: 'form-control',
                  name: 'question',
                  type: 'text',
                  value: this.state.exercise.question,
                  onChange: this.setExerciseState,
                  placeholder: 'Question' })
              ),
              React.createElement(TextInput, {
                wrapperClass: 'form-group',
                name: 'bestAnswers',
                label: 'Best answer(s)',
                value: this.state.exercise.bestAnswers,
                onChange: this.setExerciseState,
                placeholder: 'Separate answers with a pipe: red | white | blue' }),
              React.createElement(Textarea, {
                label: 'Feedback to these answers when entered by a learner:',
                wrapperClass: 'form-group',
                name: 'bestFeedback',
                value: this.state.exercise.bestFeedback,
                onChange: this.setExerciseState }),
              React.createElement(TextInput, {
                wrapperClass: 'form-group',
                name: 'altAnswers',
                label: 'Alternative answer(s)',
                value: this.state.exercise.altAnswers,
                onChange: this.setExerciseState,
                placeholder: 'Separate answers with a pipe: red | white | blue' }),
              React.createElement(Textarea, {
                label: 'Feedback to these answers when entered by a learner:',
                wrapperClass: 'form-group',
                name: 'altFeedback',
                value: this.state.exercise.altFeedback,
                onChange: this.setExerciseState }),
              React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                  'div',
                  { className: 'col-md-offset-6' },
                  React.createElement(
                    'button',
                    {
                      type: 'submit',
                      onClick: this.handleSubmit,
                      className: 'signup-cancel-btn btn btn-primary margin-right' },
                    'Save / Update'
                  ),
                  React.createElement(
                    'button',
                    {
                      onClick: this.handleCancel,
                      className: 'btn btn-default' },
                    'Cancel'
                  )
                )
              )
            )
          )
        )
      )
    );
  },

  handleSubmit: function handleSubmit(event) {

    event.preventDefault();

    var exercise = {};
    exercise.type = "shortanswer";
    exercise.time = videojs("#attachmentVideo").currentTime();
    exercise.question = this.state.exercise.question;
    exercise.bestAnswers = createRegex(this.state.exercise.bestAnswers);
    exercise.bestFeedback = this.state.exercise.bestFeedback;
    exercise.id = this.state.exercise.id || undefined;

    if (this.state.exercise.altAnswers.length) {
      exercise.altAnswers = createRegex(this.state.exercise.altAnswers);
      exercise.altFeedback = this.state.exercise.altFeedback;
    }

    if (this.state.exercise.question.length && this.state.exercise.bestAnswers.length) {
      if (!this.state.updating) {
        Actions.createExercise(exercise);
        this.props.onComplete();
        toastr['success']('Your new exercise has been created');
      } else {
        console.log(exercise.id);
        Actions.updateExercise(exercise);
        this.props.onComplete();
        toastr['success']('Your exercise has been updated');
      }
    } else {
      toastr['warning']('Make sure you have a question and answer(s)');
    }

    function createRegex(value) {
      var strippedOfSpacesAndPunc = value.replace(/ |\,|\.|\;/g, '').toLowerCase();
      return "(" + strippedOfSpacesAndPunc + ")";
    }
  },

  handleCancel: function handleCancel(event) {
    event.preventDefault();
    console.log("cancel clicked");
    this.props.onComplete();
  }

});

module.exports = ShortAnswerCreation;

},{"../../actions":1,"../../stores/AuthStore":46,"../../stores/LessonConfigStore":48,"./TextInput.jsx":15,"./Textarea.jsx":16,"lodash":"lodash","react":"react","react-router":"react-router","reflux":"reflux"}],15:[function(require,module,exports){
'use strict';

var React = require('react');

var TextInput = React.createClass({
  displayName: 'TextInput',

  propTypes: {
    wrapperClass: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    id: React.PropTypes.string,
    ref: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    key: React.PropTypes.number
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: this.props.wrapperClass },
      React.createElement(
        'label',
        { htmlFor: this.props.name },
        React.createElement(
          'strong',
          null,
          this.props.label
        )
      ),
      React.createElement('input', { id: this.props.id,
        className: 'form-control',
        name: this.props.name,
        type: 'text',
        ref: this.props.name,
        key: this.props.key,
        value: this.props.value,
        onChange: this.props.onChange,
        placeholder: this.props.placeholder })
    );
  }
});

module.exports = TextInput;

},{"react":"react"}],16:[function(require,module,exports){
"use strict";

var React = require('react');

var Textarea = React.createClass({
  displayName: "Textarea",

  propTypes: {
    wrapperClass: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    id: React.PropTypes.string,
    ref: React.PropTypes.string,
    value: React.PropTypes.string,
    key: React.PropTypes.number
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: this.props.wrapperClass },
      React.createElement(
        "label",
        { htmlFor: this.props.name },
        this.props.label
      ),
      React.createElement("textarea", { id: this.props.id,
        className: "form-control",
        name: this.props.name,
        key: this.props.key,
        rows: "2",
        ref: this.props.name,
        value: this.props.value,
        onChange: this.props.onChange })
    );
  }
});

module.exports = Textarea;

},{"react":"react"}],17:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;
var Route = Router.Route;

var TrueFalse = React.createClass({
  displayName: 'TrueFalse',

  getInitialState: function getInitialState() {
    var loadedExercise = this.props.exercise;

    return {
      exercise: {
        question: loadedExercise.question || "No question provided",
        correctOption: loadedExercise.correctOption || "No correct answer chosen",
        feedbackTrue: loadedExercise.feedbackTrue || "No feedback provided",
        feedbackFalse: loadedExercise.feedbackFalse || "No feedback provided"
      },
      outcome: null
    };
  },

  handleClick: function handleClick(clickedOpt) {
    console.log(clickedOpt);
    if (clickedOpt === "true") {
      this.setState({ outcome: true });
    } else {
      this.setState({ outcome: false });
    }
  },

  render: function render() {
    var view;

    switch (this.state.outcome) {
      case false:
        view = React.createElement(
          'div',
          { className: 'container-fluid' },
          React.createElement(
            'div',
            { className: 'modal-dialog' },
            React.createElement(
              'div',
              { className: 'modal-content' },
              React.createElement(
                'div',
                { className: 'modal-header' },
                React.createElement(
                  'h3',
                  null,
                  React.createElement(
                    'span',
                    { className: 'label label-warning text-center', id: 'qid' },
                    React.createElement('i', { className: 'fa fa-thumbs-down fa-lg' })
                  ),
                  'Incorrect'
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-body' },
                React.createElement(
                  'div',
                  { className: 'col-xs-10 col-xs-offset-2' },
                  React.createElement(
                    'blockquote',
                    null,
                    React.createElement(
                      'p',
                      null,
                      this.state.exercise.negFeedback ? this.state.exercise.negFeedback : null
                    )
                  )
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-footer' },
                React.createElement(
                  'button',
                  { className: 'btn btn-success', onClick: this.props.onComplete },
                  'Continue Video'
                )
              )
            )
          )
        );
        break;
      case true:
        view = React.createElement(
          'div',
          { className: 'container-fluid' },
          React.createElement(
            'div',
            { className: 'modal-dialog' },
            React.createElement(
              'div',
              { className: 'modal-content' },
              React.createElement(
                'div',
                { className: 'modal-header' },
                React.createElement(
                  'h3',
                  null,
                  React.createElement(
                    'span',
                    { className: 'label label-success text-center', id: 'qid' },
                    React.createElement('i', { className: 'fa fa-thumbs-up fa-lg' })
                  ),
                  'Correct!'
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-body' },
                React.createElement(
                  'div',
                  { className: 'col-xs-10 col-xs-offset-2' },
                  React.createElement(
                    'blockquote',
                    null,
                    this.state.exercise.posFeedback ? this.state.exercise.posFeedback : null
                  )
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-footer' },
                React.createElement(
                  'button',
                  { className: 'btn btn-success', onClick: this.props.onComplete },
                  'Continue Video'
                )
              )
            )
          )
        );
        break;
      default:
        view = React.createElement(
          'div',
          { className: 'container-fluid' },
          React.createElement(
            'div',
            { className: 'modal-dialog' },
            React.createElement(
              'div',
              { className: 'modal-content' },
              React.createElement(
                'div',
                { className: 'modal-header' },
                React.createElement(
                  'h4',
                  null,
                  React.createElement(
                    'span',
                    { className: 'label label-default', id: 'qid' },
                    React.createElement('i', { className: 'fa fa-question-circle fa-lg' })
                  ),
                  this.state.exercise.question
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-body' },
                React.createElement(
                  'div',
                  { className: 'col-xs-3 col-xs-offset-5' },
                  React.createElement(
                    'div',
                    { id: 'loadbar' },
                    React.createElement('div', { className: 'blockG', id: 'rotateG_01' }),
                    React.createElement('div', { className: 'blockG', id: 'rotateG_02' }),
                    React.createElement('div', { className: 'blockG', id: 'rotateG_03' }),
                    React.createElement('div', { className: 'blockG', id: 'rotateG_04' }),
                    React.createElement('div', { className: 'blockG', id: 'rotateG_05' }),
                    React.createElement('div', { className: 'blockG', id: 'rotateG_06' }),
                    React.createElement('div', { className: 'blockG', id: 'rotateG_07' }),
                    React.createElement('div', { className: 'blockG', id: 'rotateG_08' })
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'quiz', id: 'quiz', 'data-toggle': 'buttons' },
                  React.createElement(
                    'label',
                    { onClick: this.handleClick.bind(null, "true"), className: 'element-animation1 btn btn-lg btn-primary btn-block' },
                    React.createElement(
                      'span',
                      { className: 'btn-label' },
                      React.createElement('i', { className: 'glyphicon glyphicon-chevron-right' })
                    ),
                    React.createElement('input', { type: 'radio', name: 'q_answer', ref: 'true', value: 'true' }),
                    'TRUE'
                  ),
                  React.createElement(
                    'label',
                    { onClick: this.handleClick.bind(null, "false"), className: 'element-animation1 btn btn-lg btn-primary btn-block' },
                    React.createElement(
                      'span',
                      { className: 'btn-label' },
                      React.createElement('i', { className: 'glyphicon glyphicon-chevron-right' })
                    ),
                    React.createElement('input', { type: 'radio', name: 'q_answer', ref: 'false', value: 'false' }),
                    'FALSE'
                  )
                )
              ),
              React.createElement(
                'div',
                { className: 'modal-footer text-muted' },
                React.createElement('span', { id: 'answer' })
              )
            )
          )
        );

    }
    return React.createElement(
      'div',
      null,
      view
    );
  }
});

module.exports = TrueFalse;
/*end header*/ /*end modal-content*/ /*end modal-dialog*/ /*end modal-content*/ /*end modal-dialog*/ /*end header*/ /*end modal-body*/ /*end footer*/ /*end modal-content*/ /*end modal-dialog*/

},{"react":"react","react-router":"react-router","reflux":"reflux"}],18:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;
var AuthStore = require('../../stores/AuthStore');
var LessonConfigStore = require('../../stores/LessonConfigStore');
var Actions = require('../../actions');
var Select = require('react-select');
var _ = require('lodash');

var TrueFalseCreation = React.createClass({
  displayName: 'TrueFalseCreation',

  mixins: [Reflux.connect(AuthStore, "auth"), Reflux.connect(LessonConfigStore, "lesson"), Navigation],

  getInitialState: function getInitialState() {
    var loadedState = this.props.exerciseState || {};
    return {
      exercise: {
        question: loadedState.question || "",
        correctOption: loadedState.correctOption || undefined,
        feedbackTrue: loadedState.feedbackTrue || "",
        feedbackFalse: loadedState.feedbackFalse || ""
      }
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var loadedState = nextProps.exerciseState;
    console.log(loadedState);
    this.setState({
      exercise: {
        question: loadedState.question || "",
        correctOption: loadedState.correctOption || undefined,
        feedbackTrue: loadedState.feedbackTrue || "",
        feedbackFalse: loadedState.feedbackFalse || ""
      }
    });
  },

  setExerciseState: function setExerciseState(event) {
    var field = event.target.name;
    console.log(field, event.target.value);
    this.state.exercise[field] = event.target.value;
    return this.setState({ exercise: this.state.exercise });
  },

  render: function render() {
    console.log(this.state.exercise);
    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'div',
        { className: 'modal-dialog' },
        React.createElement(
          'div',
          { className: 'modal-content' },
          React.createElement(
            'div',
            { className: 'modal-header' },
            React.createElement(
              'h3',
              null,
              'Create/Update a True-False Question'
            )
          ),
          React.createElement(
            'div',
            { className: 'modal-body' },
            React.createElement(
              'form',
              { name: 'trueFalseForm', onSubmit: this.handleSubmit },
              React.createElement(
                'h5',
                null,
                'Write a statement which is true or false'
              ),
              React.createElement(
                'div',
                { className: 'form-group' },
                React.createElement('input', {
                  ref: 'question',
                  className: 'form-control',
                  name: 'question',
                  type: 'text',
                  value: this.state.exercise.question,
                  onChange: this.setExerciseState,
                  placeholder: 'Question' })
              ),
              React.createElement(
                'div',
                { className: 'form-group' },
                React.createElement(
                  'label',
                  { htmlFor: 'feedbackTrue' },
                  'Feedback if the user selects "true":'
                ),
                React.createElement('textarea', {
                  id: 'feedbackTrue',
                  className: 'form-control',
                  rows: '2',
                  name: 'feedbackTrue',
                  value: this.state.exercise.feedbackTrue,
                  onChange: this.setExerciseState,
                  ref: 'feedbackTrue' })
              ),
              React.createElement(
                'div',
                { className: 'form-group' },
                React.createElement(
                  'label',
                  { htmlFor: 'feedbackFalse' },
                  'Feedback if the user selects "false":'
                ),
                React.createElement('textarea', {
                  id: 'feedbackFalse',
                  className: 'form-control',
                  rows: '2',
                  name: 'feedbackFalse',
                  value: this.state.exercise.feedbackFalse,
                  onChange: this.setExerciseState,
                  ref: 'feedbackFalse' })
              ),
              React.createElement(
                'div',
                { onChange: this.checkHandle, className: 'correct-answer-label' },
                React.createElement(
                  'span',
                  { className: 'correct-answer-label' },
                  React.createElement(
                    'strong',
                    null,
                    'Indicate the correct answer: '
                  )
                ),
                React.createElement(
                  'label',
                  { htmlFor: 'correct1', className: 'radio-inline' },
                  React.createElement('input', { ref: 'correct1', type: 'radio', name: 'correct', value: "true",
                    defaultChecked: this.state.exercise.correctOption === "true" }),
                  'True'
                ),
                React.createElement(
                  'label',
                  { htmlFor: 'correct2', className: 'radio-inline' },
                  React.createElement('input', { ref: 'correct2', type: 'radio', name: 'correct', value: "false",
                    defaultChecked: this.state.exercise.correctOption === "false" }),
                  'False'
                )
              ),
              React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                  'div',
                  { className: 'col-md-offset-6' },
                  React.createElement(
                    'button',
                    { type: 'submit', onClick: this.handleSubmit, className: 'signup-cancel-btn btn btn-primary margin-right' },
                    'Save / Update'
                  ),
                  React.createElement(
                    'button',
                    { onClick: this.handleCancel, className: ' btn btn-default' },
                    'Cancel'
                  )
                )
              )
            )
          )
        )
      )
    );
  },

  checkHandle: function checkHandle(event) {
    this.state.exercise.correctOption = event.target.value;
    this.setState({ exercise: this.state.exercise });
  },

  handleCancel: function handleCancel(event) {
    event.preventDefault();
    console.log("cancel clicked");
    this.props.onComplete();
  },

  handleSubmit: function handleSubmit(event) {
    event.preventDefault();

    var exercise = {};
    exercise.type = "truefalse";
    exercise.time = videojs("#attachmentVideo").currentTime();
    exercise.question = this.state.exercise.question;
    exercise.feedbackTrue = this.state.exercise.feedbackTrue;
    exercise.feedbackFalse = this.state.exercise.feedbackFalse;
    exercise.correctOption = this.state.exercise.correctOption;

    if (exercise.question.length && exercise.correctOption !== undefined) {
      Actions.createExercise(exercise);
      this.props.onComplete();
    } else {
      toastr['warning']('Make sure you have a question');
    }
  },

  onChange: function onChange(event, user) {
    this.setState({ user: user });
  }
});

module.exports = TrueFalseCreation;

},{"../../actions":1,"../../stores/AuthStore":46,"../../stores/LessonConfigStore":48,"lodash":"lodash","react":"react","react-router":"react-router","react-select":71,"reflux":"reflux"}],19:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var AuthStore = require('../../stores/AuthStore.js');
var ExerciseSetup = require('./exerciseSetup.jsx');
var VideoBox = require('../lesson/VideoBox.jsx');

var EditView = React.createClass({
  displayName: 'EditView',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(VideoBox, null),
      React.createElement(ExerciseSetup, null)
    );
  }
});

module.exports = EditView;

},{"../../stores/AuthStore.js":46,"../lesson/VideoBox.jsx":26,"./exerciseSetup.jsx":20,"react":"react","react-router":"react-router","reflux":"reflux"}],20:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;
var AuthStore = require('../../stores/AuthStore');
var Actions = require('../../actions');
var Select = require('react-select');

var exerciseSetup = React.createClass({
  displayName: 'exerciseSetup',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Set up the exercises'
      )
    );
  }

});

module.exports = exerciseSetup;

},{"../../actions":1,"../../stores/AuthStore":46,"react":"react","react-router":"react-router","react-select":71,"reflux":"reflux"}],21:[function(require,module,exports){
"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: "exports",

  render: function render() {
    return React.createElement(
      "div",
      { role: "navigation", className: "navbar-static-bottom footer" },
      React.createElement(
        "div",
        { className: "navbar-text pull-left" },
        React.createElement(
          "p",
          { className: "footerCopy" },
          "© 2015 Team React 5"
        )
      )
    );
  }
});

},{"react":"react"}],22:[function(require,module,exports){
'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Reflux = require('reflux');
var AuthStore = require('../../stores/AuthStore');
var Actions = require('../../actions');
var Navigation = Router.Navigation;

var nav = React.createClass({
  displayName: 'nav',

  mixins: [Reflux.connect(AuthStore, "auth"), Navigation],

  getInitialState: function getInitialState() {},

  componentWillMount: function componentWillMount() {
    Actions.authenticate();
  },

  render: function render() {

    return React.createElement(
      'nav',
      { className: 'navbar navbar-default navbar-static-top' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'navbar-header' },
          React.createElement(
            'button',
            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
            React.createElement(
              'span',
              { className: 'sr-only' },
              'Toggle navigation'
            ),
            React.createElement('span', { className: 'icon-bar' }),
            React.createElement('span', { className: 'icon-bar' }),
            React.createElement('span', { className: 'icon-bar' })
          ),
          React.createElement(
            Link,
            { to: '/', className: 'navbar-brand' },
            'LESSON LINKS'
          )
        ),
        React.createElement(
          'div',
          { id: 'navbar', className: 'collapse navbar-collapse' },
          React.createElement(
            'ul',
            { className: 'nav navbar-nav navbar-right' },
            React.createElement(
              'li',
              { className: 'hoverNavSpecial' },
              this.state.auth && this.state.auth.loggedIn && React.createElement(
                Link,
                { activeClassName: 'active', className: 'navCreate', to: '/add-lesson' },
                'Create Lesson'
              )
            ),
            React.createElement(
              'li',
              { className: 'hoverNavSpecial' },
              this.state.auth && this.state.auth.loggedIn && React.createElement(
                Link,
                { activeClassName: 'active', to: '/library' },
                'Library'
              )
            ),
            React.createElement(
              'li',
              { className: 'hoverNavSpecial' },
              this.state.auth && this.state.auth.loggedIn && React.createElement(
                'a',
                { onClick: this.handleLogout },
                'Logout'
              )
            ),
            this.state.auth && !this.state.auth.loggedIn && React.createElement(
              'li',
              { className: 'dropdown hoverNavSpecial2', id: 'menuLogin' },
              React.createElement(
                'a',
                { className: 'dropdown-toggle', style: { zIndex: 20 }, href: '#', 'data-toggle': 'dropdown', id: 'navLogin' },
                'Login'
              ),
              React.createElement(
                'div',
                { className: 'dropdown-menu' },
                React.createElement(
                  'ul',
                  { style: { padding: 0, listStyleType: "none" } },
                  React.createElement(
                    'li',
                    null,
                    React.createElement(
                      'form',
                      { className: 'form', id: 'formLogin' },
                      React.createElement(
                        'div',
                        { className: 'form-group form-group-md' },
                        React.createElement('input', { ref: 'email', type: 'text', className: 'form-control', placeholder: 'Email' })
                      ),
                      React.createElement('br', null),
                      React.createElement(
                        'div',
                        { className: 'form-group form-group-md' },
                        React.createElement('input', { ref: 'password', type: 'password', className: 'form-control', placeholder: 'Password' })
                      ),
                      React.createElement('br', null),
                      React.createElement(
                        'button',
                        { type: 'button', id: 'btnLogin', className: 'btn btn-default', style: { width: "100%" }, onClick: this.handleSubmit },
                        'Login'
                      ),
                      React.createElement(
                        Link,
                        { to: '/register', className: 'signup-link', 'data-toggle': 'dropdown' },
                        'Create new account'
                      )
                    )
                  ),
                  React.createElement(
                    'p',
                    { style: { marginLeft: "100px !important" } },
                    'OR'
                  ),
                  React.createElement('hr', null),
                  React.createElement(
                    'li',
                    { style: { opacity: 0.7, marginTop: 10 } },
                    React.createElement(
                      'a',
                      { className: 'btn btn-block btn-social btn-google', href: '/api/google' },
                      React.createElement('i', { className: 'fa fa-google' }),
                      'Sign in with Google'
                    ),
                    React.createElement(
                      'a',
                      { className: 'btn btn-block btn-social btn-facebook', href: '/api/facebook' },
                      React.createElement('i', { className: 'fa fa-facebook' }),
                      'Sign in with Facebook'
                    ),
                    React.createElement(
                      'a',
                      { className: 'btn btn-block btn-social btn-twitter', href: '/api/twitter' },
                      React.createElement('i', { className: 'fa fa-twitter' }),
                      'Sign in with Twitter'
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
  },

  handleLogout: function handleLogout() {
    event.preventDefault();
    Actions.logout();
    this.transitionTo('/');
  },

  handleSubmit: function handleSubmit(event) {
    event.preventDefault();

    var email = this.refs.email.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;

    var self = this;
    Actions.login({ sourceComponent: this, email: email, password: password }).then(function (res) {
      console.log("User logged in: ", res);
      self.refs.email.getDOMNode().value = "";
      self.refs.password.getDOMNode().value = "";
    })['catch'](function (res) {
      console.log("Error", res);
    });
  }
});

module.exports = nav;

},{"../../actions":1,"../../stores/AuthStore":46,"react":"react","react-router":"react-router","reflux":"reflux"}],23:[function(require,module,exports){
'use strict';

var React = require('react');
var CommentsView = require('./comments-view/CommentsView.jsx');
var Content = React.createClass({
  displayName: 'Content',

  render: function render() {
    return React.createElement(
      'div',
      { id: 'content col-lg-12' },
      React.createElement(CommentsView, null)
    );
  }

});

module.exports = Content;

},{"./comments-view/CommentsView.jsx":32,"react":"react"}],24:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var _ = require('lodash');
var Actions = require('../../actions');

var LessonStore = require('../../stores/lesson-store.js');
var AuthStore = require('../../stores/AuthStore');

var VideoPlayer = require('./VideoPlayer.jsx');
var Content = require('./Content.jsx');
var LoginOverlay = require('./LoginOverlay.jsx');

var MultiChoice = require('../basicExercises/Multichoice.jsx');
var TrueFalse = require('../basicExercises/TrueFalse.jsx');

var LessonView = React.createClass({
  displayName: 'LessonView',

  mixins: [Router.Navigation, Reflux.connect(LessonStore, "lesson"), Reflux.connect(AuthStore, 'auth')],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function getInitialState() {
    return {
      exercise: null
    };
  },

  componentDidMount: function componentDidMount() {
    var self = this;
    Actions.getUser(function () {
      Actions.fetchLesson({ sourceComponent: self, url: self.context.router.getCurrentParams().url });
    });

    //Set up a timer to fetch the lesson again every 10 seconds to get any new comments
    this.timer = setInterval(function () {
      Actions.fetchLesson({
        sourceComponent: self, url: self.context.router.getCurrentParams().url
      });
    }, 30000);
  },

  componentWillUnmount: function componentWillUnmount() {
    //Stops the lesson from continuing to fetch new comments after leaving the page
    clearInterval(this.timer);
  },

  loadExercise: function loadExercise(exercise) {
    console.log(exercise);
    this.setState({ exercise: exercise });
  },

  onExerciseCompleted: function onExerciseCompleted() {
    this.setState({ exercise: null });
    var player = videojs('attachmentVideo');
    player.play();
  },

  mapExerciseType: function mapExerciseType() {
    var exerciseTypeMap = {
      'multiplechoice': React.createElement(MultiChoice, { exercise: this.state.exercise.exercise || {}, onComplete: this.onExerciseCompleted }),
      'truefalse': React.createElement(TrueFalse, { exercise: this.state.exercise.exercise || {}, onComplete: this.onExerciseCompleted })
    };

    return exerciseTypeMap[this.state.exercise.text];
  },

  render: function render() {

    if (this.state.lesson) {
      var overlay = this.state.auth && this.state.auth.user ? null : React.createElement(LoginOverlay, null);

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { id: 'lesson-view' },
          overlay,
          React.createElement(
            'div',
            { id: 'video-box', className: 'col-lg-12' },
            React.createElement(VideoPlayer, { onExerciseReached: this.loadExercise })
          ),
          this.state.exercise ? this.mapExerciseType() : React.createElement(Content, null)
        )
      );
    } else {
      return null;
    }
  }
});

module.exports = LessonView;

},{"../../actions":1,"../../stores/AuthStore":46,"../../stores/lesson-store.js":50,"../basicExercises/Multichoice.jsx":12,"../basicExercises/TrueFalse.jsx":17,"./Content.jsx":23,"./LoginOverlay.jsx":25,"./VideoPlayer.jsx":27,"lodash":"lodash","react":"react","react-router":"react-router","reflux":"reflux"}],25:[function(require,module,exports){
"use strict";

var React = require('react');

var LoginOverlay = React.createClass({
  displayName: "LoginOverlay",

  render: function render() {
    return React.createElement(
      "div",
      { className: "login-overlay" },
      React.createElement(
        "div",
        { className: "arrow-box" },
        React.createElement(
          "p",
          { className: "arrow-box-message" },
          "Login or Signup to view this lesson!"
        )
      )
    );
  }

});

module.exports = LoginOverlay;

},{"react":"react"}],26:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var LessonStore = require('../../stores/lesson-store.js');

var VideoPlayer = require('./VideoPlayer.jsx');

var VideoBox = React.createClass({
  displayName: 'VideoBox',

  render: function render() {
    return React.createElement(
      'div',
      { id: 'video-box', className: 'col-lg-12' },
      React.createElement(VideoPlayer, null)
    );
  }

});

module.exports = VideoBox;

},{"../../stores/lesson-store.js":50,"./VideoPlayer.jsx":27,"react":"react","reflux":"reflux"}],27:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');

var _ = require('lodash');
var LessonStore = require('../../stores/lesson-store');

var VideoPlayer = React.createClass({
  displayName: 'VideoPlayer',

  mixins: [Reflux.connect(LessonStore, "lesson")],
  getInitialState: function getInitialState() {
    return {
      videoSetupCompleted: false
    };
  },

  componentDidMount: function componentDidMount() {
    Actions.triggerLessonStore();
  },

  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
    if (this.state.videoSetupCompleted) {
      var player = videojs('attachmentVideo');
      var pastComments = player.markers.getMarkers();
      var newComments = _.difference(nextState.lesson.comments, pastComments);
      player.markers.add(newComments);
    }
  },

  componentDidUpdate: function componentDidUpdate() {
    if (!this.state.videoSetupCompleted && this.state.lesson) {
      var comments = this.state.lesson.comments,
          exercises = this.state.lesson.exercises;
      exercises.forEach(function (exerciseInfo) {
        exerciseInfo.text = exerciseInfo.exercise.type;
      });

      var player = this.videoSetup(_.union(comments, exercises));
      this.setState({
        videoSetupCompleted: true,
        currentComments: this.state.lesson.comments
      });
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    videojs('attachmentVideo').dispose();
  },

  videoSetup: function videoSetup(comments) {
    var self = this;

    // initialize video.js
    var player = videojs('attachmentVideo');
    // setup markers
    player.markers({
      markers: comments,
      markerStyle: function markerStyle(marker) {
        if (marker.replies) {
          // indicates the marker is for a comment
          return {
            'width': '7px',
            'border-radius': '30%',
            'background-color': 'red'
          };
        } else {
          return {
            'width': '7px',
            'border-radius': '30%',
            'background-color': 'yellow'
          };
        }
      },
      markerTip: {
        display: true,
        text: function text(marker) {
          if (marker.author) {
            return marker.author.name;
          } else {
            return marker.text;
          }
        },
        time: function time(marker) {
          return marker.time;
        }
      },
      onMarkerReached: function onMarkerReached(marker) {
        if (!marker.replies) {
          player.pause();
          self.props.onExerciseReached(marker);
        }
      }
    });
    return player;
  },
  render: function render() {

    console.log("test", this.state.lesson);

    return this.state.lesson && this.state.lesson.video_url ? React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'div',
        { id: 'test' },
        React.createElement(
          'div',
          { className: 'col-md-10 video-wrapper' },
          React.createElement('video', { id: 'attachmentVideo',
            className: 'video-js vjs-default-skin',
            width: 'auto', height: 'auto',
            controls: true, preload: 'auto',
            'data-setup': '{ "techOrder": ["youtube"], "src": "' + this.state.lesson.video_url + '" }' })
        )
      )
    ) : null;
  }
});

module.exports = VideoPlayer;

},{"../../actions":1,"../../stores/lesson-store":50,"lodash":"lodash","react":"react","reflux":"reflux"}],28:[function(require,module,exports){
'use strict';

var React = require('react');
var CommentContent = require('./CommentContent.jsx');
var ReplySubmissionBox = require('./ReplySubmissionBox.jsx');
var ReplyList = require('./ReplyList.jsx');

var Comment = React.createClass({
  displayName: 'Comment',

  getInitialState: function getInitialState() {
    return {
      showReplyForm: false
    };
  },

  onToggleReplyForm: function onToggleReplyForm(e) {
    e.preventDefault();
    this.setState({ showReplyForm: !this.state.showReplyForm });
  },
  render: function render() {

    return React.createElement(
      'li',
      { className: 'comment-box' },
      React.createElement(CommentContent, { comment: this.props.comment, toggleReplyForm: this.onToggleReplyForm }),
      React.createElement(ReplyList, { replies: this.props.comment.replies }),
      React.createElement(ReplySubmissionBox, { id: 'reply-submission-box',
        comment: this.props.comment,
        showReplyForm: this.state.showReplyForm,
        toggleReplyForm: this.onToggleReplyForm })
    );
  }
});

module.exports = Comment;

},{"./CommentContent.jsx":29,"./ReplyList.jsx":35,"./ReplySubmissionBox.jsx":36,"react":"react"}],29:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../../actions');
var LessonStore = require('../../../stores/lesson-store');

var CommentContent = React.createClass({
  displayName: 'CommentContent',

  mixins: [Reflux.connect(LessonStore)],

  getInitialState: function getInitialState() {
    return {
      liked: false,
      starred: false
    };
  },

  componentWillMount: function componentWillMount() {
    //grabs pre-exiting data about the comment, such as whether the user has liked it or whether it is starred
    this.state.user = window.currentUser;
    this.state.liked = this.props.comment.likes.indexOf(this.state.user._id) >= 0;
    this.state.starred = this.props.comment.star;
  },

  toggleLikeButton: function toggleLikeButton(e) {
    e.preventDefault();
    this.setState({ liked: !this.state.liked });
  },

  toggleStarButton: function toggleStarButton(e) {
    e.preventDefault();
    this.setState({ starred: !this.state.starred });
  },

  likeComment: function likeComment(e) {
    e.preventDefault();
    Actions.likeComment(this.props.comment._id, this.state.user._id);
    this.toggleLikeButton(e);
  },

  unlikeComment: function unlikeComment(e) {
    e.preventDefault();
    Actions.unlikeComment(this.props.comment._id, this.state.user._id);
    this.toggleLikeButton(e);
  },

  starComment: function starComment(e) {
    e.preventDefault();
    Actions.starComment(this.props.comment._id, this.state.user._id);
    this.toggleStarButton(e);
  },

  deleteComment: function deleteComment(e) {
    e.preventDefault();
    Actions.deleteComment(this.props.comment._id);
  },

  getTimestamp: function getTimestamp(time) {
    //OPTION A (Youtube format)
    //e.g. 00:23
    //e.g. 02:23:01

    var hours = Math.floor(time / (60 * 60));
    var minutes = Math.floor(time / 60 % 60);
    var seconds = Math.floor(time % 60);

    var mins = minutes > 9 ? "" + minutes : "0" + minutes;
    var secs = seconds > 9 ? "" + seconds : "0" + seconds;

    var timestamp = "";
    if (hours > 0) timestamp = hours + ":" + mins + ":" + secs;else if (minutes > 0) timestamp = mins + ":" + secs;else timestamp += mins + ":" + secs;

    return timestamp;

    //OPTION B
    //e.g. 2 hours 40 minutes and 21 seconds
    //e.g. 1 minute and 20 seconds
    //
    // var hours = Math.floor(time/(60*60))
    // var minutes = Math.floor(time/60)
    // var seconds = Math.floor(time%60)
    //
    // var hrs = ""
    // var mins = ""
    // var secs = ""
    //
    // if(hours===1) hrs = "" + hours + " hour "
    // else hrs = "" + hours + " hours "

    // if(minutes===1) mins = "" + minutes + " minute "
    // else mins = "" + minutes + " minutes "

    // if(seconds===1) secs = "" + seconds + " second "
    // else secs = "" + seconds + " seconds "

    // var timestamp = "";
    // if(hours>0) timestamp = hrs + mins + " and " + secs;
    // else if(minutes>0) timestamp = mins + " and " + secs;
    // else  timestamp += secs;

    //return timestamp;
  },

  gotoTimestamp: function gotoTimestamp() {
    //TODO
    console.log("TODO: build out the gotoTimestamp function in CommentContent.jsx so this click makes the player go to this time");
  },

  render: function render() {

    if (LessonStore.lesson) {

      var teacher = LessonStore.lesson.teacher.id;

      // Empty star button
      // Visible to: - teacher sees it on all comments with 'starred' property set to 'false'
      // What it does: On click, sets the 'starred' property to 'true'
      var emptyStar = this.state.user._id === teacher ? React.createElement(
        'p',
        { className: 'comment-star-button glyphicon glyphicon-star-empty', onClick: this.starComment },
        ' '
      ) : null;

      // Full star button
      // Visible to: - teacher and students sees it on all comments with 'starred' property set to 'true'
      // What it does: On click (only available to the teacher), will set the 'starred' property to 'false'
      var fullStar = this.state.user._id === teacher ? React.createElement(
        'p',
        { className: 'comment-star-button glyphicon glyphicon-star', onClick: this.starComment },
        ' '
      ) : React.createElement(
        'p',
        { className: 'comment-star-button glyphicon glyphicon-star', title: 'The owner of this lesson has approved this post!' },
        ' '
      );

      // Like/Unlike buttons
      // Visible to: - all users (teacher and students). Which button is shown is unique to the user (depending on whether they have liked or unliked that comment)
      // What it does: On click, toggles the the current button (i.e. if click 'like', will add the user to that comments' likes and show 'unlike')
      var likeButton = React.createElement(
        'p',
        { className: 'comment-like-button', onClick: this.unlikeComment },
        'Unlike   ·  '
      );
      var unlikeButton = React.createElement(
        'p',
        { className: 'comment-like-button', onClick: this.likeComment },
        'Like   ·  '
      );

      // Delete button
      // Visible to: - teacher sees it on all comments.
      //             - students see it only on their own comments.
      // What it does: On click, deletes the comment from the database
      var deleteButton = this.state.user._id === teacher || this.state.user._id === this.props.comment.author.id ? React.createElement(
        'p',
        { className: 'comment-delete-button', onClick: this.deleteComment },
        '[Delete]'
      ) : null;

      return React.createElement(
        'div',
        { className: 'comment-content' },
        this.state.starred ? { fullStar: fullStar } : { emptyStar: emptyStar },
        React.createElement(
          'p',
          { className: 'comment-author' },
          this.props.comment.author.name,
          ' '
        ),
        React.createElement(
          'p',
          { className: 'comment-video-timestamp', onClick: this.gotoTimestamp },
          '@ ',
          this.getTimestamp(this.props.comment.time)
        ),
        React.createElement(
          'p',
          { className: 'comment-text' },
          this.props.comment.text,
          ' '
        ),
        React.createElement(
          'div',
          { className: 'comment-toolbar' },
          this.state.liked ? { likeButton: likeButton } : { unlikeButton: unlikeButton },
          React.createElement(
            'p',
            { className: 'comment-reply-button', onClick: this.props.toggleReplyForm },
            'Reply'
          ),
          '    ·  ',
          React.createElement('p', { className: 'comment-like-icon glyphicon glyphicon-thumbs-up' }),
          React.createElement(
            'p',
            { className: 'comment-likes' },
            ' ',
            this.props.comment.likes.length === 0 ? null : this.props.comment.likes.length
          ),
          deleteButton
        )
      );
    } else {
      return null;
    }
  }
});

module.exports = CommentContent;

},{"../../../actions":1,"../../../stores/lesson-store":50,"react":"react","reflux":"reflux"}],30:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Comment = require('./Comment.jsx');
var LessonStore = require('../../../stores/lesson-store');
var _ = require('lodash');

var CommentList = React.createClass({
  displayName: 'CommentList',

  mixins: [Reflux.connect(LessonStore, "lesson")],

  render: function render() {
    if (this.state.lesson && this.state.lesson.comments.length) {
      var that = this;
      var comments = _.sortBy(this.state.lesson.comments, function (o) {
        return o.likes.length;
      }).reverse().filter(function (comment) {
        return comment.time >= 0;
      }).map(function (comment, index) {
        return React.createElement(Comment, { key: comment._id, comment: comment, submitReply: that.props.submitReply });
      });

      return React.createElement(
        'div',
        { id: 'comment-list-container', className: 'panel panel-default' },
        React.createElement(
          'ul',
          { id: 'comment-list', className: 'panel panel-body' },
          comments
        )
      );
    } else {
      return null;
    }
  }
});

module.exports = CommentList;

},{"../../../stores/lesson-store":50,"./Comment.jsx":28,"lodash":"lodash","react":"react","reflux":"reflux"}],31:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../../actions');
var AuthStore = require('../../../stores/AuthStore.js');
// Drop-in replacement for the textarea component which automatically resizes textarea as content changes
// https://github.com/andreypopp/react-textarea-autosize
var Textarea = require('react-textarea-autosize');

var CommentSubmissionBox = React.createClass({
  displayName: 'CommentSubmissionBox',

  mixins: [Reflux.connect(AuthStore, "auth")],

  getInitialState: function getInitialState() {
    return {
      text: '',
      showCommentForm: false
    };
  },

  onInputChange: function onInputChange(e) {
    this.setState({ text: e.target.value });
  },
  onToggleCommentForm: function onToggleCommentForm() {
    this.setState({ showCommentForm: !this.state.showCommentForm });
  },
  onFormFocus: function onFormFocus() {
    if (this.state.text === '') {
      var player = videojs('attachmentVideo');
      player.pause();
      this.onToggleCommentForm();
    }
  },
  onFormBlur: function onFormBlur() {
    if (this.state.text === '') {
      this.onToggleCommentForm();
    }
  },

  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    Actions.submitComment({
      text: this.state.text,
      time: videojs('attachmentVideo').currentTime(),
      replies: [],
      likes: [],
      author: {
        name: window.currentUser.local.name,
        id: window.currentUser._id
      }
    });

    this.setState({
      text: ''
    });
    this.onToggleCommentForm();
  },
  render: function render() {
    return React.createElement(
      'div',
      { id: 'comment-creation-box', className: 'panel panel-default' },
      React.createElement(
        'div',
        { className: 'panel panel-body comment-creation-form' },
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit, className: 'comment-form-box' },
          React.createElement(Textarea, {
            className: 'form-control comment-form',
            placeholder: 'Share your questions...',
            value: this.state.text,
            onChange: this.onInputChange,
            onFocus: this.onFormFocus,
            onBlur: this.onFormBlur }),
          this.state.showCommentForm ? React.createElement(
            'div',
            null,
            ' ',
            React.createElement('br', null),
            ' ',
            React.createElement(
              'button',
              { type: 'submit', className: 'btn btn-primary btn-sm pull-right submit-comment-btn', onClick: this.handleSubmit },
              'Submit'
            )
          ) : null
        )
      )
    );
  }

});

module.exports = CommentSubmissionBox;

},{"../../../actions":1,"../../../stores/AuthStore.js":46,"react":"react","react-textarea-autosize":76,"reflux":"reflux"}],32:[function(require,module,exports){
'use strict';

var React = require('react');
var CommentList = require('./CommentList.jsx');
var CommentSubmissionBox = require('./CommentSubmissionBox.jsx');
var VideoNavBar = require('./VideoNavBar.jsx');

var CommentsView = React.createClass({
  displayName: 'CommentsView',

  render: function render() {

    return React.createElement(
      'div',
      { className: 'comments-view col-lg-11 col-lg-offset-1' },
      React.createElement(CommentSubmissionBox, null),
      React.createElement(CommentList, null)
    );
  }

});

module.exports = CommentsView;

},{"./CommentList.jsx":30,"./CommentSubmissionBox.jsx":31,"./VideoNavBar.jsx":37,"react":"react"}],33:[function(require,module,exports){
'use strict';

var React = require('react');
var ReplyContent = require('./ReplyContent.jsx');

var Reply = React.createClass({
  displayName: 'Reply',

  render: function render() {
    return React.createElement(
      'li',
      { className: 'reply' },
      React.createElement(ReplyContent, { reply: this.props.reply })
    );
  }

});

module.exports = Reply;

},{"./ReplyContent.jsx":34,"react":"react"}],34:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../../actions');
var LessonStore = require('../../../stores/lesson-store');

var ReplyContent = React.createClass({
  displayName: 'ReplyContent',

  mixins: [Reflux.connect(LessonStore)],

  getInitialState: function getInitialState() {
    return {
      liked: false,
      starred: false
    };
  },

  componentWillMount: function componentWillMount() {
    //grabs pre-exiting data about the reply, such as whether the user has liked it or whether it is starred
    this.state.user = window.currentUser;
    this.state.liked = this.props.reply.likes.indexOf(this.state.user._id) >= 0;
    this.state.starred = this.props.reply.star;
  },

  toggleLikeButton: function toggleLikeButton(e) {
    e.preventDefault();
    this.setState({ liked: !this.state.liked });
  },

  toggleStarButton: function toggleStarButton(e) {
    e.preventDefault();
    this.setState({ starred: !this.state.starred });
  },

  likeReply: function likeReply(e) {
    e.preventDefault();
    Actions.likeReply(this.props.reply._id, this.props.reply.parent, this.state.user._id);
    this.toggleLikeButton(e);
  },

  unlikeReply: function unlikeReply(e) {
    e.preventDefault();
    Actions.unlikeReply(this.props.reply._id, this.props.reply.parent, this.state.user._id);
    this.toggleLikeButton(e);
  },

  starReply: function starReply(e) {
    e.preventDefault();
    Actions.starReply(this.props.reply._id, this.props.reply.parent, this.state.user._id);
    this.toggleStarButton(e);
  },

  deleteComment: function deleteComment(e) {
    e.preventDefault();
    Actions.deleteReply(this.props.reply._id, this.props.reply.parent);
  },

  render: function render() {
    if (LessonStore.lesson) {
      var teacher = LessonStore.lesson.teacher.id;

      // Empty star button
      // Visible to: - teacher sees it on all replies with 'starred' property set to 'false'
      // What it does: On click, sets the 'starred' property to 'true'
      var emptyStar = this.state.user._id === teacher ? React.createElement(
        'p',
        { className: 'comment-star-button glyphicon glyphicon-star-empty', onClick: this.starReply },
        ' '
      ) : null;

      // Full star button
      // Visible to: - teacher and students sees it on all replies with 'starred' property set to 'true'
      // What it does: On click (only available to the teacher), will set the 'starred' property to 'false'
      var fullStar = this.state.user._id === teacher ? React.createElement(
        'p',
        { className: 'comment-star-button glyphicon glyphicon-star', onClick: this.starReply },
        ' '
      ) : React.createElement(
        'p',
        { className: 'comment-star-button glyphicon glyphicon-star', title: 'The owner of this lesson has approved this post!' },
        ' '
      );

      // Like/Unlike buttons
      // Visible to: - all users (teacher and students). Which button is shown is unique to the user (depending on whether they have liked or unliked that comment)
      // What it does: On click, toggles the the current button (i.e. if click 'like', will add the user to that comments' likes and show 'unlike')
      var likeButton = React.createElement(
        'p',
        { className: 'comment-like-button', onClick: this.unlikeReply },
        'Unlike   ·  '
      );
      var unlikeButton = React.createElement(
        'p',
        { className: 'comment-like-button', onClick: this.likeReply },
        'Like   ·  '
      );

      // Delete button
      // Visible to: - teacher sees it on all comments.
      //             - students see it only on their own comments.
      // What it does: On click, deletes the comment from the database
      var deleteButton = this.state.user._id === teacher || this.state.user._id === this.props.reply.author.id ? React.createElement(
        'p',
        { className: 'comment-delete-button', onClick: this.deleteComment },
        '[Delete]'
      ) : null;

      return React.createElement(
        'div',
        { className: 'reply-content' },
        this.state.starred ? { fullStar: fullStar } : { emptyStar: emptyStar },
        React.createElement(
          'p',
          { className: 'comment-author' },
          this.props.reply.author.name
        ),
        React.createElement(
          'p',
          { className: 'comment-text' },
          this.props.reply.text
        ),
        React.createElement(
          'div',
          { className: 'comment-toolbar' },
          this.state.liked ? { likeButton: likeButton } : { unlikeButton: unlikeButton },
          React.createElement('p', { className: 'comment-like-icon glyphicon glyphicon-thumbs-up' }),
          React.createElement(
            'p',
            { className: 'comment-likes' },
            ' ',
            this.props.reply.likes.length === 0 ? null : this.props.reply.likes.length
          ),
          deleteButton
        )
      );
    }
  }

});

module.exports = ReplyContent;

},{"../../../actions":1,"../../../stores/lesson-store":50,"react":"react","reflux":"reflux"}],35:[function(require,module,exports){
'use strict';

var React = require('react');
var Reply = require('./Reply.jsx');

var ReplyList = React.createClass({
  displayName: 'ReplyList',

  render: function render() {
    var replies = this.props.replies.map(function (reply, index) {
      return React.createElement(Reply, { key: reply._id, reply: reply });
    });
    return React.createElement(
      'ul',
      { id: 'reply-list' },
      replies
    );
  }

});

module.exports = ReplyList;

},{"./Reply.jsx":33,"react":"react"}],36:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../../actions');
// Drop-in replacement for the textarea component which automatically resizes textarea as content changes
// https://github.com/andreypopp/react-textarea-autosize
var Textarea = require('react-textarea-autosize');

var ReplySubmissionBox = React.createClass({
  displayName: 'ReplySubmissionBox',

  getInitialState: function getInitialState() {
    return {
      text: ''
    };
  },
  componentDidUpdate: function componentDidUpdate() {
    if (this.props.showReplyForm) {
      React.findDOMNode(this.refs.test).focus();
    }
  },
  onChange: function onChange(e) {
    this.setState({ text: e.target.value });
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();

    var replyObj = {
      author: {
        name: window.currentUser.local.name,
        id: window.currentUser._id
      },
      text: this.state.text,
      likes: [],
      star: false,
      parent: this.props.comment._id
    };

    Actions.submitReply(replyObj, this.props.comment._id);

    this.setState({
      text: ''
    });
  },
  render: function render() {
    return React.createElement(
      'div',
      { id: 'reply-creation-box' },
      this.props.showReplyForm ? React.createElement(
        'form',
        { onSubmit: this.handleSubmit, className: 'reply-form-box' },
        React.createElement(Textarea, { className: 'form-control reply-form', onChange: this.onChange, value: this.state.text, ref: 'test' }),
        React.createElement(
          'button',
          { type: 'submit', className: 'btn btn-primary btn-xs pull-right reply-button', onClick: this.handleSubmit },
          'Submit'
        ),
        React.createElement(
          'button',
          { type: 'submit', className: 'btn btn-default btn-xs pull-right reply-button', onClick: this.props.toggleReplyForm },
          'Cancel'
        )
      ) : null
    );
  }

});

module.exports = ReplySubmissionBox;

},{"../../../actions":1,"react":"react","react-textarea-autosize":76,"reflux":"reflux"}],37:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');

var VideoNavBar = React.createClass({
  displayName: 'VideoNavBar',

  render: function render() {
    return React.createElement(
      'div',
      { id: 'video-nav-bar' },
      React.createElement('p', { className: 'glyphicon glyphicon-chevron-left' }),
      'Markers',
      React.createElement('p', { className: 'glyphicon glyphicon-chevron-right' })
    );
  }

});

module.exports = VideoNavBar;

},{"react":"react","reflux":"reflux"}],38:[function(require,module,exports){
'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var LibAddLesson = React.createClass({
  displayName: 'LibAddLesson',

  render: function render() {
    return React.createElement(
      'span',
      { className: 'lib-add-lesson' },
      React.createElement(
        Link,
        { to: '/add-lesson', className: 'addMe' },
        '+'
      )
    );
  }
});

module.exports = LibAddLesson;

},{"react":"react","react-router":"react-router"}],39:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Link = Router.Link;

var LibraryStore = require('../../stores/LibraryStore');
var LibAddLesson = require('./LibAddLesson.jsx');
var LibLessonEntry = require('./LibLessonEntry.jsx');
var AuthStore = require('../../stores/AuthStore');
var Actions = require('../../actions');

var _ = require('lodash');
var Moment = require('moment');

var LibLessonCollection = React.createClass({
  displayName: 'LibLessonCollection',

  mixins: [Reflux.connect(AuthStore, 'auth')],

  render: function render() {
    var owner = this.props.owner;

    var lessons = this.props.lessons.map(function (lesson, index) {
      return React.createElement(LibLessonEntry, { key: index, lesson: lesson });
    });

    return React.createElement(
      'ul',
      { className: 'list-group row', id: 'ulCollection' },
      lessons.length ? { lessons: lessons } : React.createElement(
        'h4',
        { className: 'emptyLibrary' },
        ' No lessons found! '
      )
    );
  }
});

{/* FOR FUTURE ANIMATION STYLING           <img src='../../public/assets/lock.png' />*/}

module.exports = LibLessonCollection;

},{"../../actions":1,"../../stores/AuthStore":46,"../../stores/LibraryStore":49,"./LibAddLesson.jsx":38,"./LibLessonEntry.jsx":40,"lodash":"lodash","moment":69,"react":"react","react-router":"react-router","reflux":"reflux"}],40:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');
var Router = require('react-router');
var Link = Router.Link;
var Navigation = Router.Navigation;

var _ = require('lodash');
var Moment = require('moment');

var LibLessonEntry = React.createClass({
  displayName: 'LibLessonEntry',

  mixins: [Navigation],

  publish: function publish(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("publish clicked!");
    Actions.togglePublish(this.props.lesson);
  },

  deleteLesson: function deleteLesson(e) {
    e.preventDefault();
    e.stopPropagation();
    {/*swal({
       title: "Are you sure?",
       text: "Clicking 'Delete' will remove this lesson from your Library!",
       type: "warning",
       showCancelButton: true,
       confirmButtonColor: "#DD6B55",
       confirmButtonText: "Yes, delete it!",
       closeOnConfirm: false
      },
      function(isConfirm){   
       if (isConfirm) {     
         swal("Deleted!", "This lesson has been removed from your library!");   
       } else {     
         swal("Cancelled", "This lesson will remain in your library!", "error");   
       } 
      });*/}
    Actions.deleteLesson(this.props.lesson);
  },

  gotoConfigure: function gotoConfigure() {
    Actions.sendLesson(this.props.lesson);
    this.transitionTo('/configure');
  },

  gotoLesson: function gotoLesson() {
    this.transitionTo('/' + this.props.lesson.lesson_url);
  },

  render: function render() {
    var lesson = this.props.lesson;

    var commentCount = _.reduce(lesson.comments, function (total, comment) {
      return total + comment.replies.length + 1;
    }, 0);

    var createdDate;
    if (lesson.published_at) {
      createdDate = Moment(lesson.created_at).format('MMMM Do YYYY, h:mm a');
    } else {
      createdDate = 'Not published';
    }

    var video_id = lesson.video_url.split('v=')[1];
    var ampersandPosition = video_id.indexOf('&');
    if (ampersandPosition != -1) {
      video_id = video_id.substring(0, ampersandPosition);
    }

    var publishDisplay = lesson.publish ? React.createElement(
      'li',
      null,
      ' Published on: ',
      createdDate,
      ' '
    ) : React.createElement(
      'li',
      null,
      'Not Published'
    );

    var imgUrl = 'http://img.youtube.com/vi/' + video_id + '/mqdefault.jpg';

    return React.createElement(
      'li',
      { className: 'list-group-item col-md-6 col-xs-12 lib-lesson-entry', onClick: lesson.publish ? this.gotoLesson : this.gotoConfigure },
      React.createElement('img', { className: 'hidden-xs media pull-left videoSnippet', src: imgUrl }),
      React.createElement(
        'ul',
        { className: 'lib-lesson-info list-unstyled' },
        React.createElement(
          'li',
          { className: 'lib-less-title' },
          React.createElement(
            'li',
            { className: 'titleAnchor' },
            lesson.title || 'title not found'
          )
        ),
        React.createElement(
          'li',
          { className: 'lib-less-author' },
          'Author: ',
          lesson.teacher.name || 'anonymous'
        ),
        React.createElement(
          'li',
          { className: 'lib-lesson-stats' },
          'Comments: ',
          commentCount,
          '    Exercises: ',
          lesson.exercises.length
        ),
        React.createElement(
          'li',
          { className: 'pubdate' },
          publishDisplay
        )
      ),
      React.createElement('span', { className: 'fa fa-trash-o pull-right', id: 'trashcan', onClick: this.deleteLesson })
    );
  }

});

module.exports = LibLessonEntry;
/* UNCOMMENT FOR CHART GRAPHIC <span className="fa fa-bar-chart-o pull-right" id="chart"></span>*/

},{"../../actions":1,"lodash":"lodash","moment":69,"react":"react","react-router":"react-router","reflux":"reflux"}],41:[function(require,module,exports){
'use strict';

var React = require('react');
var LibraryStore = require('../../stores/LibraryStore');
var Actions = require('../../actions');

//This is the parent component for the library view. The file Structure is as follows:
//LibraryView
//Library
//Lib Lesson Collection
//LibLessonEntry
//Lib Lesson Collection
//LibLessonEntry

var Library = require('./library.jsx');

var LibraryView = React.createClass({
  displayName: 'LibraryView',

  render: function render() {
    return React.createElement(
      'div',
      { id: 'library-view' },
      React.createElement(Library, null)
    );
  }
});

module.exports = LibraryView;

},{"../../actions":1,"../../stores/LibraryStore":49,"./library.jsx":42,"react":"react"}],42:[function(require,module,exports){
'use strict';

var React = require('react');
var Router = require('react-router');
var LibraryStore = require('../../stores/LibraryStore');
var AuthStore = require('../../stores/AuthStore');
var Actions = require('../../actions.js');
var Reflux = require('reflux');
var LibLessonEntry = require('./LibLessonEntry.jsx');
var LibLessonCollection = require('./LibLessonCollection.jsx');
var LibAddLesson = require('./LibAddLesson.jsx');
var _ = require('lodash');

var Library = React.createClass({
  displayName: 'Library',

  mixins: [Reflux.connect(AuthStore, 'auth')],

  getInitialState: function getInitialState() {},

  componentWillMount: function componentWillMount() {
    Actions.getUser();
  },

  render: function render() {

    {/*Declare apostrophe*/}
    var apo = "'";

    if (this.state.auth && this.state.auth.user) {
      var user = this.state.auth.user;
      console.log(user);
      {/*Grab User's Name*/}
      var name = this.state.auth.user.local.name;

      /* Lessons where user is the teacher */
      var lessonsA = _.filter(user.lessons, function (lesson) {
        return lesson.teacher.id === user._id;
      });

      /* Lessons where user is not the teacher */
      var lessonsB = _.filter(user.lessons, function (lesson) {
        return lesson.teacher.id !== user._id && lesson.publish;
      });

      return React.createElement(
        'div',
        { className: 'container lib-lesson-container' },
        React.createElement(
          'div',
          { id: 'library-filter-header' },
          React.createElement(
            'h1',
            { className: 'filterColor' },
            name,
            apo,
            's Library'
          )
        ),
        React.createElement(LibLessonCollection, { lessons: lessonsA, owner: true }),
        React.createElement(
          'div',
          { className: 'library-filter-header' },
          React.createElement(
            'h1',
            { className: 'filterColor' },
            name,
            apo,
            's Studies'
          )
        ),
        React.createElement(LibLessonCollection, { lessons: lessonsB, owner: false })
      );
    } else {
      return React.createElement(
        'h5',
        null,
        'Library didnt load, probably because this.state.auth.user is false'
      );
    }
  }
});

module.exports = Library;

// return <div className="container lib-lesson-container">
//        <h1>TEST</h1>
//        {/* Lessons where user is the teacher */}
//        <div id="library-filter-header">
//          <h1 className="filterColor">
//            {name}{apo}s Library
//          </h1>
//          <hr/>
//        </div>
//        <LibLessonCollection lessons = {
//            _.filter(user.lessons, function (lesson) {
//              return lesson.teacher.id === user._id
//            })
//          } owner = {true}/>

//        {/* Lessons where user is not the teacher */}
//        <div className="library-filter-header">
//          <h1 className="filterColor">{name}{apo}s Studies</h1>
//          <hr/>
//        </div>

//        <LibLessonCollection lessons = {
//          _.filter(user.lessons, function (lesson) {
//            return lesson.teacher.id !== user._id && lesson.publish
//          })
//        } owner = {false}/>

//      </div>;
/* Lessons where user is the teacher */ /* Lessons where user is not the teacher */

},{"../../actions.js":1,"../../stores/AuthStore":46,"../../stores/LibraryStore":49,"./LibAddLesson.jsx":38,"./LibLessonCollection.jsx":39,"./LibLessonEntry.jsx":40,"lodash":"lodash","react":"react","react-router":"react-router","reflux":"reflux"}],43:[function(require,module,exports){
'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('../routes.js');

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(React.createElement(Handler, null), document.getElementById('root'));
});

},{"../routes.js":45,"react":"react","react-router":"react-router"}],44:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;
var Route = Router.Route;
var AuthStore = require('../../stores/AuthStore');
var Actions = require('../../actions');

module.exports = React.createClass({
  displayName: 'exports',

  mixins: [Navigation],

  render: function render() {
    return React.createElement(
      'div',
      { className: 'container signup-container', id: 'signup' },
      React.createElement(
        'div',
        { className: 'col-md-6 col-md-offset-3 signup-panel' },
        React.createElement(
          'h1',
          null,
          'sign up'
        ),
        React.createElement(
          'form',
          { name: 'signupForm', onSubmit: this.handleSubmit },
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { id: 'name' },
              'Name'
            ),
            React.createElement('input', { ref: 'name', className: 'form-control', name: 'name', type: 'text', required: true, placeholder: 'First Last' })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { id: 'email' },
              'Email'
            ),
            React.createElement('input', { ref: 'email', className: 'form-control', name: 'email', type: 'email', required: true, placeholder: 'you@mail.com' })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { id: 'password' },
              'Password'
            ),
            React.createElement('input', { ref: 'password', className: 'form-control', min: '6', name: 'password', type: 'password', required: true, placeholder: 'combination of 6+ letters and numbers' })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { id: 'password2' },
              'Confirm Password'
            ),
            React.createElement('input', { ref: 'password2', className: 'form-control', min: '6', name: 'password2', type: 'password', required: true, placeholder: 'same password again' })
          ),
          React.createElement(
            'button',
            { className: 'btn btn-primary' },
            'Signup'
          ),
          React.createElement(
            Link,
            { activeClassName: 'active', to: '/' },
            React.createElement(
              'button',
              { className: 'signup-cancel-btn btn btn-default' },
              'Cancel'
            )
          )
        )
      )
    );
  },
  handleSubmit: function handleSubmit(event) {
    event.preventDefault();
    var name = this.refs.name.getDOMNode().value;
    var email = this.refs.email.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;
    var password2 = this.refs.password2.getDOMNode().value;

    var emailValidator = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;

    if (!emailValidator.test(email.toUpperCase())) {
      console.log("in email validation");
      toastr["warning"]("Please enter a valid email address");
    }
    if (password.length < 6) {
      toastr["warning"]("Your password is too short");
    }
    if (password !== password2) {
      toastr["warning"]("Your passwords do not match");
    } else {
      Actions.signup(name, email, password).then((function () {
        this.transitionTo("/");
      }).bind(this));

      this.refs.name.getDOMNode().value = "";
      this.refs.email.getDOMNode().value = "";
      this.refs.password.getDOMNode().value = "";
      this.refs.password2.getDOMNode().value = "";

      //Actions.login(email, password);
    }
  }
});

},{"../../actions":1,"../../stores/AuthStore":46,"react":"react","react-router":"react-router","reflux":"reflux"}],45:[function(require,module,exports){
'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Redirect = Router.Redirect;

var App = require('./components/App');
var LandingPage = require('./components/LandingPage.jsx');
var LessonView = require('./components/lesson/LessonView.jsx');
var LibraryView = require('./components/library_components/LibraryView.jsx');
var SignupView = require('./components/signup/SignupView.jsx');
var AddLessonView = require('./components/add_lesson_view/AddLessonView.jsx');
var NotFound = require('./components/404/NotFound.jsx');
var LessonConfiguration = require('./components/add_lesson_view/LessonConfiguration.jsx');
var ExerciseMultiChoice = require('./components/basicExercises/Multichoice.jsx');
var ExerciseTrueFalse = require('./components/basicExercises/TrueFalse.jsx');
var ExerciseShortAnswer = require('./components/basicExercises/ShortAnswer.jsx');
var MultiChoiceCreation = require('./components/basicExercises/MultiChoiceCreation.jsx');
var TrueFalseCreation = require('./components/basicExercises/TrueFalseCreation.jsx');
var EditView = require('./components/edit/EditView.jsx');
var ShortAnswerCreation = require('./components/basicExercises/ShortAnswerCreation.jsx');

var routes = React.createElement(
  Route,
  { path: '/', handler: App },
  React.createElement(DefaultRoute, { handler: LandingPage }),
  React.createElement(Route, { path: '/register', handler: SignupView }),
  React.createElement(Route, { path: '/library', handler: LibraryView }),
  React.createElement(Route, { path: '/add-lesson', handler: AddLessonView }),
  React.createElement(Redirect, { from: '/lesson', to: '/add-lesson' }),
  React.createElement(Route, { path: '/configure', handler: LessonConfiguration }),
  React.createElement(Redirect, { from: '/edit', to: '/configure' }),
  React.createElement(Route, { path: '/exerciseMC', handler: ExerciseMultiChoice }),
  React.createElement(Route, { path: '/exerciseTF', handler: ExerciseTrueFalse }),
  React.createElement(Route, { path: '/exerciseSA', handler: ExerciseShortAnswer }),
  React.createElement(Route, { path: '/multiplechoice', handler: MultiChoiceCreation }),
  React.createElement(Route, { path: '/truefalse', handler: TrueFalseCreation }),
  React.createElement(Route, { path: '/shortanswer', handler: ShortAnswerCreation }),
  React.createElement(Route, { path: '/404', handler: NotFound }),
  React.createElement(Route, { path: '/:url', handler: LessonView }),
  React.createElement(NotFoundRoute, { handler: NotFound })
);

module.exports = routes;
/*these two routes are for development purposes*/

},{"./components/404/NotFound.jsx":2,"./components/App":3,"./components/LandingPage.jsx":4,"./components/add_lesson_view/AddLessonView.jsx":5,"./components/add_lesson_view/LessonConfiguration.jsx":10,"./components/basicExercises/MultiChoiceCreation.jsx":11,"./components/basicExercises/Multichoice.jsx":12,"./components/basicExercises/ShortAnswer.jsx":13,"./components/basicExercises/ShortAnswerCreation.jsx":14,"./components/basicExercises/TrueFalse.jsx":17,"./components/basicExercises/TrueFalseCreation.jsx":18,"./components/edit/EditView.jsx":19,"./components/lesson/LessonView.jsx":24,"./components/library_components/LibraryView.jsx":41,"./components/signup/SignupView.jsx":44,"react":"react","react-router":"react-router"}],46:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Api = require('../utils/api');
var Identity = require('../utils/identity.js');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Navigation = ReactRouter.Navigation;
var _ = require('lodash');

module.exports = Reflux.createStore({
  mixins: [Navigation],
  listenables: [Actions],

  init: function init() {
    this.auth = {
      user: false,
      loggedIn: false,
      authorized: false
    };
  },

  onAuthenticate: function onAuthenticate() {
    var user = Identity().currentUser;
    if (user._id) {
      this.auth.loggedIn = true;
      this.onGetUser();
      this.triggerChange();
    }
    return Api.getStatus().then((function (res) {
      if (res.data) {
        this.auth.loggedIn = res.data;
        this.triggerChange();
      } else {
        this.auth.loggedIn = false;
        this.triggerChange();
      }
    }).bind(this));
  },

  onGetUser: function onGetUser(callback) {

    return Api.getUser().then((function (res) {
      if (res.data.user) {
        console.log('fetched user');
        this.auth.user = res.data.user;
        this.triggerChange();
        callback();
      } else {
        this.auth.user = false;
        this.triggerChange();
      }
    }).bind(this));
  },

  onLogin: function onLogin(payload) {
    return Api.login(payload.email, payload.password).then((function (res) {
      this.auth.user = res.data.user;
      this.auth.loggedIn = true;
      this.triggerChange();
      payload.sourceComponent.transitionTo('/library');
      toastr.options.fadeOut = 1000;
      toastr["success"]("Welcome back to Lesson Links " + res.data.user.local.name);
    }).bind(this))['catch']((function (res) {
      if (res.headers.status === 401 || res.data === "Unauthorized") {
        toastr["error"]("The username and password did not match");
      } else {
        toastr["error"]("There was a problem logging you in");
      }
      this.triggerChange();
    }).bind(this));
  },

  onLogout: function onLogout() {
    this.auth.user = null;
    this.auth.loggedIn = false;
    delete window.currentUser;
    this.triggerChange();
    toastr["success"]("You have logged out");
    return Api.logout();
  },

  onSignup: function onSignup(name, email, password) {
    return Api.signup(name, email, password).then((function (res) {
      this.auth.user = res.data.user;
      this.auth.loggedIn = true;
      this.triggerChange();
      toastr["success"]("Welcome to Lesson Links " + res.data.user.local.name);
    }).bind(this))['catch']((function (res) {
      toastr["error"]("Sorry, there was a problem registering you");
      this.triggerChange();
    }).bind(this));
  },

  triggerChange: function triggerChange() {
    this.trigger(this.auth);
  }
});

},{"../actions":1,"../utils/api":51,"../utils/identity.js":52,"lodash":"lodash","react":"react","react-router":"react-router","reflux":"reflux"}],47:[function(require,module,exports){
'use strict';

var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var AuthStore = require('./AuthStore');
var _ = require('lodash');

var CreateLessonStore = Reflux.createStore({
  listenables: [Actions],

  init: function init() {},

  validateYoutube: function validateYoutube(url) {
    if (url != undefined || url != '') {
      var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
      var match = url.match(regExp);
      if (match && match[2].length == 11) {
        console.log('Valid Youtube URL');
        return true;
      } else {
        console.log('Invalid Youtube URL');
        return false;
      }
    }
  },

  createLesson: function createLesson(lesson) {
    var self = this;
    if (this.validateYoutube(lesson.video_url)) {
      Api.createLesson(lesson).then(function (res) {
        console.log("successfully created lesson: ", res.data);
        self.result = {};
        self.result.invalidURL = false;
        self.result.createdLesson = true;
        self.trigger(self.result);
        Actions.sendLesson(res.data);
        Actions.getUser();
      })['catch'](function (res) {
        console.log("failed to create lesson");
        self.result = {};
        self.result.invalidURL = true;
        self.trigger(self.result);
      });
    } else {
      self.result = {};
      self.result.invalidYoutubeURL = true;
      self.trigger(self.result);
    }
  }
});

module.exports = CreateLessonStore;

},{"../actions":1,"../utils/api":51,"./AuthStore":46,"lodash":"lodash","reflux":"reflux"}],48:[function(require,module,exports){
'use strict';

var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var AuthStore = require('./AuthStore');
var _ = require('lodash');

var LessonConfigStore = Reflux.createStore({
  listenables: [Actions],

  sendLesson: function sendLesson(lesson) {
    this.lesson = lesson;
  },

  triggerConfigStore: function triggerConfigStore() {
    this.trigger(this.lesson);
  },

  createExercise: function createExercise(exercise) {
    var newExercise = {
      exercise: exercise,
      time: exercise.time,
      text: exercise.type,
      lesson_id: this.lesson._id
    };

    this.lesson.exercises.push(newExercise);
    console.log("sending exercise to database", newExercise);
    Api.createExercise(newExercise).then(this.triggerConfigStore);
  },

  onUpdateExercise: function onUpdateExercise(exercise) {
    var updatedExercise = {
      exercise: exercise,
      time: exercise.time,
      text: exercise.type
    };

    this.updateExerciseOptimistically(exercise.id, updatedExercise);

    Api.updateExercise(updatedExercise, exercise.id).then(function (err, res) {
      this.triggerConfigStore();
    });
  },

  onDeleteExercise: function onDeleteExercise(exercise_id) {

    this.updateExerciseOptimistically(exercise_id);

    Api.deleteExercise(exercise_id).then(function (err, res) {
      this.triggerConfigStore();
    });
  },

  onPublish: function onPublish(lesson) {
    return Api.updateLesson({
      lesson_url: lesson.lesson_url,
      publish: true
    });
  },

  updateExerciseOptimistically: function updateExerciseOptimistically(id, newExercise) {

    for (var i = 0; i < this.lesson.exercises.length; i++) {
      if (this.lesson.exercises[i]._id === id) {
        if (newExercise) {
          this.lesson.exercises.splice(i, 1, newExercise);
        } else {
          this.lesson.exercises.splice(i, 1);
        }
      }
    }
    this.triggerConfigStore();
  }

});

module.exports = LessonConfigStore;

},{"../actions":1,"../utils/api":51,"./AuthStore":46,"lodash":"lodash","reflux":"reflux"}],49:[function(require,module,exports){
'use strict';

var React = require('react');
var Reflux = require('reflux');
var api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');
var AuthStore = require('./AuthStore');

module.exports = Reflux.createStore({
  listenables: [Actions],

  init: function init() {},
  onTogglePublish: function onTogglePublish(lesson) {
    api.updateLesson({
      lesson_url: lesson.lesson_url,
      publish: true
    }).then(function (res) {
      Actions.getUser();
    });
  },
  onDeleteLesson: function onDeleteLesson(lesson) {
    api.updateUser({
      unfollowLesson: true,
      _id: lesson._id
    }).then(function (res) {
      Actions.getUser();
    });
  }
});

},{"../actions":1,"../utils/api":51,"./AuthStore":46,"lodash":"lodash","react":"react","reflux":"reflux"}],50:[function(require,module,exports){
'use strict';

var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');
var AuthStore = require('./AuthStore');

module.exports = Reflux.createStore({
  listenables: [Actions],

  init: function init() {},

  fetchLesson: function fetchLesson(payload) {
    var url = payload.url; // || 'sass-101'
    var self = this;
    Api.getLesson(url).then(function (res) {
      console.log('fetched lesson');
      self.lesson = res.data;
      self.trigger(self.lesson);
      self.followLesson(payload);
    })['catch'](function (res) {
      payload.sourceComponent.transitionTo('/404');
    });
  },

  triggerLessonStore: function triggerLessonStore() {
    this.trigger(this.lesson);
  },

  updateAndTrigger: function updateAndTrigger() {
    var self = this;
    Api.updateLesson(this.lesson).then(function (res) {
      self.lesson = res.data;
      self.trigger(self.lesson);
    });
    //this is an 'optimistic' refresh. We call trigger before we hear back from the server so the user doesn't see any lag.
    this.trigger(this.lesson);
  },

  followLesson: function followLesson(lesson) {
    {/*Check if the user is already following this lesson*/}
    if (AuthStore.auth.user) {
      var following = _.reduce(AuthStore.auth.user.lessons, function (found, elem, key) {
        if (found) {
          return true;
        } else {
          return elem.lesson_url === lesson.url;
        }
      }, false);
      if (!following) {
        Api.updateUser({
          lesson_url: url,
          addLesson: true
        });
      }
    } else {
      console.log('User not found, can\'t follow lesson');
    }
  },

  submitComment: function submitComment(comment) {
    this.lesson.comments.push(comment);
    this.updateAndTrigger();
  },

  deleteComment: function deleteComment(commentID) {
    var commentIndex = this.findCommentIndex(commentID);
    this.lesson.comments.splice(commentIndex, 1);
    this.updateAndTrigger();
  },

  likeComment: function likeComment(commentID, userID) {
    var commentIndex = this.findCommentIndex(commentID);
    if (this.lesson.comments[commentIndex].likes.indexOf(userID) === -1) {
      this.lesson.comments[commentIndex].likes.push(userID);
    }
    this.updateAndTrigger();
  },

  unlikeComment: function unlikeComment(commentID, userID) {
    var commentIndex = this.findCommentIndex(commentID);
    if (this.lesson.comments[commentIndex].likes.indexOf(userID) >= 0) {
      var index = this.lesson.comments[commentIndex].likes.indexOf(userID);
      this.lesson.comments[commentIndex].likes.splice(index, 1);
    }
    this.updateAndTrigger();
  },

  starComment: function starComment(commentID, userID) {
    var commentIndex = this.findCommentIndex(commentID);
    this.lesson.comments[commentIndex].star = !this.lesson.comments[commentIndex].star;
    this.updateAndTrigger();
  },

  submitReply: function submitReply(reply, commentID) {
    var commentIndex = this.findCommentIndex(commentID);
    this.lesson.comments[commentIndex].replies.push(reply);
    this.updateAndTrigger();
  },

  likeReply: function likeReply(replyID, commentID, userID) {
    var commentIndex = this.findCommentIndex(commentID);
    var replyIndex = this.findReplyIndex(commentIndex, replyID);
    if (this.lesson.comments[commentIndex].replies[replyIndex].likes.indexOf(userID) === -1) {
      this.lesson.comments[commentIndex].replies[replyIndex].likes.push(userID);
    }
    this.updateAndTrigger();
  },

  unlikeReply: function unlikeReply(replyID, commentID, userID) {
    var commentIndex = this.findCommentIndex(commentID);
    var replyIndex = this.findReplyIndex(commentIndex, replyID);
    var likes = this.lesson.comments[commentIndex].replies[replyIndex].likes;
    var index = likes.indexOf(userID);

    if (index >= 0) {
      likes.splice(index, 1);
    }
    this.updateAndTrigger();
  },

  starReply: function starReply(replyID, commentID) {
    var commentIndex = this.findCommentIndex(commentID);
    var replyIndex = this.findReplyIndex(commentIndex, replyID);

    this.lesson.comments[commentIndex].replies[replyIndex].star = !this.lesson.comments[commentIndex].replies[replyIndex].star;
    this.updateAndTrigger();
  },

  deleteReply: function deleteReply(replyID, commentID) {
    var commentIndex = this.findCommentIndex(commentID);
    var replyIndex = this.findReplyIndex(commentIndex, replyID);

    this.lesson.comments[commentIndex].replies.splice(replyIndex, 1);
    this.updateAndTrigger();
  },

  findCommentIndex: function findCommentIndex(commentID) {
    var index;
    _.forEach(this.lesson.comments, function (comment, i) {
      if (comment._id === commentID) {
        index = i;
      }
    });
    return index;
  },

  findReplyIndex: function findReplyIndex(commentIndex, replyID) {
    var index;
    _.forEach(this.lesson.comments[commentIndex].replies, function (reply, i) {
      if (reply._id === replyID) {
        index = i;
      }
    });
    return index;
  }

});

},{"../actions":1,"../utils/api":51,"./AuthStore":46,"lodash":"lodash","reflux":"reflux"}],51:[function(require,module,exports){
'use strict';

var React = require('react');
var axios = require('axios');
var rootUrl = 'https://lesson-links.herokuapp.com';

module.exports.login = function (email, password) {
  var url = rootUrl + '/api/login';
  var data = { email: email, password: password };

  return axios.post(url, data);
};

module.exports.signup = function (name, email, password) {
  var url = rootUrl + '/api/signup';
  var data = { name: name, email: email, password: password };

  return axios.post(url, data);
};

module.exports.logout = function () {
  var url = rootUrl + '/api/logout';
  return axios.post(url);
};

module.exports.getUser = function () {
  var url = rootUrl + '/api/user';
  return axios.get(url);
};

module.exports.updateLesson = function (lesson) {
  var url = rootUrl + '/api/lesson/' + lesson.lesson_url;
  return axios.put(url, lesson);
};

module.exports.createLesson = function (lesson) {
  var url = rootUrl + '/api/lesson/' + lesson.lesson_url;
  return axios.post(url, lesson);
};

module.exports.createExercise = function (exercise) {
  var url = rootUrl + '/api/exercise';
  return axios.post(url, exercise);
};

module.exports.updateExercise = function (exercise, exercise_id) {
  var url = rootUrl + '/api/exercise/' + exercise_id;
  return axios.put(url, exercise);
};

module.exports.deleteExercise = function (exercise_id) {
  console.log("here is your id");
  var url = rootUrl + '/api/exercise/' + exercise_id;
  return axios['delete'](url);
};

module.exports.updateUser = function (result) {
  var url = rootUrl + '/api/user/';
  var obj = {
    addLesson: result.addLesson,
    unfollowLesson: result.unfollowLesson,
    lesson_url: result.lesson_url,
    _id: result._id
  };
  return axios.put(url, obj);
};

module.exports.getStatus = function () {
  var url = rootUrl + '/api/authenticate';
  return axios.post(url);
};

module.exports.getLesson = function (lessonUrl) {
  var url = rootUrl + '/api/lesson/' + lessonUrl;
  return axios.get(url);
};

},{"axios":53,"react":"react"}],52:[function(require,module,exports){
"use strict";

module.exports = function () {
  var currentUser;
  if (!!window.currentUser) {
    currentUser = window.currentUser;
  }
  return {
    currentUser: currentUser,
    deleteCurrentUser: function deleteCurrentUser() {
      delete window.currentUser;
      return this.currentUser = null;
    },
    isAuthenticated: function isAuthenticated() {
      return !!this.currentUser;
    }
  };
};

},{}],53:[function(require,module,exports){
module.exports = require('./lib/axios');
},{"./lib/axios":55}],54:[function(require,module,exports){
'use strict';

/*global ActiveXObject:true*/

var defaults = require('./../defaults');
var utils = require('./../utils');
var buildUrl = require('./../helpers/buildUrl');
var cookies = require('./../helpers/cookies');
var parseHeaders = require('./../helpers/parseHeaders');
var transformData = require('./../helpers/transformData');
var urlIsSameOrigin = require('./../helpers/urlIsSameOrigin');

module.exports = function xhrAdapter(resolve, reject, config) {
  // Transform request data
  var data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Merge headers
  var requestHeaders = utils.merge(
    defaults.headers.common,
    defaults.headers[config.method] || {},
    config.headers || {}
  );

  if (utils.isFormData(data)) {
    delete requestHeaders['Content-Type']; // Let the browser set it
  }

  // Create the request
  var request = new (XMLHttpRequest || ActiveXObject)('Microsoft.XMLHTTP');
  request.open(config.method.toUpperCase(), buildUrl(config.url, config.params), true);

  // Listen for ready state
  request.onreadystatechange = function () {
    if (request && request.readyState === 4) {
      // Prepare the response
      var responseHeaders = parseHeaders(request.getAllResponseHeaders());
      var responseData = ['text', ''].indexOf(config.responseType || '') !== -1 ? request.responseText : request.response;
      var response = {
        data: transformData(
          responseData,
          responseHeaders,
          config.transformResponse
        ),
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config
      };

      // Resolve or reject the Promise based on the status
      (request.status >= 200 && request.status < 300 ?
        resolve :
        reject)(response);

      // Clean up request
      request = null;
    }
  };

  // Add xsrf header
  var xsrfValue = urlIsSameOrigin(config.url) ?
      cookies.read(config.xsrfCookieName || defaults.xsrfCookieName) :
      undefined;
  if (xsrfValue) {
    requestHeaders[config.xsrfHeaderName || defaults.xsrfHeaderName] = xsrfValue;
  }

  // Add headers to the request
  utils.forEach(requestHeaders, function (val, key) {
    // Remove Content-Type if data is undefined
    if (!data && key.toLowerCase() === 'content-type') {
      delete requestHeaders[key];
    }
    // Otherwise add header to the request
    else {
      request.setRequestHeader(key, val);
    }
  });

  // Add withCredentials to request if needed
  if (config.withCredentials) {
    request.withCredentials = true;
  }

  // Add responseType to request if needed
  if (config.responseType) {
    try {
      request.responseType = config.responseType;
    } catch (e) {
      if (request.responseType !== 'json') {
        throw e;
      }
    }
  }

  if (utils.isArrayBuffer(data)) {
    data = new DataView(data);
  }

  // Send the request
  request.send(data);
};

},{"./../defaults":58,"./../helpers/buildUrl":59,"./../helpers/cookies":60,"./../helpers/parseHeaders":62,"./../helpers/transformData":64,"./../helpers/urlIsSameOrigin":65,"./../utils":66}],55:[function(require,module,exports){
'use strict';

var defaults = require('./defaults');
var utils = require('./utils');
var deprecatedMethod = require('./helpers/deprecatedMethod');
var dispatchRequest = require('./core/dispatchRequest');
var InterceptorManager = require('./core/InterceptorManager');

// Polyfill ES6 Promise if needed
(function () {
  // webpack is being used to set es6-promise to the native Promise
  // for the standalone build. It's necessary to make sure polyfill exists.
  var P = require('es6-promise');
  if (P && typeof P.polyfill === 'function') {
    P.polyfill();
  }
})();

var axios = module.exports = function axios(config) {
  config = utils.merge({
    method: 'get',
    headers: {},
    transformRequest: defaults.transformRequest,
    transformResponse: defaults.transformResponse
  }, config);

  // Don't allow overriding defaults.withCredentials
  config.withCredentials = config.withCredentials || defaults.withCredentials;

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  axios.interceptors.request.forEach(function (interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  axios.interceptors.response.forEach(function (interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  // Provide alias for success
  promise.success = function success(fn) {
    deprecatedMethod('success', 'then', 'https://github.com/mzabriskie/axios/blob/master/README.md#response-api');

    promise.then(function(response) {
      fn(response.data, response.status, response.headers, response.config);
    });
    return promise;
  };

  // Provide alias for error
  promise.error = function error(fn) {
    deprecatedMethod('error', 'catch', 'https://github.com/mzabriskie/axios/blob/master/README.md#response-api');

    promise.then(null, function(response) {
      fn(response.data, response.status, response.headers, response.config);
    });
    return promise;
  };

  return promise;
};

// Expose defaults
axios.defaults = defaults;

// Expose all/spread
axios.all = function (promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

// Expose interceptors
axios.interceptors = {
  request: new InterceptorManager(),
  response: new InterceptorManager()
};

// Provide aliases for supported request methods
(function () {
  function createShortMethods() {
    utils.forEach(arguments, function (method) {
      axios[method] = function (url, config) {
        return axios(utils.merge(config || {}, {
          method: method,
          url: url
        }));
      };
    });
  }

  function createShortMethodsWithData() {
    utils.forEach(arguments, function (method) {
      axios[method] = function (url, data, config) {
        return axios(utils.merge(config || {}, {
          method: method,
          url: url,
          data: data
        }));
      };
    });
  }

  createShortMethods('delete', 'get', 'head');
  createShortMethodsWithData('post', 'put', 'patch');
})();

},{"./core/InterceptorManager":56,"./core/dispatchRequest":57,"./defaults":58,"./helpers/deprecatedMethod":61,"./helpers/spread":63,"./utils":66,"es6-promise":67}],56:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function (fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function (id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `remove`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function (fn) {
  utils.forEach(this.handlers, function (h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

},{"./../utils":66}],57:[function(require,module,exports){
(function (process){
'use strict';

/**
 * Dispatch a request to the server using whichever adapter
 * is supported by the current environment.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  return new Promise(function (resolve, reject) {
    try {
      // For browsers use XHR adapter
      if (typeof window !== 'undefined') {
        require('../adapters/xhr')(resolve, reject, config);
      }
      // For node use HTTP adapter
      else if (typeof process !== 'undefined') {
        require('../adapters/http')(resolve, reject, config);
      }
    } catch (e) {
      reject(e);
    }
  });
};


}).call(this,require('_process'))
},{"../adapters/http":54,"../adapters/xhr":54,"_process":68}],58:[function(require,module,exports){
'use strict';

var utils = require('./utils');

var PROTECTION_PREFIX = /^\)\]\}',?\n/;
var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

module.exports = {
  transformRequest: [function (data, headers) {
    if(utils.isFormData(data)) {
      return data;
    }
    if (utils.isArrayBuffer(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isObject(data) && !utils.isFile(data) && !utils.isBlob(data)) {
      // Set application/json if no Content-Type has been specified
      if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
        headers['Content-Type'] = 'application/json;charset=utf-8';
      }
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function (data) {
    if (typeof data === 'string') {
      data = data.replace(PROTECTION_PREFIX, '');
      try {
        data = JSON.parse(data);
      } catch (e) {}
    }
    return data;
  }],

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    },
    patch: utils.merge(DEFAULT_CONTENT_TYPE),
    post: utils.merge(DEFAULT_CONTENT_TYPE),
    put: utils.merge(DEFAULT_CONTENT_TYPE)
  },

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN'
};

},{"./utils":66}],59:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildUrl(url, params) {
  if (!params) {
    return url;
  }

  var parts = [];

  utils.forEach(params, function (val, key) {
    if (val === null || typeof val === 'undefined') {
      return;
    }
    if (!utils.isArray(val)) {
      val = [val];
    }

    utils.forEach(val, function (v) {
      if (utils.isDate(v)) {
        v = v.toISOString();
      }
      else if (utils.isObject(v)) {
        v = JSON.stringify(v);
      }
      parts.push(encode(key) + '=' + encode(v));
    });
  });

  if (parts.length > 0) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + parts.join('&');
  }

  return url;
};

},{"./../utils":66}],60:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

module.exports = {
  write: function write(name, value, expires, path, domain, secure) {
    var cookie = [];
    cookie.push(name + '=' + encodeURIComponent(value));

    if (utils.isNumber(expires)) {
      cookie.push('expires=' + new Date(expires).toGMTString());
    }

    if (utils.isString(path)) {
      cookie.push('path=' + path);
    }

    if (utils.isString(domain)) {
      cookie.push('domain=' + domain);
    }

    if (secure === true) {
      cookie.push('secure');
    }

    document.cookie = cookie.join('; ');
  },

  read: function read(name) {
    var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
    return (match ? decodeURIComponent(match[3]) : null);
  },

  remove: function remove(name) {
    this.write(name, '', Date.now() - 86400000);
  }
};

},{"./../utils":66}],61:[function(require,module,exports){
'use strict';

/**
 * Supply a warning to the developer that a method they are using
 * has been deprecated.
 *
 * @param {string} method The name of the deprecated method
 * @param {string} [instead] The alternate method to use if applicable
 * @param {string} [docs] The documentation URL to get further details
 */
module.exports = function deprecatedMethod(method, instead, docs) {
  try {
    console.warn(
      'DEPRECATED method `' + method + '`.' +
      (instead ? ' Use `' + instead + '` instead.' : '') +
      ' This method will be removed in a future release.');

    if (docs) {
      console.warn('For more information about usage see ' + docs);
    }
  } catch (e) {}
};

},{}],62:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {}, key, val, i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

},{"./../utils":66}],63:[function(require,module,exports){
'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function (arr) {
    callback.apply(null, arr);
  };
};

},{}],64:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  utils.forEach(fns, function (fn) {
    data = fn(data, headers);
  });

  return data;
};

},{"./../utils":66}],65:[function(require,module,exports){
'use strict';

var utils = require('./../utils');
var msie = /(msie|trident)/i.test(navigator.userAgent);
var urlParsingNode = document.createElement('a');
var originUrl;

/**
 * Parse a URL to discover it's components
 *
 * @param {String} url The URL to be parsed
 * @returns {Object}
 */
function urlResolve(url) {
  var href = url;

  if (msie) {
    // IE needs attribute set twice to normalize properties
    urlParsingNode.setAttribute('href', href);
    href = urlParsingNode.href;
  }

  urlParsingNode.setAttribute('href', href);

  // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
  return {
    href: urlParsingNode.href,
    protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
    host: urlParsingNode.host,
    search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
    hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
    hostname: urlParsingNode.hostname,
    port: urlParsingNode.port,
    pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
              urlParsingNode.pathname :
              '/' + urlParsingNode.pathname
  };
}

originUrl = urlResolve(window.location.href);

/**
 * Determine if a URL shares the same origin as the current location
 *
 * @param {String} requestUrl The URL to test
 * @returns {boolean} True if URL shares the same origin, otherwise false
 */
module.exports = function urlIsSameOrigin(requestUrl) {
  var parsed = (utils.isString(requestUrl)) ? urlResolve(requestUrl) : requestUrl;
  return (parsed.protocol === originUrl.protocol &&
        parsed.host === originUrl.host);
};

},{"./../utils":66}],66:[function(require,module,exports){
'use strict';

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return toString.call(val) === '[object FormData]';
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    return ArrayBuffer.isView(val);
  } else {
    return (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array or arguments callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Check if obj is array-like
  var isArrayLike = isArray(obj) || (typeof obj === 'object' && !isNaN(obj.length));

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArrayLike) {
    obj = [obj];
  }

  // Iterate over array values
  if (isArrayLike) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  }
  // Iterate over object keys
  else {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/*obj1, obj2, obj3, ...*/) {
  var result = {};
  forEach(arguments, function (obj) {
    forEach(obj, function (val, key) {
      result[key] = val;
    });
  });
  return result;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  forEach: forEach,
  merge: merge,
  trim: trim
};

},{}],67:[function(require,module,exports){
(function (process,global){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   2.3.0
 */

(function() {
    "use strict";
    function lib$es6$promise$utils$$objectOrFunction(x) {
      return typeof x === 'function' || (typeof x === 'object' && x !== null);
    }

    function lib$es6$promise$utils$$isFunction(x) {
      return typeof x === 'function';
    }

    function lib$es6$promise$utils$$isMaybeThenable(x) {
      return typeof x === 'object' && x !== null;
    }

    var lib$es6$promise$utils$$_isArray;
    if (!Array.isArray) {
      lib$es6$promise$utils$$_isArray = function (x) {
        return Object.prototype.toString.call(x) === '[object Array]';
      };
    } else {
      lib$es6$promise$utils$$_isArray = Array.isArray;
    }

    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
    var lib$es6$promise$asap$$len = 0;
    var lib$es6$promise$asap$$toString = {}.toString;
    var lib$es6$promise$asap$$vertxNext;
    var lib$es6$promise$asap$$customSchedulerFn;

    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
      lib$es6$promise$asap$$len += 2;
      if (lib$es6$promise$asap$$len === 2) {
        // If len is 2, that means that we need to schedule an async flush.
        // If additional callbacks are queued before the queue is flushed, they
        // will be processed by this flush that we are scheduling.
        if (lib$es6$promise$asap$$customSchedulerFn) {
          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
        } else {
          lib$es6$promise$asap$$scheduleFlush();
        }
      }
    }

    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
    }

    function lib$es6$promise$asap$$setAsap(asapFn) {
      lib$es6$promise$asap$$asap = asapFn;
    }

    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

    // test for web worker but not in IE10
    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
      typeof importScripts !== 'undefined' &&
      typeof MessageChannel !== 'undefined';

    // node
    function lib$es6$promise$asap$$useNextTick() {
      var nextTick = process.nextTick;
      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
      // setImmediate should be used instead instead
      var version = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
      if (Array.isArray(version) && version[1] === '0' && version[2] === '10') {
        nextTick = setImmediate;
      }
      return function() {
        nextTick(lib$es6$promise$asap$$flush);
      };
    }

    // vertx
    function lib$es6$promise$asap$$useVertxTimer() {
      return function() {
        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
      };
    }

    function lib$es6$promise$asap$$useMutationObserver() {
      var iterations = 0;
      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
      var node = document.createTextNode('');
      observer.observe(node, { characterData: true });

      return function() {
        node.data = (iterations = ++iterations % 2);
      };
    }

    // web worker
    function lib$es6$promise$asap$$useMessageChannel() {
      var channel = new MessageChannel();
      channel.port1.onmessage = lib$es6$promise$asap$$flush;
      return function () {
        channel.port2.postMessage(0);
      };
    }

    function lib$es6$promise$asap$$useSetTimeout() {
      return function() {
        setTimeout(lib$es6$promise$asap$$flush, 1);
      };
    }

    var lib$es6$promise$asap$$queue = new Array(1000);
    function lib$es6$promise$asap$$flush() {
      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
        var callback = lib$es6$promise$asap$$queue[i];
        var arg = lib$es6$promise$asap$$queue[i+1];

        callback(arg);

        lib$es6$promise$asap$$queue[i] = undefined;
        lib$es6$promise$asap$$queue[i+1] = undefined;
      }

      lib$es6$promise$asap$$len = 0;
    }

    function lib$es6$promise$asap$$attemptVertex() {
      try {
        var r = require;
        var vertx = r('vertx');
        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
        return lib$es6$promise$asap$$useVertxTimer();
      } catch(e) {
        return lib$es6$promise$asap$$useSetTimeout();
      }
    }

    var lib$es6$promise$asap$$scheduleFlush;
    // Decide what async method to use to triggering processing of queued callbacks:
    if (lib$es6$promise$asap$$isNode) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
    } else if (lib$es6$promise$asap$$isWorker) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
    } else if (lib$es6$promise$asap$$browserWindow === undefined && typeof require === 'function') {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertex();
    } else {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
    }

    function lib$es6$promise$$internal$$noop() {}

    var lib$es6$promise$$internal$$PENDING   = void 0;
    var lib$es6$promise$$internal$$FULFILLED = 1;
    var lib$es6$promise$$internal$$REJECTED  = 2;

    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$selfFullfillment() {
      return new TypeError("You cannot resolve a promise with itself");
    }

    function lib$es6$promise$$internal$$cannotReturnOwn() {
      return new TypeError('A promises callback cannot return that same promise.');
    }

    function lib$es6$promise$$internal$$getThen(promise) {
      try {
        return promise.then;
      } catch(error) {
        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
        return lib$es6$promise$$internal$$GET_THEN_ERROR;
      }
    }

    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
      try {
        then.call(value, fulfillmentHandler, rejectionHandler);
      } catch(e) {
        return e;
      }
    }

    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
       lib$es6$promise$asap$$asap(function(promise) {
        var sealed = false;
        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
          if (sealed) { return; }
          sealed = true;
          if (thenable !== value) {
            lib$es6$promise$$internal$$resolve(promise, value);
          } else {
            lib$es6$promise$$internal$$fulfill(promise, value);
          }
        }, function(reason) {
          if (sealed) { return; }
          sealed = true;

          lib$es6$promise$$internal$$reject(promise, reason);
        }, 'Settle: ' + (promise._label || ' unknown promise'));

        if (!sealed && error) {
          sealed = true;
          lib$es6$promise$$internal$$reject(promise, error);
        }
      }, promise);
    }

    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, thenable._result);
      } else {
        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      }
    }

    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
      if (maybeThenable.constructor === promise.constructor) {
        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
      } else {
        var then = lib$es6$promise$$internal$$getThen(maybeThenable);

        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
        } else if (then === undefined) {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        } else if (lib$es6$promise$utils$$isFunction(then)) {
          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
        } else {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        }
      }
    }

    function lib$es6$promise$$internal$$resolve(promise, value) {
      if (promise === value) {
        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFullfillment());
      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
        lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
      } else {
        lib$es6$promise$$internal$$fulfill(promise, value);
      }
    }

    function lib$es6$promise$$internal$$publishRejection(promise) {
      if (promise._onerror) {
        promise._onerror(promise._result);
      }

      lib$es6$promise$$internal$$publish(promise);
    }

    function lib$es6$promise$$internal$$fulfill(promise, value) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }

      promise._result = value;
      promise._state = lib$es6$promise$$internal$$FULFILLED;

      if (promise._subscribers.length !== 0) {
        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
      }
    }

    function lib$es6$promise$$internal$$reject(promise, reason) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
      promise._state = lib$es6$promise$$internal$$REJECTED;
      promise._result = reason;

      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
    }

    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
      var subscribers = parent._subscribers;
      var length = subscribers.length;

      parent._onerror = null;

      subscribers[length] = child;
      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;

      if (length === 0 && parent._state) {
        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
      }
    }

    function lib$es6$promise$$internal$$publish(promise) {
      var subscribers = promise._subscribers;
      var settled = promise._state;

      if (subscribers.length === 0) { return; }

      var child, callback, detail = promise._result;

      for (var i = 0; i < subscribers.length; i += 3) {
        child = subscribers[i];
        callback = subscribers[i + settled];

        if (child) {
          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
        } else {
          callback(detail);
        }
      }

      promise._subscribers.length = 0;
    }

    function lib$es6$promise$$internal$$ErrorObject() {
      this.error = null;
    }

    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
      try {
        return callback(detail);
      } catch(e) {
        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
      }
    }

    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
          value, error, succeeded, failed;

      if (hasCallback) {
        value = lib$es6$promise$$internal$$tryCatch(callback, detail);

        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
          failed = true;
          error = value.error;
          value = null;
        } else {
          succeeded = true;
        }

        if (promise === value) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
          return;
        }

      } else {
        value = detail;
        succeeded = true;
      }

      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
        // noop
      } else if (hasCallback && succeeded) {
        lib$es6$promise$$internal$$resolve(promise, value);
      } else if (failed) {
        lib$es6$promise$$internal$$reject(promise, error);
      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, value);
      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, value);
      }
    }

    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
      try {
        resolver(function resolvePromise(value){
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function rejectPromise(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      } catch(e) {
        lib$es6$promise$$internal$$reject(promise, e);
      }
    }

    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
      var enumerator = this;

      enumerator._instanceConstructor = Constructor;
      enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);

      if (enumerator._validateInput(input)) {
        enumerator._input     = input;
        enumerator.length     = input.length;
        enumerator._remaining = input.length;

        enumerator._init();

        if (enumerator.length === 0) {
          lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
        } else {
          enumerator.length = enumerator.length || 0;
          enumerator._enumerate();
          if (enumerator._remaining === 0) {
            lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
          }
        }
      } else {
        lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
      }
    }

    lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function(input) {
      return lib$es6$promise$utils$$isArray(input);
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
      return new Error('Array Methods must be provided an Array');
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._init = function() {
      this._result = new Array(this.length);
    };

    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;

    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
      var enumerator = this;

      var length  = enumerator.length;
      var promise = enumerator.promise;
      var input   = enumerator._input;

      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
        enumerator._eachEntry(input[i], i);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
      var enumerator = this;
      var c = enumerator._instanceConstructor;

      if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
        if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
          entry._onerror = null;
          enumerator._settledAt(entry._state, i, entry._result);
        } else {
          enumerator._willSettleAt(c.resolve(entry), i);
        }
      } else {
        enumerator._remaining--;
        enumerator._result[i] = entry;
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
      var enumerator = this;
      var promise = enumerator.promise;

      if (promise._state === lib$es6$promise$$internal$$PENDING) {
        enumerator._remaining--;

        if (state === lib$es6$promise$$internal$$REJECTED) {
          lib$es6$promise$$internal$$reject(promise, value);
        } else {
          enumerator._result[i] = value;
        }
      }

      if (enumerator._remaining === 0) {
        lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
      var enumerator = this;

      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
      }, function(reason) {
        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
      });
    };
    function lib$es6$promise$promise$all$$all(entries) {
      return new lib$es6$promise$enumerator$$default(this, entries).promise;
    }
    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
    function lib$es6$promise$promise$race$$race(entries) {
      /*jshint validthis:true */
      var Constructor = this;

      var promise = new Constructor(lib$es6$promise$$internal$$noop);

      if (!lib$es6$promise$utils$$isArray(entries)) {
        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
        return promise;
      }

      var length = entries.length;

      function onFulfillment(value) {
        lib$es6$promise$$internal$$resolve(promise, value);
      }

      function onRejection(reason) {
        lib$es6$promise$$internal$$reject(promise, reason);
      }

      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
      }

      return promise;
    }
    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
    function lib$es6$promise$promise$resolve$$resolve(object) {
      /*jshint validthis:true */
      var Constructor = this;

      if (object && typeof object === 'object' && object.constructor === Constructor) {
        return object;
      }

      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$resolve(promise, object);
      return promise;
    }
    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
    function lib$es6$promise$promise$reject$$reject(reason) {
      /*jshint validthis:true */
      var Constructor = this;
      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$reject(promise, reason);
      return promise;
    }
    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;

    var lib$es6$promise$promise$$counter = 0;

    function lib$es6$promise$promise$$needsResolver() {
      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
    }

    function lib$es6$promise$promise$$needsNew() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }

    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
    /**
      Promise objects represent the eventual result of an asynchronous operation. The
      primary way of interacting with a promise is through its `then` method, which
      registers callbacks to receive either a promise's eventual value or the reason
      why the promise cannot be fulfilled.

      Terminology
      -----------

      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
      - `thenable` is an object or function that defines a `then` method.
      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
      - `exception` is a value that is thrown using the throw statement.
      - `reason` is a value that indicates why a promise was rejected.
      - `settled` the final resting state of a promise, fulfilled or rejected.

      A promise can be in one of three states: pending, fulfilled, or rejected.

      Promises that are fulfilled have a fulfillment value and are in the fulfilled
      state.  Promises that are rejected have a rejection reason and are in the
      rejected state.  A fulfillment value is never a thenable.

      Promises can also be said to *resolve* a value.  If this value is also a
      promise, then the original promise's settled state will match the value's
      settled state.  So a promise that *resolves* a promise that rejects will
      itself reject, and a promise that *resolves* a promise that fulfills will
      itself fulfill.


      Basic Usage:
      ------------

      ```js
      var promise = new Promise(function(resolve, reject) {
        // on success
        resolve(value);

        // on failure
        reject(reason);
      });

      promise.then(function(value) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Advanced Usage:
      ---------------

      Promises shine when abstracting away asynchronous interactions such as
      `XMLHttpRequest`s.

      ```js
      function getJSON(url) {
        return new Promise(function(resolve, reject){
          var xhr = new XMLHttpRequest();

          xhr.open('GET', url);
          xhr.onreadystatechange = handler;
          xhr.responseType = 'json';
          xhr.setRequestHeader('Accept', 'application/json');
          xhr.send();

          function handler() {
            if (this.readyState === this.DONE) {
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
              }
            }
          };
        });
      }

      getJSON('/posts.json').then(function(json) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Unlike callbacks, promises are great composable primitives.

      ```js
      Promise.all([
        getJSON('/posts'),
        getJSON('/comments')
      ]).then(function(values){
        values[0] // => postsJSON
        values[1] // => commentsJSON

        return values;
      });
      ```

      @class Promise
      @param {function} resolver
      Useful for tooling.
      @constructor
    */
    function lib$es6$promise$promise$$Promise(resolver) {
      this._id = lib$es6$promise$promise$$counter++;
      this._state = undefined;
      this._result = undefined;
      this._subscribers = [];

      if (lib$es6$promise$$internal$$noop !== resolver) {
        if (!lib$es6$promise$utils$$isFunction(resolver)) {
          lib$es6$promise$promise$$needsResolver();
        }

        if (!(this instanceof lib$es6$promise$promise$$Promise)) {
          lib$es6$promise$promise$$needsNew();
        }

        lib$es6$promise$$internal$$initializePromise(this, resolver);
      }
    }

    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;

    lib$es6$promise$promise$$Promise.prototype = {
      constructor: lib$es6$promise$promise$$Promise,

    /**
      The primary way of interacting with a promise is through its `then` method,
      which registers callbacks to receive either a promise's eventual value or the
      reason why the promise cannot be fulfilled.

      ```js
      findUser().then(function(user){
        // user is available
      }, function(reason){
        // user is unavailable, and you are given the reason why
      });
      ```

      Chaining
      --------

      The return value of `then` is itself a promise.  This second, 'downstream'
      promise is resolved with the return value of the first promise's fulfillment
      or rejection handler, or rejected if the handler throws an exception.

      ```js
      findUser().then(function (user) {
        return user.name;
      }, function (reason) {
        return 'default name';
      }).then(function (userName) {
        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
        // will be `'default name'`
      });

      findUser().then(function (user) {
        throw new Error('Found user, but still unhappy');
      }, function (reason) {
        throw new Error('`findUser` rejected and we're unhappy');
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
      });
      ```
      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

      ```js
      findUser().then(function (user) {
        throw new PedagogicalException('Upstream error');
      }).then(function (value) {
        // never reached
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // The `PedgagocialException` is propagated all the way down to here
      });
      ```

      Assimilation
      ------------

      Sometimes the value you want to propagate to a downstream promise can only be
      retrieved asynchronously. This can be achieved by returning a promise in the
      fulfillment or rejection handler. The downstream promise will then be pending
      until the returned promise is settled. This is called *assimilation*.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // The user's comments are now available
      });
      ```

      If the assimliated promise rejects, then the downstream promise will also reject.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // If `findCommentsByAuthor` fulfills, we'll have the value here
      }, function (reason) {
        // If `findCommentsByAuthor` rejects, we'll have the reason here
      });
      ```

      Simple Example
      --------------

      Synchronous Example

      ```javascript
      var result;

      try {
        result = findResult();
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js
      findResult(function(result, err){
        if (err) {
          // failure
        } else {
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findResult().then(function(result){
        // success
      }, function(reason){
        // failure
      });
      ```

      Advanced Example
      --------------

      Synchronous Example

      ```javascript
      var author, books;

      try {
        author = findAuthor();
        books  = findBooksByAuthor(author);
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js

      function foundBooks(books) {

      }

      function failure(reason) {

      }

      findAuthor(function(author, err){
        if (err) {
          failure(err);
          // failure
        } else {
          try {
            findBoooksByAuthor(author, function(books, err) {
              if (err) {
                failure(err);
              } else {
                try {
                  foundBooks(books);
                } catch(reason) {
                  failure(reason);
                }
              }
            });
          } catch(error) {
            failure(err);
          }
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findAuthor().
        then(findBooksByAuthor).
        then(function(books){
          // found books
      }).catch(function(reason){
        // something went wrong
      });
      ```

      @method then
      @param {Function} onFulfilled
      @param {Function} onRejected
      Useful for tooling.
      @return {Promise}
    */
      then: function(onFulfillment, onRejection) {
        var parent = this;
        var state = parent._state;

        if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
          return this;
        }

        var child = new this.constructor(lib$es6$promise$$internal$$noop);
        var result = parent._result;

        if (state) {
          var callback = arguments[state - 1];
          lib$es6$promise$asap$$asap(function(){
            lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
          });
        } else {
          lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
        }

        return child;
      },

    /**
      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
      as the catch block of a try/catch statement.

      ```js
      function findAuthor(){
        throw new Error('couldn't find that author');
      }

      // synchronous
      try {
        findAuthor();
      } catch(reason) {
        // something went wrong
      }

      // async with promises
      findAuthor().catch(function(reason){
        // something went wrong
      });
      ```

      @method catch
      @param {Function} onRejection
      Useful for tooling.
      @return {Promise}
    */
      'catch': function(onRejection) {
        return this.then(null, onRejection);
      }
    };
    function lib$es6$promise$polyfill$$polyfill() {
      var local;

      if (typeof global !== 'undefined') {
          local = global;
      } else if (typeof self !== 'undefined') {
          local = self;
      } else {
          try {
              local = Function('return this')();
          } catch (e) {
              throw new Error('polyfill failed because global object is unavailable in this environment');
          }
      }

      var P = local.Promise;

      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
        return;
      }

      local.Promise = lib$es6$promise$promise$$default;
    }
    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;

    var lib$es6$promise$umd$$ES6Promise = {
      'Promise': lib$es6$promise$promise$$default,
      'polyfill': lib$es6$promise$polyfill$$default
    };

    /* global define:true module:true window: true */
    if (typeof define === 'function' && define['amd']) {
      define(function() { return lib$es6$promise$umd$$ES6Promise; });
    } else if (typeof module !== 'undefined' && module['exports']) {
      module['exports'] = lib$es6$promise$umd$$ES6Promise;
    } else if (typeof this !== 'undefined') {
      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
    }

    lib$es6$promise$polyfill$$default();
}).call(this);


}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":68}],68:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            currentQueue[queueIndex].run();
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],69:[function(require,module,exports){
//! moment.js
//! version : 2.10.6
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, function () { 'use strict';

    var hookCallback;

    function utils_hooks__hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function create_utc__createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    function valid__isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            m._isValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }
        }
        return m._isValid;
    }

    function valid__createInvalid (flags) {
        var m = create_utc__createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    var momentProperties = utils_hooks__hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (typeof from._isAMomentObject !== 'undefined') {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (typeof from._i !== 'undefined') {
            to._i = from._i;
        }
        if (typeof from._f !== 'undefined') {
            to._f = from._f;
        }
        if (typeof from._l !== 'undefined') {
            to._l = from._l;
        }
        if (typeof from._strict !== 'undefined') {
            to._strict = from._strict;
        }
        if (typeof from._tzm !== 'undefined') {
            to._tzm = from._tzm;
        }
        if (typeof from._isUTC !== 'undefined') {
            to._isUTC = from._isUTC;
        }
        if (typeof from._offset !== 'undefined') {
            to._offset = from._offset;
        }
        if (typeof from._pf !== 'undefined') {
            to._pf = getParsingFlags(from);
        }
        if (typeof from._locale !== 'undefined') {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (typeof val !== 'undefined') {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            utils_hooks__hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function Locale() {
    }

    var locales = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && typeof module !== 'undefined' &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                require('./locale/' + name);
                // because defineLocale currently also sets the global locale, we
                // want to undo that for lazy loaded locales
                locale_locales__getSetGlobalLocale(oldLocale);
            } catch (e) { }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function locale_locales__getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (typeof values === 'undefined') {
                data = locale_locales__getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, values) {
        if (values !== null) {
            values.abbr = name;
            locales[name] = locales[name] || new Locale();
            locales[name].set(values);

            // backwards compat for now: also set the locale
            locale_locales__getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    // returns locale data
    function locale_locales__getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                get_set__set(this, unit, value);
                utils_hooks__hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get_set__get(this, unit);
            }
        };
    }

    function get_set__get (mom, unit) {
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
    }

    function get_set__set (mom, unit, value) {
        return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }

    // MOMENTS

    function getSet (units, value) {
        var unit;
        if (typeof units === 'object') {
            for (unit in units) {
                this.set(unit, units[unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (typeof this[units] === 'function') {
                return this[units](value);
            }
        }
        return this;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '';
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;

    var regexes = {};

    function isFunction (sth) {
        // https://github.com/moment/moment/issues/2325
        return typeof sth === 'function' &&
            Object.prototype.toString.call(sth) === '[object Function]';
    }


    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (typeof callback === 'number') {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  matchWord);
    addRegexToken('MMMM', matchWord);

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m) {
        return this._months[m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m) {
        return this._monthsShort[m.month()];
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            utils_hooks__hooks.updateOffset(this, true);
            return this;
        } else {
            return get_set__get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    function warn(msg) {
        if (utils_hooks__hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (firstTime) {
                warn(msg + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    utils_hooks__hooks.suppressDeprecationWarnings = false;

    var from_string__isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
        ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
        ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d{2}/],
        ['YYYY-DDD', /\d{4}-\d{3}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
        ['HH:mm', /(T| )\d\d:\d\d/],
        ['HH', /(T| )\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = from_string__isoRegex.exec(string);

        if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    config._f = isoDates[i][0];
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    // match[6] should be 'T' or space
                    config._f += (match[6] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (string.match(matchOffset)) {
                config._f += 'Z';
            }
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    utils_hooks__hooks.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    function createDate (y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate (y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    utils_hooks__hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', false);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = local__createLocal(mom).add(daysToDayOfWeek, 'd');
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var week1Jan = 6 + firstDayOfWeek - firstDayOfWeekOfYear, janX = createUTCDate(year, 0, 1 + week1Jan), d = janX.getUTCDay(), dayOfYear;
        if (d < firstDayOfWeek) {
            d += 7;
        }

        weekday = weekday != null ? 1 * weekday : firstDayOfWeek;

        dayOfYear = 1 + week1Jan + 7 * (week - 1) - d + weekday;

        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()];
        }
        return [now.getFullYear(), now.getMonth(), now.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
            week = defaults(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < dow) {
                    ++week;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }

    utils_hooks__hooks.ISO_8601 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === utils_hooks__hooks.ISO_8601) {
            configFromISO(config);
            return;
        }

        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (getParsingFlags(config).bigHour === true &&
                config._a[HOUR] <= 12 &&
                config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!valid__isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = [i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond];

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || locale_locales__getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return valid__createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else if (isDate(input)) {
            config._d = input;
        } else {
            configFromInput(config);
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (input === undefined) {
            config._d = new Date();
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (typeof(input) === 'object') {
            configFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function local__createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
         'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
         function () {
             var other = local__createLocal.apply(null, arguments);
             return other < this ? this : other;
         }
     );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
        function () {
            var other = local__createLocal.apply(null, arguments);
            return other > this ? this : other;
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return local__createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = locale_locales__getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchOffset);
    addRegexToken('ZZ', matchOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(string) {
        var matches = ((string || '').match(matchOffset) || []);
        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - (+res);
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(+res._d + diff);
            utils_hooks__hooks.updateOffset(res, false);
            return res;
        } else {
            return local__createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    utils_hooks__hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime) {
        var offset = this._offset || 0,
            localAdjust;
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(input);
            }
            if (Math.abs(input) < 16) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    utils_hooks__hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm) {
            this.utcOffset(this._tzm);
        } else if (typeof this._i === 'string') {
            this.utcOffset(offsetFromString(this._i));
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        input = input ? local__createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (typeof this._isDSTShifted !== 'undefined') {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return !this._isUTC;
    }

    function isUtcOffset () {
        return this._isUTC;
    }

    function isUtc () {
        return this._isUTC && this._offset === 0;
    }

    var aspNetRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    var create__isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;

    function create__createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])        * sign,
                h  : toInt(match[HOUR])        * sign,
                m  : toInt(match[MINUTE])      * sign,
                s  : toInt(match[SECOND])      * sign,
                ms : toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = create__isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                d : parseIso(match[4], sign),
                h : parseIso(match[5], sign),
                m : parseIso(match[6], sign),
                s : parseIso(match[7], sign),
                w : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    create__createDuration.fn = Duration.prototype;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = create__createDuration(val, period);
            add_subtract__addSubtract(this, dur, direction);
            return this;
        };
    }

    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
        }
        if (months) {
            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            utils_hooks__hooks.updateOffset(mom, days || months);
        }
    }

    var add_subtract__add      = createAdder(1, 'add');
    var add_subtract__subtract = createAdder(-1, 'subtract');

    function moment_calendar__calendar (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || local__createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            diff = this.diff(sod, 'days', true),
            format = diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
        return this.format(formats && formats[format] || this.localeData().calendar(format, this, local__createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var inputMs;
        units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
        if (units === 'millisecond') {
            input = isMoment(input) ? input : local__createLocal(input);
            return +this > +input;
        } else {
            inputMs = isMoment(input) ? +input : +local__createLocal(input);
            return inputMs < +this.clone().startOf(units);
        }
    }

    function isBefore (input, units) {
        var inputMs;
        units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
        if (units === 'millisecond') {
            input = isMoment(input) ? input : local__createLocal(input);
            return +this < +input;
        } else {
            inputMs = isMoment(input) ? +input : +local__createLocal(input);
            return +this.clone().endOf(units) < inputMs;
        }
    }

    function isBetween (from, to, units) {
        return this.isAfter(from, units) && this.isBefore(to, units);
    }

    function isSame (input, units) {
        var inputMs;
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            input = isMoment(input) ? input : local__createLocal(input);
            return +this === +input;
        } else {
            inputMs = +local__createLocal(input);
            return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
        }
    }

    function diff (input, units, asFloat) {
        var that = cloneWithOffset(input, this),
            zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4,
            delta, output;

        units = normalizeUnits(units);

        if (units === 'year' || units === 'month' || units === 'quarter') {
            output = monthDiff(this, that);
            if (units === 'quarter') {
                output = output / 3;
            } else if (units === 'year') {
                output = output / 12;
            }
        } else {
            delta = this - that;
            output = units === 'second' ? delta / 1e3 : // 1000
                units === 'minute' ? delta / 6e4 : // 1000 * 60
                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                delta;
        }
        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        return -(wholeMonthDiff + adjust);
    }

    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function moment_format__toISOString () {
        var m = this.clone().utc();
        if (0 < m.year() && m.year() <= 9999) {
            if ('function' === typeof Date.prototype.toISOString) {
                // native implementation is ~50x faster, use it when we can
                return this.toDate().toISOString();
            } else {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        } else {
            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    }

    function format (inputString) {
        var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }
        return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    }

    function fromNow (withoutSuffix) {
        return this.from(local__createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }
        return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    }

    function toNow (withoutSuffix) {
        return this.to(local__createLocal(), withoutSuffix);
    }

    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = locale_locales__getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    function startOf (units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
        }

        // weeks are a special case
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf (units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }
        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
    }

    function to_type__valueOf () {
        return +this._d - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(+this / 1000);
    }

    function toDate () {
        return this._offset ? new Date(+this) : this._d;
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function moment_valid__isValid () {
        return valid__isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
    });

    // HELPERS

    function weeksInYear(year, dow, doy) {
        return weekOfYear(local__createLocal([year, 11, 31 + dow - doy]), dow, doy).week;
    }

    // MOMENTS

    function getSetWeekYear (input) {
        var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return input == null ? year : this.add((input - year), 'y');
    }

    function getSetISOWeekYear (input) {
        var year = weekOfYear(this, 1, 4).year;
        return input == null ? year : this.add((input - year), 'y');
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    addFormatToken('Q', 0, 0, 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0], 10);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   matchWord);
    addRegexToken('ddd',  matchWord);
    addRegexToken('dddd', matchWord);

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config) {
        var weekday = config._locale.weekdaysParse(input);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    // LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m) {
        return this._weekdays[m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return this._weekdaysShort[m.day()];
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return this._weekdaysMin[m.day()];
    }

    function localeWeekdaysParse (weekdayName) {
        var i, mom, regex;

        this._weekdaysParse = this._weekdaysParse || [];

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            if (!this._weekdaysParse[i]) {
                mom = local__createLocal([2000, 1]).day(i);
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, function () {
        return this.hours() % 12 || 12;
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var momentPrototype__proto = Moment.prototype;

    momentPrototype__proto.add          = add_subtract__add;
    momentPrototype__proto.calendar     = moment_calendar__calendar;
    momentPrototype__proto.clone        = clone;
    momentPrototype__proto.diff         = diff;
    momentPrototype__proto.endOf        = endOf;
    momentPrototype__proto.format       = format;
    momentPrototype__proto.from         = from;
    momentPrototype__proto.fromNow      = fromNow;
    momentPrototype__proto.to           = to;
    momentPrototype__proto.toNow        = toNow;
    momentPrototype__proto.get          = getSet;
    momentPrototype__proto.invalidAt    = invalidAt;
    momentPrototype__proto.isAfter      = isAfter;
    momentPrototype__proto.isBefore     = isBefore;
    momentPrototype__proto.isBetween    = isBetween;
    momentPrototype__proto.isSame       = isSame;
    momentPrototype__proto.isValid      = moment_valid__isValid;
    momentPrototype__proto.lang         = lang;
    momentPrototype__proto.locale       = locale;
    momentPrototype__proto.localeData   = localeData;
    momentPrototype__proto.max          = prototypeMax;
    momentPrototype__proto.min          = prototypeMin;
    momentPrototype__proto.parsingFlags = parsingFlags;
    momentPrototype__proto.set          = getSet;
    momentPrototype__proto.startOf      = startOf;
    momentPrototype__proto.subtract     = add_subtract__subtract;
    momentPrototype__proto.toArray      = toArray;
    momentPrototype__proto.toObject     = toObject;
    momentPrototype__proto.toDate       = toDate;
    momentPrototype__proto.toISOString  = moment_format__toISOString;
    momentPrototype__proto.toJSON       = moment_format__toISOString;
    momentPrototype__proto.toString     = toString;
    momentPrototype__proto.unix         = unix;
    momentPrototype__proto.valueOf      = to_type__valueOf;

    // Year
    momentPrototype__proto.year       = getSetYear;
    momentPrototype__proto.isLeapYear = getIsLeapYear;

    // Week Year
    momentPrototype__proto.weekYear    = getSetWeekYear;
    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;

    // Quarter
    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;

    // Month
    momentPrototype__proto.month       = getSetMonth;
    momentPrototype__proto.daysInMonth = getDaysInMonth;

    // Week
    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;
    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;
    momentPrototype__proto.weeksInYear    = getWeeksInYear;
    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;

    // Day
    momentPrototype__proto.date       = getSetDayOfMonth;
    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;
    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;
    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
    momentPrototype__proto.dayOfYear  = getSetDayOfYear;

    // Hour
    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;

    // Minute
    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;

    // Second
    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;

    // Millisecond
    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;

    // Offset
    momentPrototype__proto.utcOffset            = getSetOffset;
    momentPrototype__proto.utc                  = setOffsetToUTC;
    momentPrototype__proto.local                = setOffsetToLocal;
    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;
    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
    momentPrototype__proto.isDST                = isDaylightSavingTime;
    momentPrototype__proto.isDSTShifted         = isDaylightSavingTimeShifted;
    momentPrototype__proto.isLocal              = isLocal;
    momentPrototype__proto.isUtcOffset          = isUtcOffset;
    momentPrototype__proto.isUtc                = isUtc;
    momentPrototype__proto.isUTC                = isUtc;

    // Timezone
    momentPrototype__proto.zoneAbbr = getZoneAbbr;
    momentPrototype__proto.zoneName = getZoneName;

    // Deprecations
    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);

    var momentPrototype = momentPrototype__proto;

    function moment__createUnix (input) {
        return local__createLocal(input * 1000);
    }

    function moment__createInZone () {
        return local__createLocal.apply(null, arguments).parseZone();
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function locale_calendar__calendar (key, mom, now) {
        var output = this._calendar[key];
        return typeof output === 'function' ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    function preParsePostFormat (string) {
        return string;
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relative__relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (typeof output === 'function') ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
    }

    function locale_set__set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (typeof prop === 'function') {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _ordinalParseLenient.
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
    }

    var prototype__proto = Locale.prototype;

    prototype__proto._calendar       = defaultCalendar;
    prototype__proto.calendar        = locale_calendar__calendar;
    prototype__proto._longDateFormat = defaultLongDateFormat;
    prototype__proto.longDateFormat  = longDateFormat;
    prototype__proto._invalidDate    = defaultInvalidDate;
    prototype__proto.invalidDate     = invalidDate;
    prototype__proto._ordinal        = defaultOrdinal;
    prototype__proto.ordinal         = ordinal;
    prototype__proto._ordinalParse   = defaultOrdinalParse;
    prototype__proto.preparse        = preParsePostFormat;
    prototype__proto.postformat      = preParsePostFormat;
    prototype__proto._relativeTime   = defaultRelativeTime;
    prototype__proto.relativeTime    = relative__relativeTime;
    prototype__proto.pastFuture      = pastFuture;
    prototype__proto.set             = locale_set__set;

    // Month
    prototype__proto.months       =        localeMonths;
    prototype__proto._months      = defaultLocaleMonths;
    prototype__proto.monthsShort  =        localeMonthsShort;
    prototype__proto._monthsShort = defaultLocaleMonthsShort;
    prototype__proto.monthsParse  =        localeMonthsParse;

    // Week
    prototype__proto.week = localeWeek;
    prototype__proto._week = defaultLocaleWeek;
    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;

    // Day of Week
    prototype__proto.weekdays       =        localeWeekdays;
    prototype__proto._weekdays      = defaultLocaleWeekdays;
    prototype__proto.weekdaysMin    =        localeWeekdaysMin;
    prototype__proto._weekdaysMin   = defaultLocaleWeekdaysMin;
    prototype__proto.weekdaysShort  =        localeWeekdaysShort;
    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
    prototype__proto.weekdaysParse  =        localeWeekdaysParse;

    // Hours
    prototype__proto.isPM = localeIsPM;
    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
    prototype__proto.meridiem = localeMeridiem;

    function lists__get (format, index, field, setter) {
        var locale = locale_locales__getLocale();
        var utc = create_utc__createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function list (format, index, field, count, setter) {
        if (typeof format === 'number') {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return lists__get(format, index, field, setter);
        }

        var i;
        var out = [];
        for (i = 0; i < count; i++) {
            out[i] = lists__get(format, i, field, setter);
        }
        return out;
    }

    function lists__listMonths (format, index) {
        return list(format, index, 'months', 12, 'month');
    }

    function lists__listMonthsShort (format, index) {
        return list(format, index, 'monthsShort', 12, 'month');
    }

    function lists__listWeekdays (format, index) {
        return list(format, index, 'weekdays', 7, 'day');
    }

    function lists__listWeekdaysShort (format, index) {
        return list(format, index, 'weekdaysShort', 7, 'day');
    }

    function lists__listWeekdaysMin (format, index) {
        return list(format, index, 'weekdaysMin', 7, 'day');
    }

    locale_locales__getSetGlobalLocale('en', {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports
    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);

    var mathAbs = Math.abs;

    function duration_abs__abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function duration_add_subtract__addSubtract (duration, input, value, direction) {
        var other = create__createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function duration_add_subtract__add (input, value) {
        return duration_add_subtract__addSubtract(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function duration_add_subtract__subtract (input, value) {
        return duration_add_subtract__addSubtract(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days   = this._days   + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function duration_as__valueOf () {
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asYears        = makeAs('y');

    function duration_get__get (units) {
        units = normalizeUnits(units);
        return this[units + 's']();
    }

    function makeGetter(name) {
        return function () {
            return this._data[name];
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        s: 45,  // seconds to minute
        m: 45,  // minutes to hour
        h: 22,  // hours to day
        d: 26,  // days to month
        M: 11   // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {
        var duration = create__createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds < thresholds.s && ['s', seconds]  ||
                minutes === 1          && ['m']           ||
                minutes < thresholds.m && ['mm', minutes] ||
                hours   === 1          && ['h']           ||
                hours   < thresholds.h && ['hh', hours]   ||
                days    === 1          && ['d']           ||
                days    < thresholds.d && ['dd', days]    ||
                months  === 1          && ['M']           ||
                months  < thresholds.M && ['MM', months]  ||
                years   === 1          && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set a threshold for relative time strings
    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        return true;
    }

    function humanize (withSuffix) {
        var locale = this.localeData();
        var output = duration_humanize__relativeTime(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var iso_string__abs = Math.abs;

    function iso_string__toISOString() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        var seconds = iso_string__abs(this._milliseconds) / 1000;
        var days         = iso_string__abs(this._days);
        var months       = iso_string__abs(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds;
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        return (total < 0 ? '-' : '') +
            'P' +
            (Y ? Y + 'Y' : '') +
            (M ? M + 'M' : '') +
            (D ? D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? h + 'H' : '') +
            (m ? m + 'M' : '') +
            (s ? s + 'S' : '');
    }

    var duration_prototype__proto = Duration.prototype;

    duration_prototype__proto.abs            = duration_abs__abs;
    duration_prototype__proto.add            = duration_add_subtract__add;
    duration_prototype__proto.subtract       = duration_add_subtract__subtract;
    duration_prototype__proto.as             = as;
    duration_prototype__proto.asMilliseconds = asMilliseconds;
    duration_prototype__proto.asSeconds      = asSeconds;
    duration_prototype__proto.asMinutes      = asMinutes;
    duration_prototype__proto.asHours        = asHours;
    duration_prototype__proto.asDays         = asDays;
    duration_prototype__proto.asWeeks        = asWeeks;
    duration_prototype__proto.asMonths       = asMonths;
    duration_prototype__proto.asYears        = asYears;
    duration_prototype__proto.valueOf        = duration_as__valueOf;
    duration_prototype__proto._bubble        = bubble;
    duration_prototype__proto.get            = duration_get__get;
    duration_prototype__proto.milliseconds   = milliseconds;
    duration_prototype__proto.seconds        = seconds;
    duration_prototype__proto.minutes        = minutes;
    duration_prototype__proto.hours          = hours;
    duration_prototype__proto.days           = days;
    duration_prototype__proto.weeks          = weeks;
    duration_prototype__proto.months         = months;
    duration_prototype__proto.years          = years;
    duration_prototype__proto.humanize       = humanize;
    duration_prototype__proto.toISOString    = iso_string__toISOString;
    duration_prototype__proto.toString       = iso_string__toISOString;
    duration_prototype__proto.toJSON         = iso_string__toISOString;
    duration_prototype__proto.locale         = locale;
    duration_prototype__proto.localeData     = localeData;

    // Deprecations
    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
    duration_prototype__proto.lang = lang;

    // Side effect imports

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    utils_hooks__hooks.version = '2.10.6';

    setHookCallback(local__createLocal);

    utils_hooks__hooks.fn                    = momentPrototype;
    utils_hooks__hooks.min                   = min;
    utils_hooks__hooks.max                   = max;
    utils_hooks__hooks.utc                   = create_utc__createUTC;
    utils_hooks__hooks.unix                  = moment__createUnix;
    utils_hooks__hooks.months                = lists__listMonths;
    utils_hooks__hooks.isDate                = isDate;
    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
    utils_hooks__hooks.invalid               = valid__createInvalid;
    utils_hooks__hooks.duration              = create__createDuration;
    utils_hooks__hooks.isMoment              = isMoment;
    utils_hooks__hooks.weekdays              = lists__listWeekdays;
    utils_hooks__hooks.parseZone             = moment__createInZone;
    utils_hooks__hooks.localeData            = locale_locales__getLocale;
    utils_hooks__hooks.isDuration            = isDuration;
    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
    utils_hooks__hooks.defineLocale          = defineLocale;
    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
    utils_hooks__hooks.normalizeUnits        = normalizeUnits;
    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;

    var _moment = utils_hooks__hooks;

    return _moment;

}));
},{}],70:[function(require,module,exports){
'use strict';

var React = require('react');

var Option = React.createClass({
	displayName: 'Option',

	propTypes: {
		addLabelText: React.PropTypes.string, // string rendered in case of allowCreate option passed to ReactSelect
		className: React.PropTypes.string, // className (based on mouse position)
		mouseDown: React.PropTypes.func, // method to handle click on option element
		mouseEnter: React.PropTypes.func, // method to handle mouseEnter on option element
		mouseLeave: React.PropTypes.func, // method to handle mouseLeave on option element
		option: React.PropTypes.object.isRequired, // object that is base for that option
		renderFunc: React.PropTypes.func // method passed to ReactSelect component to render label text
	},

	render: function render() {
		var obj = this.props.option;
		var renderedLabel = this.props.renderFunc(obj);

		return obj.disabled ? React.createElement(
			'div',
			{ className: this.props.className },
			renderedLabel
		) : React.createElement(
			'div',
			{ className: this.props.className,
				onMouseEnter: this.props.mouseEnter,
				onMouseLeave: this.props.mouseLeave,
				onMouseDown: this.props.mouseDown,
				onClick: this.props.mouseDown },
			obj.create ? this.props.addLabelText.replace('{label}', obj.label) : renderedLabel
		);
	}
});

module.exports = Option;
},{"react":"react"}],71:[function(require,module,exports){
/* disable some rules until we refactor more completely; fixing them now would
   cause conflicts with some open PRs unnecessarily. */
/* eslint react/jsx-sort-prop-types: 0, react/sort-comp: 0, react/prop-types: 0 */

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var Input = require('react-input-autosize');
var classes = require('classnames');
var Value = require('./Value');
var SingleValue = require('./SingleValue');
var Option = require('./Option');

var requestId = 0;

var Select = React.createClass({

	displayName: 'Select',

	propTypes: {
		addLabelText: React.PropTypes.string, // placeholder displayed when you want to add a label on a multi-value input
		allowCreate: React.PropTypes.bool, // whether to allow creation of new entries
		asyncOptions: React.PropTypes.func, // function to call to get options
		autoload: React.PropTypes.bool, // whether to auto-load the default async options set
		backspaceRemoves: React.PropTypes.bool, // whether backspace removes an item if there is no text input
		cacheAsyncResults: React.PropTypes.bool, // whether to allow cache
		className: React.PropTypes.string, // className for the outer element
		clearAllText: React.PropTypes.string, // title for the "clear" control when multi: true
		clearValueText: React.PropTypes.string, // title for the "clear" control
		clearable: React.PropTypes.bool, // should it be possible to reset value
		delimiter: React.PropTypes.string, // delimiter to use to join multiple values
		disabled: React.PropTypes.bool, // whether the Select is disabled or not
		filterOption: React.PropTypes.func, // method to filter a single option: function(option, filterString)
		filterOptions: React.PropTypes.func, // method to filter the options array: function([options], filterString, [values])
		ignoreCase: React.PropTypes.bool, // whether to perform case-insensitive filtering
		inputProps: React.PropTypes.object, // custom attributes for the Input (in the Select-control) e.g: {'data-foo': 'bar'}
		matchPos: React.PropTypes.string, // (any|start) match the start or entire string when filtering
		matchProp: React.PropTypes.string, // (any|label|value) which option property to filter on
		multi: React.PropTypes.bool, // multi-value input
		name: React.PropTypes.string, // field name, for hidden <input /> tag
		newOptionCreator: React.PropTypes.func, // factory to create new options when allowCreate set
		noResultsText: React.PropTypes.string, // placeholder displayed when there are no matching search results
		onBlur: React.PropTypes.func, // onBlur handler: function(event) {}
		onChange: React.PropTypes.func, // onChange handler: function(newValue) {}
		onFocus: React.PropTypes.func, // onFocus handler: function(event) {}
		onOptionLabelClick: React.PropTypes.func, // onCLick handler for value labels: function (value, event) {}
		optionComponent: React.PropTypes.func, // option component to render in dropdown
		optionRenderer: React.PropTypes.func, // optionRenderer: function(option) {}
		options: React.PropTypes.array, // array of options
		placeholder: React.PropTypes.string, // field placeholder, displayed when there's no value
		searchable: React.PropTypes.bool, // whether to enable searching feature or not
		searchPromptText: React.PropTypes.string, // label to prompt for search input
		singleValueComponent: React.PropTypes.func, // single value component when multiple is set to false
		value: React.PropTypes.any, // initial field value
		valueComponent: React.PropTypes.func, // value component to render in multiple mode
		valueRenderer: React.PropTypes.func // valueRenderer: function(option) {}
	},

	getDefaultProps: function getDefaultProps() {
		return {
			addLabelText: 'Add {label} ?',
			allowCreate: false,
			asyncOptions: undefined,
			autoload: true,
			backspaceRemoves: true,
			cacheAsyncResults: true,
			className: undefined,
			clearAllText: 'Clear all',
			clearValueText: 'Clear value',
			clearable: true,
			delimiter: ',',
			disabled: false,
			ignoreCase: true,
			inputProps: {},
			matchPos: 'any',
			matchProp: 'any',
			name: undefined,
			newOptionCreator: undefined,
			noResultsText: 'No results found',
			onChange: undefined,
			onOptionLabelClick: undefined,
			optionComponent: Option,
			options: undefined,
			placeholder: 'Select...',
			searchable: true,
			searchPromptText: 'Type to search',
			singleValueComponent: SingleValue,
			value: undefined,
			valueComponent: Value
		};
	},

	getInitialState: function getInitialState() {
		return {
			/*
    * set by getStateFromValue on componentWillMount:
    * - value
    * - values
    * - filteredOptions
    * - inputValue
    * - placeholder
    * - focusedOption
   */
			isFocused: false,
			isLoading: false,
			isOpen: false,
			options: this.props.options
		};
	},

	componentWillMount: function componentWillMount() {
		var _this = this;

		this._optionsCache = {};
		this._optionsFilterString = '';
		this._closeMenuIfClickedOutside = function (event) {
			if (!_this.state.isOpen) {
				return;
			}
			var menuElem = React.findDOMNode(_this.refs.selectMenuContainer);
			var controlElem = React.findDOMNode(_this.refs.control);

			var eventOccuredOutsideMenu = _this.clickedOutsideElement(menuElem, event);
			var eventOccuredOutsideControl = _this.clickedOutsideElement(controlElem, event);

			// Hide dropdown menu if click occurred outside of menu
			if (eventOccuredOutsideMenu && eventOccuredOutsideControl) {
				_this.setState({
					isOpen: false
				}, _this._unbindCloseMenuIfClickedOutside);
			}
		};
		this._bindCloseMenuIfClickedOutside = function () {
			if (!document.addEventListener && document.attachEvent) {
				document.attachEvent('onclick', this._closeMenuIfClickedOutside);
			} else {
				document.addEventListener('click', this._closeMenuIfClickedOutside);
			}
		};
		this._unbindCloseMenuIfClickedOutside = function () {
			if (!document.removeEventListener && document.detachEvent) {
				document.detachEvent('onclick', this._closeMenuIfClickedOutside);
			} else {
				document.removeEventListener('click', this._closeMenuIfClickedOutside);
			}
		};
		this.setState(this.getStateFromValue(this.props.value));
	},

	componentDidMount: function componentDidMount() {
		if (this.props.asyncOptions && this.props.autoload) {
			this.autoloadAsyncOptions();
		}
	},

	componentWillUnmount: function componentWillUnmount() {
		clearTimeout(this._blurTimeout);
		clearTimeout(this._focusTimeout);
		if (this.state.isOpen) {
			this._unbindCloseMenuIfClickedOutside();
		}
	},

	componentWillReceiveProps: function componentWillReceiveProps(newProps) {
		var _this2 = this;

		var optionsChanged = false;
		if (JSON.stringify(newProps.options) !== JSON.stringify(this.props.options)) {
			optionsChanged = true;
			this.setState({
				options: newProps.options,
				filteredOptions: this.filterOptions(newProps.options)
			});
		}
		if (newProps.value !== this.state.value || newProps.placeholder !== this.props.placeholder || optionsChanged) {
			var setState = function setState(newState) {
				_this2.setState(_this2.getStateFromValue(newProps.value, newState && newState.options || newProps.options, newProps.placeholder));
			};
			if (this.props.asyncOptions) {
				this.loadAsyncOptions(newProps.value, {}, setState);
			} else {
				setState();
			}
		}
	},

	componentDidUpdate: function componentDidUpdate() {
		var _this3 = this;

		if (!this.props.disabled && this._focusAfterUpdate) {
			clearTimeout(this._blurTimeout);
			this._focusTimeout = setTimeout(function () {
				_this3.getInputNode().focus();
				_this3._focusAfterUpdate = false;
			}, 50);
		}
		if (this._focusedOptionReveal) {
			if (this.refs.focused && this.refs.menu) {
				var focusedDOM = React.findDOMNode(this.refs.focused);
				var menuDOM = React.findDOMNode(this.refs.menu);
				var focusedRect = focusedDOM.getBoundingClientRect();
				var menuRect = menuDOM.getBoundingClientRect();

				if (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top) {
					menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
				}
			}
			this._focusedOptionReveal = false;
		}
	},

	focus: function focus() {
		this.getInputNode().focus();
	},

	clickedOutsideElement: function clickedOutsideElement(element, event) {
		var eventTarget = event.target ? event.target : event.srcElement;
		while (eventTarget != null) {
			if (eventTarget === element) return false;
			eventTarget = eventTarget.offsetParent;
		}
		return true;
	},

	getStateFromValue: function getStateFromValue(value, options, placeholder) {
		if (!options) {
			options = this.state.options;
		}
		if (!placeholder) {
			placeholder = this.props.placeholder;
		}

		// reset internal filter string
		this._optionsFilterString = '';

		var values = this.initValuesArray(value, options);
		var filteredOptions = this.filterOptions(options, values);

		var focusedOption;
		var valueForState = null;
		if (!this.props.multi && values.length) {
			focusedOption = values[0];
			valueForState = values[0].value;
		} else {
			for (var optionIndex = 0; optionIndex < filteredOptions.length; ++optionIndex) {
				if (!filteredOptions[optionIndex].disabled) {
					focusedOption = filteredOptions[optionIndex];
					break;
				}
			}
			valueForState = values.map(function (v) {
				return v.value;
			}).join(this.props.delimiter);
		}

		return {
			value: valueForState,
			values: values,
			inputValue: '',
			filteredOptions: filteredOptions,
			placeholder: !this.props.multi && values.length ? values[0].label : placeholder,
			focusedOption: focusedOption
		};
	},

	initValuesArray: function initValuesArray(values, options) {
		if (!Array.isArray(values)) {
			if (typeof values === 'string') {
				values = values === '' ? [] : values.split(this.props.delimiter);
			} else {
				values = values !== undefined && values !== null ? [values] : [];
			}
		}
		return values.map(function (val) {
			if (typeof val === 'string' || typeof val === 'number') {
				for (var key in options) {
					if (options.hasOwnProperty(key) && options[key] && (options[key].value === val || typeof options[key].value === 'number' && options[key].value.toString() === val)) {
						return options[key];
					}
				}
				return { value: val, label: val };
			} else {
				return val;
			}
		});
	},

	setValue: function setValue(value, focusAfterUpdate) {
		if (focusAfterUpdate || focusAfterUpdate === undefined) {
			this._focusAfterUpdate = true;
		}
		var newState = this.getStateFromValue(value);
		newState.isOpen = false;
		this.fireChangeEvent(newState);
		this.setState(newState);
	},

	selectValue: function selectValue(value) {
		if (!this.props.multi) {
			this.setValue(value);
		} else if (value) {
			this.addValue(value);
		}
		this._unbindCloseMenuIfClickedOutside();
	},

	addValue: function addValue(value) {
		this.setValue(this.state.values.concat(value));
	},

	popValue: function popValue() {
		this.setValue(this.state.values.slice(0, this.state.values.length - 1));
	},

	removeValue: function removeValue(valueToRemove) {
		this.setValue(this.state.values.filter(function (value) {
			return value !== valueToRemove;
		}));
	},

	clearValue: function clearValue(event) {
		// if the event was triggered by a mousedown and not the primary
		// button, ignore it.
		if (event && event.type === 'mousedown' && event.button !== 0) {
			return;
		}
		event.stopPropagation();
		event.preventDefault();
		this.setValue(null);
	},

	resetValue: function resetValue() {
		this.setValue(this.state.value === '' ? null : this.state.value);
	},

	getInputNode: function getInputNode() {
		var input = this.refs.input;
		return this.props.searchable ? input : React.findDOMNode(input);
	},

	fireChangeEvent: function fireChangeEvent(newState) {
		if (newState.value !== this.state.value && this.props.onChange) {
			this.props.onChange(newState.value, newState.values);
		}
	},

	handleMouseDown: function handleMouseDown(event) {
		// if the event was triggered by a mousedown and not the primary
		// button, or if the component is disabled, ignore it.
		if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
			return;
		}
		event.stopPropagation();
		event.preventDefault();
		if (this.state.isFocused) {
			this.setState({
				isOpen: true
			}, this._bindCloseMenuIfClickedOutside);
		} else {
			this._openAfterFocus = true;
			this.getInputNode().focus();
		}
	},

	handleMouseDownOnArrow: function handleMouseDownOnArrow(event) {
		// if the event was triggered by a mousedown and not the primary
		// button, or if the component is disabled, ignore it.
		if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
			return;
		}
		// If not focused, handleMouseDown will handle it
		if (!this.state.isOpen) {
			return;
		}
		event.stopPropagation();
		event.preventDefault();
		this.setState({
			isOpen: false
		}, this._unbindCloseMenuIfClickedOutside);
	},

	handleInputFocus: function handleInputFocus(event) {
		var newIsOpen = this.state.isOpen || this._openAfterFocus;
		this.setState({
			isFocused: true,
			isOpen: newIsOpen
		}, function () {
			if (newIsOpen) {
				this._bindCloseMenuIfClickedOutside();
			} else {
				this._unbindCloseMenuIfClickedOutside();
			}
		});
		this._openAfterFocus = false;
		if (this.props.onFocus) {
			this.props.onFocus(event);
		}
	},

	handleInputBlur: function handleInputBlur(event) {
		var _this4 = this;

		this._blurTimeout = setTimeout(function () {
			if (_this4._focusAfterUpdate) return;
			_this4.setState({
				isFocused: false,
				isOpen: false
			});
		}, 50);
		if (this.props.onBlur) {
			this.props.onBlur(event);
		}
	},

	handleKeyDown: function handleKeyDown(event) {
		if (this.props.disabled) return;
		switch (event.keyCode) {
			case 8:
				// backspace
				if (!this.state.inputValue && this.props.backspaceRemoves) {
					this.popValue();
				}
				return;
			case 9:
				// tab
				if (event.shiftKey || !this.state.isOpen || !this.state.focusedOption) {
					return;
				}
				this.selectFocusedOption();
				break;
			case 13:
				// enter
				if (!this.state.isOpen) return;

				this.selectFocusedOption();
				break;
			case 27:
				// escape
				if (this.state.isOpen) {
					this.resetValue();
				} else if (this.props.clearable) {
					this.clearValue(event);
				}
				break;
			case 38:
				// up
				this.focusPreviousOption();
				break;
			case 40:
				// down
				this.focusNextOption();
				break;
			case 188:
				// ,
				if (this.props.allowCreate && this.props.multi) {
					event.preventDefault();
					event.stopPropagation();
					this.selectFocusedOption();
				} else {
					return;
				}
				break;
			default:
				return;
		}
		event.preventDefault();
	},

	// Ensures that the currently focused option is available in filteredOptions.
	// If not, returns the first available option.
	_getNewFocusedOption: function _getNewFocusedOption(filteredOptions) {
		for (var key in filteredOptions) {
			if (filteredOptions.hasOwnProperty(key) && filteredOptions[key] === this.state.focusedOption) {
				return filteredOptions[key];
			}
		}
		return filteredOptions[0];
	},

	handleInputChange: function handleInputChange(event) {
		// assign an internal variable because we need to use
		// the latest value before setState() has completed.
		this._optionsFilterString = event.target.value;

		if (this.props.asyncOptions) {
			this.setState({
				isLoading: true,
				inputValue: event.target.value
			});
			this.loadAsyncOptions(event.target.value, {
				isLoading: false,
				isOpen: true
			}, this._bindCloseMenuIfClickedOutside);
		} else {
			var filteredOptions = this.filterOptions(this.state.options);
			this.setState({
				isOpen: true,
				inputValue: event.target.value,
				filteredOptions: filteredOptions,
				focusedOption: this._getNewFocusedOption(filteredOptions)
			}, this._bindCloseMenuIfClickedOutside);
		}
	},

	autoloadAsyncOptions: function autoloadAsyncOptions() {
		var _this5 = this;

		this.loadAsyncOptions(this.props.value || '', {}, function () {
			// update with fetched but don't focus
			_this5.setValue(_this5.props.value, false);
		});
	},

	loadAsyncOptions: function loadAsyncOptions(input, state, callback) {
		var _this6 = this;

		var thisRequestId = this._currentRequestId = requestId++;
		if (this.props.cacheAsyncResults) {
			for (var i = 0; i <= input.length; i++) {
				var cacheKey = input.slice(0, i);
				if (this._optionsCache[cacheKey] && (input === cacheKey || this._optionsCache[cacheKey].complete)) {
					var options = this._optionsCache[cacheKey].options;
					var filteredOptions = this.filterOptions(options);
					var newState = {
						options: options,
						filteredOptions: filteredOptions,
						focusedOption: this._getNewFocusedOption(filteredOptions)
					};
					for (var key in state) {
						if (state.hasOwnProperty(key)) {
							newState[key] = state[key];
						}
					}
					this.setState(newState);
					if (callback) callback.call(this, newState);
					return;
				}
			}
		}

		this.props.asyncOptions(input, function (err, data) {
			if (err) throw err;
			if (_this6.props.cacheAsyncResults) {
				_this6._optionsCache[input] = data;
			}
			if (thisRequestId !== _this6._currentRequestId) {
				return;
			}
			var filteredOptions = _this6.filterOptions(data.options);
			var newState = {
				options: data.options,
				filteredOptions: filteredOptions,
				focusedOption: _this6._getNewFocusedOption(filteredOptions)
			};
			for (var key in state) {
				if (state.hasOwnProperty(key)) {
					newState[key] = state[key];
				}
			}
			_this6.setState(newState);
			if (callback) callback.call(_this6, newState);
		});
	},

	filterOptions: function filterOptions(options, values) {
		var filterValue = this._optionsFilterString;
		var exclude = (values || this.state.values).map(function (i) {
			return i.value;
		});
		if (this.props.filterOptions) {
			return this.props.filterOptions.call(this, options, filterValue, exclude);
		} else {
			var filterOption = function filterOption(op) {
				if (this.props.multi && exclude.indexOf(op.value) > -1) return false;
				if (this.props.filterOption) return this.props.filterOption.call(this, op, filterValue);
				var valueTest = String(op.value),
				    labelTest = String(op.label);
				if (this.props.ignoreCase) {
					valueTest = valueTest.toLowerCase();
					labelTest = labelTest.toLowerCase();
					filterValue = filterValue.toLowerCase();
				}
				return !filterValue || this.props.matchPos === 'start' ? this.props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || this.props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : this.props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || this.props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
			};
			return (options || []).filter(filterOption, this);
		}
	},

	selectFocusedOption: function selectFocusedOption() {
		if (this.props.allowCreate && !this.state.focusedOption) {
			return this.selectValue(this.state.inputValue);
		}
		return this.selectValue(this.state.focusedOption);
	},

	focusOption: function focusOption(op) {
		this.setState({
			focusedOption: op
		});
	},

	focusNextOption: function focusNextOption() {
		this.focusAdjacentOption('next');
	},

	focusPreviousOption: function focusPreviousOption() {
		this.focusAdjacentOption('previous');
	},

	focusAdjacentOption: function focusAdjacentOption(dir) {
		this._focusedOptionReveal = true;
		var ops = this.state.filteredOptions.filter(function (op) {
			return !op.disabled;
		});
		if (!this.state.isOpen) {
			this.setState({
				isOpen: true,
				inputValue: '',
				focusedOption: this.state.focusedOption || ops[dir === 'next' ? 0 : ops.length - 1]
			}, this._bindCloseMenuIfClickedOutside);
			return;
		}
		if (!ops.length) {
			return;
		}
		var focusedIndex = -1;
		for (var i = 0; i < ops.length; i++) {
			if (this.state.focusedOption === ops[i]) {
				focusedIndex = i;
				break;
			}
		}
		var focusedOption = ops[0];
		if (dir === 'next' && focusedIndex > -1 && focusedIndex < ops.length - 1) {
			focusedOption = ops[focusedIndex + 1];
		} else if (dir === 'previous') {
			if (focusedIndex > 0) {
				focusedOption = ops[focusedIndex - 1];
			} else {
				focusedOption = ops[ops.length - 1];
			}
		}
		this.setState({
			focusedOption: focusedOption
		});
	},

	unfocusOption: function unfocusOption(op) {
		if (this.state.focusedOption === op) {
			this.setState({
				focusedOption: null
			});
		}
	},

	buildMenu: function buildMenu() {
		var focusedValue = this.state.focusedOption ? this.state.focusedOption.value : null;
		var renderLabel = this.props.optionRenderer || function (op) {
			return op.label;
		};
		if (this.state.filteredOptions.length > 0) {
			focusedValue = focusedValue == null ? this.state.filteredOptions[0] : focusedValue;
		}
		// Add the current value to the filtered options in last resort
		var options = this.state.filteredOptions;
		if (this.props.allowCreate && this.state.inputValue.trim()) {
			var inputValue = this.state.inputValue;
			options = options.slice();
			var newOption = this.props.newOptionCreator ? this.props.newOptionCreator(inputValue) : {
				value: inputValue,
				label: inputValue,
				create: true
			};
			options.unshift(newOption);
		}
		var ops = Object.keys(options).map(function (key) {
			var op = options[key];
			var isSelected = this.state.value === op.value;
			var isFocused = focusedValue === op.value;
			var optionClass = classes({
				'Select-option': true,
				'is-selected': isSelected,
				'is-focused': isFocused,
				'is-disabled': op.disabled
			});
			var ref = isFocused ? 'focused' : null;
			var mouseEnter = this.focusOption.bind(this, op);
			var mouseLeave = this.unfocusOption.bind(this, op);
			var mouseDown = this.selectValue.bind(this, op);
			var optionResult = React.createElement(this.props.optionComponent, {
				key: 'option-' + op.value,
				className: optionClass,
				renderFunc: renderLabel,
				mouseEnter: mouseEnter,
				mouseLeave: mouseLeave,
				mouseDown: mouseDown,
				click: mouseDown,
				addLabelText: this.props.addLabelText,
				option: op,
				ref: ref
			});
			return optionResult;
		}, this);
		return ops.length ? ops : React.createElement(
			'div',
			{ className: 'Select-noresults' },
			this.props.asyncOptions && !this.state.inputValue ? this.props.searchPromptText : this.props.noResultsText
		);
	},

	handleOptionLabelClick: function handleOptionLabelClick(value, event) {
		if (this.props.onOptionLabelClick) {
			this.props.onOptionLabelClick(value, event);
		}
	},

	render: function render() {
		var selectClass = classes('Select', this.props.className, {
			'is-multi': this.props.multi,
			'is-searchable': this.props.searchable,
			'is-open': this.state.isOpen,
			'is-focused': this.state.isFocused,
			'is-loading': this.state.isLoading,
			'is-disabled': this.props.disabled,
			'has-value': this.state.value
		});
		var value = [];
		if (this.props.multi) {
			this.state.values.forEach(function (val) {
				var onOptionLabelClick = this.handleOptionLabelClick.bind(this, val);
				var onRemove = this.removeValue.bind(this, val);
				var valueComponent = React.createElement(this.props.valueComponent, {
					key: val.value,
					option: val,
					renderer: this.props.valueRenderer,
					optionLabelClick: !!this.props.onOptionLabelClick,
					onOptionLabelClick: onOptionLabelClick,
					onRemove: onRemove,
					disabled: this.props.disabled
				});
				value.push(valueComponent);
			}, this);
		}

		if (!this.state.inputValue && (!this.props.multi || !value.length)) {
			var val = this.state.values[0] || null;
			if (this.props.valueRenderer && !!this.state.values.length) {
				value.push(React.createElement(Value, {
					key: 0,
					option: val,
					renderer: this.props.valueRenderer,
					disabled: this.props.disabled }));
			} else {
				var singleValueComponent = React.createElement(this.props.singleValueComponent, {
					key: 'placeholder',
					value: val,
					placeholder: this.state.placeholder
				});
				value.push(singleValueComponent);
			}
		}

		var loading = this.state.isLoading ? React.createElement('span', { className: 'Select-loading', 'aria-hidden': 'true' }) : null;
		var clear = this.props.clearable && this.state.value && !this.props.disabled ? React.createElement('span', { className: 'Select-clear', title: this.props.multi ? this.props.clearAllText : this.props.clearValueText, 'aria-label': this.props.multi ? this.props.clearAllText : this.props.clearValueText, onMouseDown: this.clearValue, onClick: this.clearValue, dangerouslySetInnerHTML: { __html: '&times;' } }) : null;

		var menu;
		var menuProps;
		if (this.state.isOpen) {
			menuProps = {
				ref: 'menu',
				className: 'Select-menu'
			};
			if (this.props.multi) {
				menuProps.onMouseDown = this.handleMouseDown;
			}
			menu = React.createElement(
				'div',
				{ ref: 'selectMenuContainer', className: 'Select-menu-outer' },
				React.createElement(
					'div',
					menuProps,
					this.buildMenu()
				)
			);
		}

		var input;
		var inputProps = {
			ref: 'input',
			className: 'Select-input ' + (this.props.inputProps.className || ''),
			tabIndex: this.props.tabIndex || 0,
			onFocus: this.handleInputFocus,
			onBlur: this.handleInputBlur
		};
		for (var key in this.props.inputProps) {
			if (this.props.inputProps.hasOwnProperty(key) && key !== 'className') {
				inputProps[key] = this.props.inputProps[key];
			}
		}

		if (!this.props.disabled) {
			if (this.props.searchable) {
				input = React.createElement(Input, _extends({ value: this.state.inputValue, onChange: this.handleInputChange, minWidth: '5' }, inputProps));
			} else {
				input = React.createElement(
					'div',
					inputProps,
					' '
				);
			}
		} else if (!this.props.multi || !this.state.values.length) {
			input = React.createElement(
				'div',
				{ className: 'Select-input' },
				' '
			);
		}

		return React.createElement(
			'div',
			{ ref: 'wrapper', className: selectClass },
			React.createElement('input', { type: 'hidden', ref: 'value', name: this.props.name, value: this.state.value, disabled: this.props.disabled }),
			React.createElement(
				'div',
				{ className: 'Select-control', ref: 'control', onKeyDown: this.handleKeyDown, onMouseDown: this.handleMouseDown, onTouchEnd: this.handleMouseDown },
				value,
				input,
				React.createElement('span', { className: 'Select-arrow-zone', onMouseDown: this.handleMouseDownOnArrow }),
				React.createElement('span', { className: 'Select-arrow', onMouseDown: this.handleMouseDownOnArrow }),
				loading,
				clear
			),
			menu
		);
	}

});

module.exports = Select;
},{"./Option":70,"./SingleValue":72,"./Value":73,"classnames":74,"react":"react","react-input-autosize":75}],72:[function(require,module,exports){
"use strict";

var React = require('react');

var SingleValue = React.createClass({
	displayName: "SingleValue",

	propTypes: {
		placeholder: React.PropTypes.string, // this is default value provided by React-Select based component
		value: React.PropTypes.object // selected option
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "Select-placeholder" },
			this.props.placeholder
		);
	}
});

module.exports = SingleValue;
},{"react":"react"}],73:[function(require,module,exports){
'use strict';

var React = require('react');

var Value = React.createClass({

	displayName: 'Value',

	propTypes: {
		disabled: React.PropTypes.bool, // disabled prop passed to ReactSelect
		onOptionLabelClick: React.PropTypes.func, // method to handle click on value label
		onRemove: React.PropTypes.func, // method to handle remove of that value
		option: React.PropTypes.object.isRequired, // option passed to component
		optionLabelClick: React.PropTypes.bool, // indicates if onOptionLabelClick should be handled
		renderer: React.PropTypes.func // method to render option label passed to ReactSelect
	},

	blockEvent: function blockEvent(event) {
		event.stopPropagation();
	},

	handleOnRemove: function handleOnRemove(event) {
		if (!this.props.disabled) {
			this.props.onRemove(event);
		}
	},

	render: function render() {
		var label = this.props.option.label;
		if (this.props.renderer) {
			label = this.props.renderer(this.props.option);
		}

		if (!this.props.onRemove && !this.props.optionLabelClick) {
			return React.createElement(
				'div',
				{ className: 'Select-value' },
				label
			);
		}

		if (this.props.optionLabelClick) {
			label = React.createElement(
				'a',
				{ className: 'Select-item-label__a',
					onMouseDown: this.blockEvent,
					onTouchEnd: this.props.onOptionLabelClick,
					onClick: this.props.onOptionLabelClick },
				label
			);
		}

		return React.createElement(
			'div',
			{ className: 'Select-item' },
			React.createElement(
				'span',
				{ className: 'Select-item-icon',
					onMouseDown: this.blockEvent,
					onClick: this.handleOnRemove,
					onTouchEnd: this.handleOnRemove },
				'×'
			),
			React.createElement(
				'span',
				{ className: 'Select-item-label' },
				label
			)
		);
	}

});

module.exports = Value;
},{"react":"react"}],74:[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function () {
	'use strict';

	function classNames () {

		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if ('string' === argType || 'number' === argType) {
				classes += ' ' + arg;

			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);

			} else if ('object' === argType) {
				for (var key in arg) {
					if (arg.hasOwnProperty(key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}

		return classes.substr(1);
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd){
		// AMD. Register as an anonymous module.
		define(function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}

}());

},{}],75:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

var sizerStyle = { position: 'absolute', visibility: 'hidden', height: 0, width: 0, overflow: 'scroll', whiteSpace: 'nowrap' };

var AutosizeInput = React.createClass({
	displayName: 'AutosizeInput',

	propTypes: {
		value: React.PropTypes.any, // field value
		defaultValue: React.PropTypes.any, // default field value
		onChange: React.PropTypes.func, // onChange handler: function(newValue) {}
		style: React.PropTypes.object, // css styles for the outer element
		className: React.PropTypes.string, // className for the outer element
		minWidth: React.PropTypes.oneOfType([// minimum width for input element
		React.PropTypes.number, React.PropTypes.string]),
		inputStyle: React.PropTypes.object, // css styles for the input element
		inputClassName: React.PropTypes.string // className for the input element
	},
	getDefaultProps: function getDefaultProps() {
		return {
			minWidth: 1
		};
	},
	getInitialState: function getInitialState() {
		return {
			inputWidth: this.props.minWidth
		};
	},
	componentDidMount: function componentDidMount() {
		this.copyInputStyles();
		this.updateInputWidth();
	},
	componentDidUpdate: function componentDidUpdate() {
		this.updateInputWidth();
	},
	copyInputStyles: function copyInputStyles() {
		if (!this.isMounted() || !window.getComputedStyle) {
			return;
		}
		var inputStyle = window.getComputedStyle(React.findDOMNode(this.refs.input));
		var widthNode = React.findDOMNode(this.refs.sizer);
		widthNode.style.fontSize = inputStyle.fontSize;
		widthNode.style.fontFamily = inputStyle.fontFamily;
		if (this.props.placeholder) {
			var placeholderNode = React.findDOMNode(this.refs.placeholderSizer);
			placeholderNode.style.fontSize = inputStyle.fontSize;
			placeholderNode.style.fontFamily = inputStyle.fontFamily;
		}
	},
	updateInputWidth: function updateInputWidth() {
		if (!this.isMounted() || typeof React.findDOMNode(this.refs.sizer).scrollWidth === 'undefined') {
			return;
		}
		var newInputWidth;
		if (this.props.placeholder) {
			newInputWidth = Math.max(React.findDOMNode(this.refs.sizer).scrollWidth, React.findDOMNode(this.refs.placeholderSizer).scrollWidth) + 2;
		} else {
			newInputWidth = React.findDOMNode(this.refs.sizer).scrollWidth + 2;
		}
		if (newInputWidth < this.props.minWidth) {
			newInputWidth = this.props.minWidth;
		}
		if (newInputWidth !== this.state.inputWidth) {
			this.setState({
				inputWidth: newInputWidth
			});
		}
	},
	getInput: function getInput() {
		return this.refs.input;
	},
	focus: function focus() {
		React.findDOMNode(this.refs.input).focus();
	},
	select: function select() {
		React.findDOMNode(this.refs.input).select();
	},
	render: function render() {
		var escapedValue = (this.props.value || '').replace(/\&/g, '&amp;').replace(/ /g, '&nbsp;').replace(/\</g, '&lt;').replace(/\>/g, '&gt;');
		var wrapperStyle = this.props.style || {};
		wrapperStyle.display = 'inline-block';
		var inputStyle = this.props.inputStyle || {};
		inputStyle.width = this.state.inputWidth;
		var placeholder = this.props.placeholder ? React.createElement(
			'div',
			{ ref: 'placeholderSizer', style: sizerStyle },
			this.props.placeholder
		) : null;
		return React.createElement(
			'div',
			{ className: this.props.className, style: wrapperStyle },
			React.createElement('input', _extends({}, this.props, { ref: 'input', className: this.props.inputClassName, style: inputStyle })),
			React.createElement('div', { ref: 'sizer', style: sizerStyle, dangerouslySetInnerHTML: { __html: escapedValue } }),
			placeholder
		);
	}
});

module.exports = AutosizeInput;
},{"react":"react"}],76:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
/**
 * <TextareaAutosize />
 */

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _emptyFunction = require('react/lib/emptyFunction');

var _emptyFunction2 = _interopRequireWildcard(_emptyFunction);

var _calculateNodeHeight = require('./calculateNodeHeight');

var _calculateNodeHeight2 = _interopRequireWildcard(_calculateNodeHeight);

var TextareaAutosize = (function (_React$Component) {
  function TextareaAutosize(props) {
    _classCallCheck(this, TextareaAutosize);

    _get(Object.getPrototypeOf(TextareaAutosize.prototype), 'constructor', this).call(this, props);
    this.state = {
      height: null,
      minHeight: -Infinity,
      maxHeight: Infinity
    };
    this._onChange = this._onChange.bind(this);
    this._resizeComponent = this._resizeComponent.bind(this);
  }

  _inherits(TextareaAutosize, _React$Component);

  _createClass(TextareaAutosize, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var valueLink = _props.valueLink;
      var onChange = _props.onChange;

      var props = _objectWithoutProperties(_props, ['valueLink', 'onChange']);

      props = _extends({}, props);
      if (typeof valueLink === 'object') {
        props.value = this.props.valueLink.value;
      }
      props.style = _extends({}, props.style, {
        height: this.state.height
      });
      var maxHeight = Math.max(props.style.maxHeight ? props.style.maxHeight : Infinity, this.state.maxHeight);
      if (maxHeight < this.state.height) {
        props.style.overflow = 'hidden';
      }
      return _React2['default'].createElement('textarea', _extends({}, props, { onChange: this._onChange }));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._resizeComponent();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      // Re-render with the new content then recalculate the height as required.
      this.clearNextFrame();
      this.onNextFrameActionId = onNextFrame(this._resizeComponent);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // Invoke callback when old height does not equal to new one.
      if (this.state.height !== prevState.height) {
        this.props.onHeightChange(this.state.height);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      //remove any scheduled events to prevent manipulating the node after it's
      //been unmounted
      this.clearNextFrame();
    }
  }, {
    key: 'clearNextFrame',
    value: function clearNextFrame() {
      if (this.onNextFrameActionId) {
        clearNextFrameAction(this.onNextFrameActionId);
      }
    }
  }, {
    key: '_onChange',
    value: function _onChange(e) {
      this._resizeComponent();
      var _props2 = this.props;
      var valueLink = _props2.valueLink;
      var onChange = _props2.onChange;

      if (valueLink) {
        valueLink.requestChange(e.target.value);
      } else {
        onChange(e);
      }
    }
  }, {
    key: '_resizeComponent',
    value: function _resizeComponent() {
      var useCacheForDOMMeasurements = this.props.useCacheForDOMMeasurements;

      this.setState(_calculateNodeHeight2['default'](_React2['default'].findDOMNode(this), useCacheForDOMMeasurements, this.props.rows || this.props.minRows, this.props.maxRows));
    }
  }, {
    key: 'value',

    /**
     * Read the current value of <textarea /> from DOM.
     */
    get: function () {
      return _React2['default'].findDOMNode(this).value;
    }
  }, {
    key: 'focus',

    /**
     * Put focus on a <textarea /> DOM element.
     */
    value: function focus() {
      _React2['default'].findDOMNode(this).focus();
    }
  }], [{
    key: 'propTypes',
    value: {
      /**
       * Current textarea value.
       */
      value: _React2['default'].PropTypes.string,

      /**
       * Callback on value change.
       */
      onChange: _React2['default'].PropTypes.func,

      /**
       * Callback on height changes.
       */
      onHeightChange: _React2['default'].PropTypes.func,

      /**
       * Try to cache DOM measurements performed by component so that we don't
       * touch DOM when it's not needed.
       *
       * This optimization doesn't work if we dynamically style <textarea />
       * component.
       */
      useCacheForDOMMeasurements: _React2['default'].PropTypes.bool,

      /**
       * Minimal numbder of rows to show.
       */
      rows: _React2['default'].PropTypes.number,

      /**
       * Alias for `rows`.
       */
      minRows: _React2['default'].PropTypes.number,

      /**
       * Maximum number of rows to show.
       */
      maxRows: _React2['default'].PropTypes.number
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      onChange: _emptyFunction2['default'],
      onHeightChange: _emptyFunction2['default'],
      useCacheForDOMMeasurements: false
    },
    enumerable: true
  }]);

  return TextareaAutosize;
})(_React2['default'].Component);

exports['default'] = TextareaAutosize;

function onNextFrame(cb) {
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame(cb);
  }
  return window.setTimeout(cb, 1);
}

function clearNextFrameAction(nextFrameId) {
  if (window.cancelAnimationFrame) {
    window.cancelAnimationFrame(nextFrameId);
  } else {
    window.clearTimeout(nextFrameId);
  }
}
module.exports = exports['default'];

},{"./calculateNodeHeight":77,"react":"react","react/lib/emptyFunction":78}],77:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = calculateNodeHeight;
/**
 * calculateNodeHeight(uiTextNode, useCache = false)
 */

var HIDDEN_TEXTAREA_STYLE = '\n  height:0;\n  visibility:hidden;\n  overflow:hidden;\n  position:absolute;\n  z-index:-1000;\n  top:0;\n  right:0\n';

var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-transform', 'width', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];

var computedStyleCache = {};
var hiddenTextarea = undefined;

function calculateNodeHeight(uiTextNode) {
  var useCache = arguments[1] === undefined ? false : arguments[1];
  var minRows = arguments[2] === undefined ? null : arguments[2];
  var maxRows = arguments[3] === undefined ? null : arguments[3];

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    document.body.appendChild(hiddenTextarea);
  }

  // Copy all CSS properties that have an impact on the height of the content in
  // the textbox

  var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache);

  var paddingSize = _calculateNodeStyling.paddingSize;
  var borderSize = _calculateNodeStyling.borderSize;
  var boxSizing = _calculateNodeStyling.boxSizing;
  var sizingStyle = _calculateNodeStyling.sizingStyle;

  // Need to have the overflow attribute to hide the scrollbar otherwise
  // text-lines will not calculated properly as the shadow will technically be
  // narrower for content
  hiddenTextarea.setAttribute('style', sizingStyle + ';' + HIDDEN_TEXTAREA_STYLE);
  hiddenTextarea.value = uiTextNode.value;

  var minHeight = -Infinity;
  var maxHeight = Infinity;
  var height = hiddenTextarea.scrollHeight;

  if (boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    // remove padding, since height = content
    height = height - paddingSize;
  }

  if (minRows !== null || maxRows !== null) {
    // measure height of a textarea with a single row
    hiddenTextarea.value = 'x';
    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      if (boxSizing === 'border-box') {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      if (boxSizing === 'border-box') {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      height = Math.min(maxHeight, height);
    }
  }
  return { height: height, minHeight: minHeight, maxHeight: maxHeight };
}

function calculateNodeStyling(node) {
  var useCache = arguments[1] === undefined ? false : arguments[1];

  var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');

  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }

  var style = window.getComputedStyle(node);

  var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');

  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));

  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));

  var sizingStyle = SIZING_STYLE.map(function (name) {
    return '' + name + ':' + style.getPropertyValue(name);
  }).join(';');

  var nodeInfo = {
    sizingStyle: sizingStyle,
    paddingSize: paddingSize,
    borderSize: borderSize,
    boxSizing: boxSizing
  };

  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }

  return nodeInfo;
}
module.exports = exports['default'];

},{}],78:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyFunction
 */

function makeEmptyFunction(arg) {
  return function() {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
function emptyFunction() {}

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function() { return this; };
emptyFunction.thatReturnsArgument = function(arg) { return arg; };

module.exports = emptyFunction;

},{}]},{},[43]);
