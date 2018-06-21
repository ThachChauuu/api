var mongoose = require('mongoose');
var express = require('express');
var app = express();
var port = process.env.PORT || 3003;
var bodyParser = require('body-parser');
var cors = require('cors');

var url = 'mongodb://cfsdatabase:a123456@ds159840.mlab.com:59840/coffee-sys-dbs';

mongoose.Promise = global.Promise;
mongoose.connect(url, function(err){
    if(err)
        console.log(err);
    console.log('CONNECTED DATABASE');
});

mongoose.disconnect();

app.listen(port, function(){
    console.log("ACCESS http://localhost:" + port);
});