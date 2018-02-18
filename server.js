var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');

server.listen(process.env.PORT || 8080);

app.use(express.static(path.join(__dirname, 'build')));

console.log('Server running on 8080');