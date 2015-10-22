var express = require('express');
var app = express();
var config = require('./config');
var swig = require('swig');

app.set('env', config.get("NODE_ENV"));
app.use(require('morgan')('dev', {
    skip: function(){
        return app.get('env') != 'development';
    }
}));
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/templates');
app.use(express.static('public'));

app.get('/', function(req, res, next){
    res.render('index');
});

var server = app.listen(config.get('port'), config.get('host'), function(){
    console.log("Server starts at http://" + config.get('host') + ":"
        + config.get('port') + " in " + app.get('env') + " mode.");
});