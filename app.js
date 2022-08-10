// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");


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
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;

    let data = {
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
});

app.listen(3000, function() {
    console.log("Server is up and running on port 3000");
});

// mailchimp api key
// 3629ae6c1468408199e229846c96228f-us12

// list id 
// c2d3a63ec5