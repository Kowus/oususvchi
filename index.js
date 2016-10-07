var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var nodemailer = require('nodemailer');
// var verifier = require('email-verify');


var app = express();


app.use(bodyParser.json());         // To support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // To support URL-encoded bodies
    extended: true
}));


app.use('/', express.static(__dirname + '/'));








app.post('/myapi', function(req, res){

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'ousumaily@gmail.com',
            pass: 'JoshAkyi16'
        }
    });
    var mailOptions = {
        from: req.body.name + "" + "<"+req.body.my_email+">", // sender address
        reply: req.body.my_email,
        to: 'oususvchi@gmail.com', // list of receivers
        subject: 'New email from ' + req.body.name + "" + "<"+req.body.my_email+">", // Subject line
        text: '\n' + req.body.message, // plaintext body
        //html: '<b>Hello world ?</b>' // html body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            console.log("\nName is " +req.body.name);
            console.log("Email is " + req.body.my_email);
            console.log("Message is " + req.body.message);
            res.json({yo: info.response});

        };
});


    
});


app.listen(3423, function(){
    console.log("my Api being called\n");
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




