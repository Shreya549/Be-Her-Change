var express = require('express');
var app = express()

app.use(express.static('./public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/1_1)Homepage.html');
});

app.get('/victim_options', function(req, res){
    res.sendFile(__dirname +'/public/5_1)victimoptions.html')
})
app.get('/home', function(req, res){
    res.sendFile(__dirname + '/public/1_1)Homepage.html');
});

app.get('/confess', function(req, res){
    res.sendFile(__dirname + '/public/6_1)Confessions.html');
})

app.get('/helpline', function(req, res){
    res.sendFile(__dirname + '/public/9_1)Helpline.html');
})

app.get('/employment', function(req, res){
    res.sendFile(__dirname + '/public/7_1)Employement.html');
})

app.get('/view_stories', function(req, res){
    res.sendFile(__dirname + '/public/8_1)ViewStories.html');
})

app.listen (8000, function(){
    console.log("Server running on port : 8000");
})