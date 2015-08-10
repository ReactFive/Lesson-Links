module.exports = function() {
  var currentUser;
  if (!!window.currentUser) {
    currentUser = window.currentUser
  }
  return {
    currentUser: currentUser,
    isAuthenticated: function () {
      return !!this.currentUser;
    }
  }
}