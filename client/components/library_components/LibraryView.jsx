var React = require('react');
var LibraryStore = require('../../stores/library-store');
var Actions = require('../../actions');

//This is the parent component for the library view. The file Structure is as follows:
  //LibraryView
    //Library
      //LibLessonEntry
      //LibAddLesson

var Library = require('Library.jsx');

var LibraryView = React.createClass({
  componentWillMount: function(){
    LibraryStore.updateUser()
  },

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