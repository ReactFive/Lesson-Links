var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var LibAddLesson = React.createClass({

  render:function(){
    return (
      <Link to="/add-lesson" className="lib-add-lesson">
        <p className="add-me">+</p>
      </Link>
    )
  }
});

module.exports = LibAddLesson;

