module.exports = function() {
  var currentUser;
  if (!!window.currentUser) {
    currentUser = window.currentUser;
  }
  return {
    currentUser: currentUser,
     deleteCurrentUser: function(){
      delete window.currentUser;
      return this.currentUser = null;
    },
    isAuthenticated: function () {
      return !!this.currentUser;
    }
  };
};