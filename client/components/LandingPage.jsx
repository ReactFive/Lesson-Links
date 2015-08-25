var React = require('react');
var Link = require('react-router').Link;
var Nav = require('./header-footer/nav.jsx');

// require('../../sass/LandingPage.scss');

var Home = module.exports = React.createClass({

  render: function () {
    return (
<div id="myCarousel" className="carousel slide">
  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="item active">
      <div className="container">
        <div className="carousel-caption">
          <h1 className="logo">Lesson Links</h1>
          <h3 className="sublogo">Annotated  Educational  Videos.</h3>
          <p>To be colored, styled, and replaced with a gif soon! </p>
          <p>
            <p>
            </p>
          </p>
        </div>
      </div>
    </div>
    <div className="item item2">
      <div className="container">
        <div className="carousel-caption">
          <h1>How it all Works</h1>
          <p>Information and graphics coming soon...</p>
        </div>
      </div>
    </div>
    <div className="item item3">
      <div className="container">
        <div className="carousel-caption">
          <div className="row">
            <div className="teamInfo col-md-6 portfolio-item">
              <h1>Our Team</h1>
              <img id="react5" className="" src="../../public/assets/TeamImage2.png"/>
            </div>
          <div className="carousel-caption">
              <div className="teamInfo col-md-6 portfolio-item">
                <h1>Our Stack</h1>
                <img id="ourStack" className="" src="../../public/assets/ourstack.png"/>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
    <span className="icon-prev"></span>
  </a>
  <a className="right carousel-control" href="#myCarousel" data-slide="next">
    <span className="icon-next"></span>
  </a>  
</div>
    )
  }
});