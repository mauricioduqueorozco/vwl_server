ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

var socket = io.connect();

setTimeout(function(){
  socket.on('message', function(){
    console.log("Entra");
  })
  console.log("intervea");
},300)

socket.on('messageack', function (message) {
  console.log("some");
})
