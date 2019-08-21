var get = require('http').get;
var timeout = require('timed-out');
 
var req = get('http://www.google.ru');
timeout(req, 2000); // Set 2 seconds limit