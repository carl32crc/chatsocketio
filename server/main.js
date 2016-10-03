var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

app.get('/',function(req, res){
   res.status(200).send("Hello world");
});

io.on('connection', function(socket){
   console.log('conectandome con sockets');
   socket.emit('messages', {
      id:1,
      text:"Welcome",
      author:"Carl"
   });
});

server.listen(3000, function(){
   console.log("servidor corriendo en http://localhost:3000");
});
