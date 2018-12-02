const express = require('express');
const app = express();

var server = require('http').createServer(app);
app.use(express.static(__dirname));
const fs = require('fs');
var port    = parseInt(process.env.PORT, 10) || 8000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

server.listen(port);

app.get('/', function(req,res){
 fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });

});
