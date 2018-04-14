const express = require('express');
const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');
const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const io = socketIO();
const editorSocketService = require('./service/editorSocketService')(io);
var app = express();
try {
  var file = fs.readFileSync('password.json');
  let name = JSON.parse(file);
  dname = name.name;
  dpwd = name.password;
} catch (e) {
  console.log(e);
}
//connect monogoDB
mongoose.connect(`mongodb://${dname}:${dpwd}@ds149874.mlab.com:49874/wpillife`);
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', indexRouter);
app.use('/api/v1', restRouter);
app.use((req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public') });
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