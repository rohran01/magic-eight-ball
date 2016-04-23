var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/', function(request, response) {
  console.log('index.html is working');
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

module.exports = router;
