var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/',function(req, res){
   res.status(200).send("Hello world");
});

server.listen(3000, function(){
   console.log("servidor corriendo en http://localhost:3000");
});
