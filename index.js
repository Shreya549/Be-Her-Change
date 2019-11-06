var express = require('express');
var app = express()
var bodyParser = require('body-parser');
var ejs = require('ejs');

const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/BeHerChange'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("connection succeeded"); 
}) 
  
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./public'));
app.set('view engine', 'ejs');

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
        var dbo = db.db("BeHerChange");
        var i = 0;
        dbo.collection("Confessions").find({}).toArray(function(err, result) {
            if (err) throw err;
            for (i in result)
            console.log(result[i]['story']);
            var count = result.length
            res.render('viewStories', {result: result, count: count})
            console.log("HIII");
            db.close();
        });
    });

    //res.render('viewStories');
    //res.sendFile(__dirname + "/public/8_1)ViewStories.html");
})

app.get('/volunteer', function(req, res){
    res.sendFile(__dirname + '/public/2_1)Signpage(volunteer).html');
})

app.get('/signin', function(req, res){
    res.sendFile(__dirname + '/public/3_1)signin.html');
})

app.post('/sign_in', function(req, res){
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    var user = req.body.username;
    var pass = req.body.password;
    
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("BeHerChange");
    var query = { username : user };
    dbo.collection("Credentials").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);

        if (pass == passorig)
        res.sendFile(__dirname + '/public/6_1)Confessions.html');

        else
        res.sendFile(__dirname + '/public/3_1)signin.html');
        db.close();
    });
    });
})

app.get('/signup', function(req, res){
    res.sendFile(__dirname + '/public/4_1)signup.html');
})

app.post('/sign_up', function(req,res){ 
    var name = req.body.fullname; 
    var email =req.body.emailid; 
    var gender = req.body.gender;
    var pass = req.body.password; 
    var phone =req.body.phonenumber; 
    var dob = req.body.dob;
    var username = req.body.username;
  
    var data = { 
        "name": name, 
        "email":email, 
        "gender" : gender,
        "password":pass, 
        "phone":phone,
        "dob" : dob,
        "username" : username
    } 

     db.collection('Credentials').insertOne(data,function(err, collection){ 
            if (err) {
                throw err; 
                res.sendFile(__dirname+"/public/4_1)Signup.html");
            }
            
            console.log("Record inserted Successfully"); 
            res.sendFile(__dirname + '/public/3_1)signin.html');
                
         }); 
          
}) 


  


app.listen (8000, function(){
    console.log("Server running on port : 8000");
})
