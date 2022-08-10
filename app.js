// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { url } = require("inspector");


const app = express();

// path for static files insisde public folder
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

// get route to homepage
app.get("/", function(req, res) {
    res.sendFile(__dirname + ("/signup.html"));
});

// post route to homepage
app.post("/", function(req, res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]

    };

    const jsonData = JSON.stringify(data);

    https.request(url, options, function(response) {

    });
});

app.listen(3000, function() {
    console.log("Server is up and running on port 3000");
});

// mailchimp api key
// 3629ae6c1468408199e229846c96228f-us12

// list id 
// c2d3a63ec5