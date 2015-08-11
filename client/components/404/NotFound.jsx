var React = require("react");
var Router = require('react-router');
var LINK = Router.Link;

var NotFound = React.createClass({
  render: function() {
    return (
        <div className="container error-container">
          <div className="row">
            <div classname="col-md-12">
              <div className="error-template">
                <h1>Oops!</h1>

                <h2>404 Not Found</h2>

                <div className="error-details">
                  Sorry, requested page not found!
                </div>
                <div className="error-actions">
                  <LINK to="/" className="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                    Take Me Home </LINK>
                  <LINK to="/" className="btn btn-default btn-lg"><span
                    class="glyphicon glyphicon-envelope"></span> Contact Support </LINK>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
  });

module.exports = NotFound;