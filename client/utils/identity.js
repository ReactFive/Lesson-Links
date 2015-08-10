module.exports = function() {
  var currentUser = {};
  if (!!window.currentUser) {
    currentUser = window.currentUser;
    console.log(currentUser);
  }
  return {
    currentUser: currentUser,
    isAuthenticated: function () {
      return !!this.currentUser;
    }
  }
}