var React = require('react');

//This is the parent component for the library view. The file Structure is as follows:
  //LibraryView
    //Library
      //LibLessonEntry
      //LibAddLesson

var Library = require('./Library.jsx');

var LibraryView = React.createClass({
  onLockClick: function(lock){
    console.log("locked!")
  },
  render: function() {
    return (
      <div id="library-view">
        <Library />
      </div>
    );
  }
});

module.exports = LibraryView;