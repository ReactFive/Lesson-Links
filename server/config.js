var path = require('path');
var rootPath = path.normalize(__dirname +'/../');

module.exports = {
  development: {
    rootPath: rootPath,
    database: 'mongodb://test:thesis@ds031203.mongolab.com:31203/opal-test',
    port: process.env.PORT || 3000
  },
  production: {
    rootPath: rootPath,
    database: 'mongodb://test:thesis@ds031203.mongolab.com:31203/opal-test',
    port: process.env.PORT || 80
  }
};
