var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

var engine = require('ejs-locals');
app.engine('ejs', engine);
app.set('views', path.join( __dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/views/stylesheets')));
app.use(express.static(path.join(__dirname, '/views/images')));
app.use(express.static(path.join(__dirname, '/views/js')));
app.use(express.static(path.join(__dirname, '/views/fonts')));

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/', function (req, res) {
  res.render('index', { t: 'TACe Tickets' });
});

