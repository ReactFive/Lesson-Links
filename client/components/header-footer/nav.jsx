var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Reflux = require('reflux');
var AuthStore = require('../../stores/auth-store');
var Actions = require('../../actions');


module.exports = React.createClass({
  mixins: [Reflux.connect(AuthStore),
    Reflux.ListenerMixin,
    Router.Navigation ],

  componentWillMount: function(){
    this,setState(AuthStore.user())
  },

  componentDidMount: function() {
    this.listenTo(AuthStore, this.onAuthChange);
  },

  onAuthChange(auth) {
    this.setState(auth);
  },

  handleLogout() {
    event.preventDefault();
    AuthActions.logout();
    this.transitionTo('/');
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
              {this.state.user && <Link activeClassName="active" to="/lesson">Lessons</Link>}
            </li>
            <li className="pull-right">
              {!this.state.user && <Link activeClassName="active" to="/">Signup</Link>}
            </li>
          </ul>
          { this.state.user ? this.renderLogout() : this.renderLogin() }
        </div>
    </nav> )
  },
  renderLogin: function(){
    return <form onSubmit={this.handleSubmit} className="navbar-form navbar-right" role="search">
      <div className="form-group">
        <input ref="email" type="text" className="form-control" placeholder="Email"/>
      </div>
      <div className="form-group">
        <input ref="password" type="text" className="form-control" placeholder="Password"/>
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
  handleBtnSubmit: function(event){

    console.log("in logout handler")
    AuthActions.logout();
  },
  handleSubmit: function(event){
    event.preventDefault();

    var email = this.refs.email.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;
    console.log(password);

    AuthActions.login(email, password);


    this.refs.email.getDOMNode().value = "";
    this.refs.password.getDOMNode().value = "";
  }
})