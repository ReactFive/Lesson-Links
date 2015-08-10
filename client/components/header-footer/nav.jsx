var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Reflux = require('reflux');
var AuthStore = require('../../stores/auth-store');
var Actions = require('../../actions');


module.exports = React.createClass({
  mixins: [Reflux.listenTo(AuthStore, "onChange")],

  getInitialState: function(){
    return {
      loggedIn: false,
      error: false,
      user: {}
    }
  },

  componentWillMount: function(){
   Actions.authenticate();
  },

  render: function() {
    return ( <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand">
            LEARNING LINKS
          </Link>
        </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              {this.state.loggedIn && <Link activeClassName="active" to="/lesson">Lessons</Link>}
            </li>
            <li className="pull-right">
              {!this.state.loggedIn && <Link activeClassName="active" to="/">Signup</Link>}
            </li>
          </ul>
            { this.state.loggedIn ? this.renderLogout() : this.renderLogin() }
        </div>
    </nav> )
  },
  renderLogin: function(){
    return <form onSubmit={this.handleSubmit} className="navbar-form navbar-right" role="search">
      <div className="form-group">
        <input ref="email" type="text" className="form-control" placeholder="Email"/>
      </div>
      <div className="form-group">
        <input ref="password" type="password" className="form-control" placeholder="Password"/>
      </div>
      <button type="submit" className="btn btn-default">Login</button>
      {/* add error message */}
    </form>
  },

  renderLogout: function(){
    return <form className="navbar-form navbar-right">
      <button className="btn btn-default" onClick={this.handleLogout}>Logout</button>
    </form>
  },

  handleLogout() {
    event.preventDefault();
    Actions.logout();
  },

  handleSubmit: function(event){
    event.preventDefault();

    var email = this.refs.email.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;

    Actions.login(email, password);

    this.refs.email.getDOMNode().value = "";
    this.refs.password.getDOMNode().value = "";

  },

  onChange: function(event, auth){
    console.log(auth);
    this.setState({loggedIn: auth})
  }
});