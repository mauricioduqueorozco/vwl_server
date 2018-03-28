const http = require('http')
const router = require('./router')
const socketio = require('socket.io')

const server = http.createServer()
const port = process.env.PORT || 8080

server.on('request', router)
server.on('listening', onListening)

server.listen(port)

const io = socketio(server)
io.on('connection', onConnection)

function onConnection(socket) {
  console.log(`Client connected ${socket.id}`);

  socket.on('message', function(message){
    console.log(`Message from client ${message}`);

    socket.broadcast.emit('message', 'Something to send')

    socket.emit('messageack', 'Something 2 send')
  })
}

function onListening () {
  console.log(`Server running in port ${port}`)
}
