var express = require('express');
var env = process.env.NODE_ENV || 'development';
var app = express();

var config = require('./configuration')[env];

require('./mongoose')(config);
require('./express')(app, config);
require('./routes')(app);

app.listen(config.port);
console.log('listening on port '+ config.port + '...');