var socket = io.connect('http://localhost:3000', {'forceNew': true});

socket.on('messages', function(data){
   console.log(data);
   render(data);
});

function render(data){
   var html = `<div>
                  <strong>${data.author}</strong>:
                  <em>${data.text}</em>
               </div>`;
   document.getElementById('messages').innerHTML = html;
}

function  addMessage(e){
   var payLoad = {
      author: document.getElementById(username).value,
      text:document.getElementById(text).value
      };
   socket.emit('new-message', payLoad);
   return false;
}
