const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 8080

const server = http.createServer((req, res) =>{
  res.end("Hi server")
})

server.listen((port) , _=>{
  console.log('Server running in port ' + port);
})
