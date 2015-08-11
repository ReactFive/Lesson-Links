var express = require('express');
var env = process.env.NODE_ENV || 'development';
var app = express();

var config = require('./config')[env];

require('../client/routes.js');
require('./mongoose')(config);
require('./express')(app, config);
require('./passport')(passport);
require('./routes')(app);

app.listen(config.port);
console.log('listening on port '+ config.port + '...');