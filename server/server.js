//REQUIRES NODE MODULES

var express = require('express');
var bodyParser = require('body-parser');

//CREATES VARIABLE FOR ROUTES

var index = require('./routes/index.js');
var quoteRetrieval = require('./routes/quoteRetrieval.js');

var app = express();

app.use(bodyParser.json());

app.use(express.static('server/public'));


//SETS APP.USE ROUTES

app.use('/quote', quoteRetrieval);
app.use('/', index);

var server = app.listen(4000, function() {
  var port = server.address().port;
  console.log('listening on port:', port);
});
