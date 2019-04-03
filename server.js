const express = require('express')
const server = express()
const http = require('http').Server(server);
const io = require('socket.io')(http);
const path = require('path')

server.use(express.static(path.join(__dirname, 'build')))
server.get('/', function(req, res){
    res.sendFile(__dirname + '/build/index.html');
});

let socketMap = {}
let clientCount = 0
io.on('connection', function(socket){
    clientCount++
    socket.clientNum = clientCount
    socket.nickname = 'user' + clientCount
    socketMap[clientCount] = socket
    console.log(socket.nickname + ' connection success');
    if(clientCount % 2 == 1) {
        socket.emit('waiting', 'waiting for another person')
    } else {
        socket.emit('start')
        socketMap[(clientCount - 1)].emit('start')
    }

    //io.emit代表广播，而socket.emit则是发送给socket对象，其实还有个专门的broadcast，发送给除自己外的所有
    io.emit('message', socket.nickname + ' coming')
    socket.on('change', function(data){
        if(socket.clientNum % 2 == 0) {
            if(socketMap[socket.clientNum - 1]) {
                socketMap[socket.clientNum - 1].emit('change', data)
            }
        }
        if(socket.clientNum % 2 == 1) {
            if(socketMap[socket.clientNum + 1]) {
                socketMap[socket.clientNum + 1].emit('change', data)
            }
        }
    })
    socket.on('disconnect', function(){
        console.log(socket.nickname + ' disconnected')
    })

});

const port  = 8000
http.listen(port, function(){
    console.log('listening on *:' + port);
});