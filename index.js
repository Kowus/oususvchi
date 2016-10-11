var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var nodemailer = require('nodemailer');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var API_Key = '1bf1a4c3a29abbb2f3d9c8c0ce6b872f5e65dabd1f2541c6ab9c8f995a1d';

var quickemailverification = require('quickemailverification').client(API_Key).quickemailverification();


var app = express();


app.use(bodyParser.json());         // To support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // To support URL-encoded bodies
    extended: true
}));

var resultHolder = "";


app.use('/', express.static(__dirname + '/'));


    





app.post('/myapi', function(req, res){

    resultHolder = req.body.my_email;
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'ousumaily@gmail.com',
            pass: 'JoshAkyi16'
        }
    });
    var mailOptions = {
        from: req.body.name + "" + "<"+req.body.my_email+">", // sender address
        to: 'oususvchi@gmail.com', // list of receivers
        subject: 'New email from ' + req.body.name + "" + "<"+req.body.my_email+">", // Subject line
        text: '\n' + req.body.message + '\n\nReply to: ' + req.body.my_email, // plaintext body
        //html: '<b>Hello world ?</b>' // html body
    };

    quickemailverification.verify(req.body.my_email, function (err, response) {
        // Print response object
        console.log(response.body.result);
        
        
    
   if(response.body.result == 'valid'){
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
                //res.json({yo: 'error'});
            }else{
                console.log('Message sent: ' + info.response);
                console.log(response.body);
               
                
                //res.json({yo: info.response});

            };
        });
   }else if(response.body.result == 'invalid' || response.body.reason == 'invalid_domain'){
        console.log('invalid email address: ' + req.body.my_email);
        console.log(response.body.reason);
        app.get('/myapi', function(req, res){
            res.send('invalid email address: ' + resultHolder),
            location.reload(false);
        });

        
            
        
        
    }

    });
});




var port = 3423;
app.listen(port, function(){
    console.log("listening on localhost:"+port+'\n');
   
    
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




