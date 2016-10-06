var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();

app.use(bodyParser.json());         // To support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // To support URL-encoded bodies
    extended: true
}));


app.use('/', express.static(__dirname + '/'));

app.post('/myapi', function(req, res){
    console.log("Name is " +req.body.name);
    console.log("Email is " + req.body.email);
    console.log("Message is " + req.body.message);
});


app.listen(3423, function(){
    console.log("my Api being called");
});


/*
app.get('/myapi', function(req, res){
    setTimeout(function(){
        res.send("hello world")
    }, 10000);
});


app.listen(3423, function(){
    console.log("all clear");
});
*/




