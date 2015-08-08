var Reflux = require('reflux');

module.exports = Reflux.createActions({
  'login': {children: ['completed', 'failed']},
  'logout': {}
});
