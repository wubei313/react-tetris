const server = require('express')();
const http = require('http').Server(server);
const io = require('socket.io')(http);


server.get('/', function(req, res){
    res.sendFile(__dirname + '/test.html');
});

let clientCount = 0
io.on('connection', function(socket){
    clientCount++
    socket.nickname = 'user' + clientCount
    console.log(socket.nickname + ' connection success');
    //io.emit代表广播，而socket.emit则是发送给socket对象，其实还有个专门的broadcast，发送给除自己外的所有
    io.emit('message', socket.nickname + ' coming')
    // setInterval(() => {io.emit('message', '定时播报')}, 5000)
    socket.on('change', function(data){
        console.log('change: ' + data)
        if(data.type) {
            console.log('change: ' + data.type)
        }
        socket.emit('change', data)
    })
    socket.on('disconnect', function(){
        console.log(socket.nickname + ' disconnected')
    })

});

const port  = 8000
http.listen(port, function(){
    console.log('listening on *:' + port);
});