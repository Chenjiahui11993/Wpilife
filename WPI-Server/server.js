const express = require('express');
const restRouter = require('./routes/rest');
const mongoose = require('mongoose');
var app = express();
//connect monogoDB
mongoose.connect('mongodb://wpilife:2018wpilife-team@ds149874.mlab.com:49874/wpillife');
//mongoose.connect('mongodb://chenjiahui11993:123456@ds127936.mlab.com:27936/cs503-1705test');
app.use('/api/v1', restRouter);
app.listen(3000, () => {
    console.log('server is now on port 3000');
});
console.log('hello-world')