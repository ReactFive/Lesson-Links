
exports.requiresApiLogin = function (request, response, next) {
  if(!request.isAuthenticated()) {
    console.log(!!request.isAuthenticated());
    response.status(403);
    response.end();
  } else {
    next();
  }
};
