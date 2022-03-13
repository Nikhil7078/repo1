// this is our NodeServer which will handle socket.io connection 
const PORT = process.env.PORT || 8000
const io = require('socket.io')( PORT,{
    cors: {
        origin:"*",
    }
});
const user = {};

io.on('connection',socket =>{
    socket.on('new-user-joined',name =>{
        // console.log(name);
        user[socket.id] = name;
        socket.broadcast.emit('user-joined',name);
    });
    socket.on('send',message=>{
        socket.broadcast.emit('Receive',{message:message,name:user[socket.id]})
    })
});
//io.on('connection',)

