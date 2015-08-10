(function(global){
  var currentUser = {};
  if (global && !!global.currentUser) {
    currentUser = global.currentUser;
    console.log(currentUser);
  }
  return {
    currentUser: currentUser,
    isAuthenticated: function () {
      return !!this.currentUser;
    }
  }
})(window);