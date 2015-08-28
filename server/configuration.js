var path = require('path');
var rootPath = path.normalize(__dirname +'/../');

module.exports = {
  development: {
    rootPath: rootPath,
    database: 'mongodb://vancamp:test1@ds043971.mongolab.com:43971/testapp',
    port: process.env.PORT || 3000
  },
  production: {
    rootPath: rootPath,
    database: 'mongodb://vancamp:test1@ds043971.mongolab.com:43971/testapp',
    port: process.env.PORT || 80
  },
  'facebookAuth' : {
    'clientID'      : '399450483593443', // your App ID
    'clientSecret'  : 'db3d8e352738f359f83d283b2ee99e52', // your App Secret
    'callbackURL'   : '/api/facebook/callback'
  },

  'twitterAuth' : {
    'consumerKey'       : 'V9ZwRs4zZhTSKyps9cfHayVur',
    'consumerSecret'    : '9XaFdHCfdxIBl4fDFMFSKVjOdYqKytjhpnXw8dsVLXzZdvipC6',
    'callbackURL'       : '/api/twitter/callback'
  },

  'googleAuth' : {
    'clientID'      : '708183920553-ai84a1rsgfhq3a8srcl0o82dpnbeao1m.apps.googleusercontent.com',
    'clientSecret'  : '7rmDtlJTTsuvaUEqn0c9VAy5',
    'callbackURL'   : '/api/google/callback'
  }
};


