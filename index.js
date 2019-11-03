var express = require('express');
var app = express()

app.use(express.static('./public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/1_1)Homepage.html');
});

app.get('/home', function(req, res){
    res.sendFile(__dirname + '/public/1_1)Homepage.html');
});

app.get('/confess', function(req, res){
    res.sendFile(__dirname + './public/6_1)Confessions.html');
})

app.get('/')

app.listen (8000, function(){
    console.log("Server running on port : 8000");
})