var React = require("react");
var Router = require('react-router');
var Link = Router.Link;

var NotFound = React.createClass({
  render: function() {
    return (
        <div className="fourOhFour container error-container" id="404err">
          <div className="row">
            <div className="col-md-12">
              <div className="error-template yellow">
                <span>
                  <h1 className="oops ohno" >Oops!</h1>
                </span>

                <span >
                  <h2 className="notFound">404 Not Found</h2>

                  <p className="oops ohnopara">
                    The page you requested could not be found!
                  </p>
              

                  <Link to="/404explanation" className="oops ohnopara ohnoparalink">What does '404 Not Found' mean? Click here to find out!</Link>

                </span>
                <div className="error-actions pull-right">
                  <Link to="/" className="oopsybtn btn btn-primary btn-lg">Take Me Home</Link>
                  <a href="https://github.com/ReactFive/Lesson-Links/issues" target="_blank" className="oopsybtn btn btn-default btn-lg">
                    Submit an Issue 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
  });

module.exports = NotFound;