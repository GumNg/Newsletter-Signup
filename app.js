// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");


const app = express();

// path for static files insisde public folder
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + ("/signup.html"));
});

app.listen(3000, function() {
    console.log("Server is up and running on port 3000");
});