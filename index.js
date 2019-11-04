var express = require('express');
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

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

app.post('/confess/submit', function(req,res){
    var confess = req.body.story;
    console.log(confess);
    
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("BeHerChange");
        var myobj = { story : confess , help : "" };
        dbo.collection("Confessions").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });

    res.sendFile(__dirname + '/public/5_1)victimoptions.html');
})

app.get('/helpline', function(req, res){
    res.sendFile(__dirname + '/public/9_1)Helpline.html');
})

app.get('/employment', function(req, res){
    res.sendFile(__dirname + '/public/7_1)Employement.html');
})

app.get('/view_stories', function(req, res){

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("BeHerChange");\
        var i = 0;
        dbo.collection("Confessions").find({}).toArray(function(err, result) {
            if (err) throw err;
            for (i in result)
            console.log(result[i]['story']);
            db.close();
        });
    });

    res.sendFile(__dirname + '/public/8_1)ViewStories.html');
})

app.listen (8000, function(){
    console.log("Server running on port : 8000");
})