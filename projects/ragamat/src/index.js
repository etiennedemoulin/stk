const express = require("express");
const http = require("node:http");
const path = require('node:path');

const app = express();
const port = process.env.PORT || 3000;

// app.get('/', function(req, res) {
  // res.sendFile(path.join(__dirname, '/index.html'));
// });

app.use(express.static('public'));

const server = http.createServer(app);
const io = require("socket.io")(server);

// const io = io.listen(server, {log: false});
io.sockets.on("connection", function(socket){
    socket.on("drone", function(value){
        console.log(`ControlChange    0.0 1 1 ${value}`);
    });
    socket.on("sitar", function(value){
        console.log(`ControlChange    0.0 1 2 ${value}`);
    });
    socket.on("voice", function(value){
        console.log(`ControlChange    0.0 1 4 ${value}`);
    });
    socket.on("tabla", function(value){
        console.log(`ControlChange    0.0 1 11 ${value}`);
    });
    socket.on("flute", function(value){
        console.log(`ControlChange    0.0 1 5 ${value}`);
    });
    socket.on("speed", function(value){
        console.log(`ControlChange    0.0 1 7 ${value}`);
    });
    socket.on("dronefreq1", function(value){
        console.log(`ControlChange    0.0 1 61 ${value}`);
    });
    socket.on("dronefreq2", function(value){
        console.log(`ControlChange    0.0 1 62 ${value}`);
    });
    socket.on("dronefreq3", function(value){
        console.log(`ControlChange    0.0 1 63 ${value}`);
    });
});

server.listen(port);
console.log('Server started at http://localhost:' + port);
