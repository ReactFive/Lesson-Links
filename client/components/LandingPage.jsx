var React = require('react');
var Link = require('react-router').Link;
var Nav = require('./header-footer/nav.jsx');

// require('../../sass/LandingPage.scss');

var Home = module.exports = React.createClass({

  render: function () {
    return (
        <div className="Site-content">
          <div className='container'>
            <h1 className="logo">Lesson Links</h1>
            <h3 className='sublogo'>
              <Link to="/add-lesson">Add Lesson</Link>
              <Link to="/library">Library</Link>
              <Link to="/Test101">Test101</Link>
            </h3>
          </div>
        </div>
    )
  }
});