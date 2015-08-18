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
      <img src="../public/assets/Landing.png" className="fill" />
      <div className="container">
        <div className="carousel-caption">
          <h1>Bootstrap 3 Carousel Layout</h1>
          <p>
            <p>
            </p>
            <p><a className="btn btn-lg btn-primary" href="http://getbootstrap.com">Learn More</a>
            </p>
            </p>
        </div>
      </div>
    </div>
    <div className="item">
      <img src="http://lorempixel.com/1500/600/abstract/1" />
      <div className="container">
        <div className="carousel-caption">
          <h1>Changes to the Grid</h1>
          <p>Bootstrap 3 still features a 12-column grid, but many of the CSS className names have completely changed.</p>
          <p><a className="btn btn-large btn-primary" href="#">Learn more</a></p>
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