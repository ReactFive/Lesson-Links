var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Reflux = require('reflux');
var AuthStore = require('../../stores/AuthStore');
var Actions = require('../../actions');
var Navigation = Router.Navigation;


var nav = React.createClass({
  mixins: [Reflux.connect(AuthStore,"auth"), Navigation],

  getInitialState: function(){
  },

  componentWillMount: function(){
   Actions.authenticate();
  },

  render: function() {

    return ( <nav className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand">
            <img id="logo-gif" src="../../public/assets/landingGif.gif"/>
          </Link>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li className="hoverNavSpecial">
              {(this.state.auth && this.state.auth.loggedIn) && <Link activeClassName="active" className="navCreate" to="/add-lesson">Create Lesson</Link>}
            </li>
            <li className="hoverNavSpecial">
              {(this.state.auth && this.state.auth.loggedIn) && <Link activeClassName="active" to="/library">Library</Link>}
            </li>
            <li className="hoverNavSpecial">
              {(this.state.auth && this.state.auth.loggedIn) && <a onClick={this.handleLogout}>Logout</a> }
            </li>
            { (this.state.auth && !this.state.auth.loggedIn) &&
            <li className="dropdown hoverNavSpecial2" id="menuLogin">
              <a className="dropdown-toggle" style={{zIndex: 20}} href="#" data-toggle="dropdown" id="navLogin">Login</a>
              <div className="dropdown-menu">
                <ul style={{padding:0, listStyleType: "none"}}>
                  <li>
                    <form name="login" className="form" id="formLogin" onSubmit={this.handleSubmit}>
                      <div className="form-group form-group-md">
                        <input ref="email" type="text" className="form-control" placeholder="Email"/>
                      </div>
                      <br/>
                      <div className="form-group form-group-md">
                        <input ref="password" type="password" className="form-control" placeholder="Password"/>
                      </div>
                      <br/>
                      <button type="submit" id="btnLogin" className="btn btn-default" style={{width: "100%"}}>Login</button>
                      <Link to="/register" className="signup-link" data-toggle="dropdown">Create new account</Link>
                    </form>
                  </li>
                  <p style={{marginLeft: "100px !important"}}>OR</p>
                  <hr/>
                  <li style={{opacity:0.7, marginTop:10}}>
                    <a className="btn btn-block btn-social btn-google" href="/api/google">
                      <i className="fa fa-google"></i>Sign in with Google
                    </a>
                    <a className="btn btn-block btn-social btn-facebook" href="/api/facebook">
                      <i className="fa fa-facebook"></i>Sign in with Facebook
                    </a>
                    <a className="btn btn-block btn-social btn-twitter" href="/api/twitter">
                      <i className="fa fa-twitter"></i>Sign in with Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            }
          </ul>
        </div>
      </div>
    </nav> )
  },

  handleLogout: function(event) {
    event.preventDefault();
    Actions.logout();
    this.transitionTo('/');
  },

  handleSubmit: function(event){
    event.preventDefault();

    var email = this.refs.email.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;
    var url = this.context.router.getCurrentParams().url;

    var self=this;
    Actions.login({sourceComponent: this, email: email, password: password, url: url})
    .then(function(res){
      self.refs.email.getDOMNode().value = "";
      self.refs.password.getDOMNode().value = "";
    })
    .catch(function(res){
      console.log("Error", res);
    })


  }
});

module.exports = nav;
