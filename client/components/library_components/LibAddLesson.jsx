var React = require('react');

var LibAddLesson = React.createClass({
  render:function(){
    return (
      <span className="lib-add-lesson">
        <a className="add-me">+</a>
      </span>
    )
  }
});

module.exports = LibAddLesson;