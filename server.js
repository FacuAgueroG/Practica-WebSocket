const express  = require("express");
const path = require("path");
const SocketIO = require("socket.io");
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '/public')));

const server = app.listen(app.get('port'), (err) => console.log(err?  `Error: ${err}` : `http://localhost${app.get('port')}`))

const io = SocketIO(server); 

io.on("connection", (socket) =>{
    console.log("websocket connection", (socket.id));
    socket.on("chat:message", (data) => {
        io.sockets.emit("chat:message", data)
    })

    // socket.on("chat:typing", (user)=>{
    //     socket.broadcast.emit("chat:typing", user)
    // })
})