var fs    = require('fs');
var nconf = require('nconf');

nconf.argv()
    .env()
    .file({ file: __dirname + '/package.json' });



module.exports = nconf;