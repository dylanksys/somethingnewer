var express = require ('express');

var iphone = require('./iphone');
var data = require('./data');

var app = express();

app.use('/', iphone);
app.use('/API', data);

app.listen(8000, function () {
	console.log('somethingnewer listening on port 8000');
};
