var express = require('express');
var pg = require('pg');

var router = express.Router();
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/thirtyrock';

var randomQuoteSelector = require('../modules/randomQuoteSelector');


router.get('/', function(request, response) {
  console.log('quote retrieval hit');

  var characterRequested = request.query.name;

  var quotesToSelectFrom = [];
  var quoteToSend = "";

  pg.connect(connectionString, function(error, client) {

    var quotesReturned = client.query("SELECT * FROM test");

    quotesReturned.on('row', function(row) {
      quotesToSelectFrom.push(row);

    });

    quotesReturned.on('end', function() {
      quoteToSend = randomQuoteSelector(quotesToSelectFrom);
      client.end();
      return response.json(quoteToSend);
    })

  })

});

module.exports = router;
