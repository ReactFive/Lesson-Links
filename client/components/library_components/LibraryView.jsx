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

  render: function() {
    return (
      <div id="library-view">
        <Library />
      </div>
    );
  }
});

module.exports = LibraryView;