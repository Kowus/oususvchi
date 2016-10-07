var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var Mailgun = require('mailgun').Mailgun;

var app = express();
// Setting up mailgun
var api_key = '4876fd60bea6da809a90de5b4b70d0f7';
var domain = 'https://api.mailgun.net/v3/sandbox1218837047e94fc4859105c50046700e.mailgun.org/messages';
var sender = 'Mailgun Sandbox <postmaster@sandbox1218837047e94fc4859105c50046700e.mailgun.org>';


var mg = new Mailgun({apiKey: api_key, domain: domain});

app.use(bodyParser.json());         // To support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // To support URL-encoded bodies
    extended: true
}));


app.use('/', express.static(__dirname + '/'));

app.post('/myapi', function(req, res){
    
    mg.sendText(sender, ['Barnabas Nomo <barnabasnomo@gmail.com>'], 
        'New Enquiry From ' + req.body.name,
        '\n\n' + req.body.message,
        'Reply-to ' + req.body.my_email, {},
        function(err) {
            if(err) console.log('Oh blimey!: ' + err);
            else console.log('Success');
        }
    );


    /*
    console.log("\nName is " +req.body.name);
    console.log("Email is " + req.body.my_email);
    console.log("Message is " + req.body.message);
    */
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




