module.exports = function() {
  var currentUser = {};
  if (!!window.currentUser) {
    currentUser = window.currentUser;
  }
  return {
    currentUser: currentUser,
    deleteCurrentUser: function(){
      this.currentUser = null;
      window.currentUser = null;
    },
    isAuthenticated: function () {
      return !!this.currentUser;
    }
  };
};