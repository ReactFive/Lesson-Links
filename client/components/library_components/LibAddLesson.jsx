var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var LibAddLesson = React.createClass({

  render:function(){
    return (
      <span className="lib-add-lesson">
        <Link to="/add-lesson" className="addMe">+
        </Link>
      </span>
    )
  }
});

module.exports = LibAddLesson;

