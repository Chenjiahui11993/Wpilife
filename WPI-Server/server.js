const express = require('express');
const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const io = socketIO();
const editorSocketService = require('./service/editorSocketService')(io);
var app = express();
//connect monogoDB
mongoose.connect('mongodb://wpilife:2018wpilife-team@ds149874.mlab.com:49874/wpillife');
//mongoose.connect('mongodb://chenjiahui11993:123456@ds127936.mlab.com:27936/cs503-1705test');
app.use('/', indexRouter);
app.use('/api/v1', restRouter);
app.use(express.static(path.join(__dirname, '../public/')));
app.use((req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../public/')});
});
//app.listen(3000, () => {
  //  console.log('server is now on port 3000');
//});
const server = http.createServer(app);
io.attach(server);
server.listen(3000);
server.on('listening', onListening);
function onListening() {
console.log('listening 3000');
}
console.log('hello-world')