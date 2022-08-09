const express = require("express");
const bodyParser = require("body-parser");
const request = require("reqest");

const app = express();

app.listen(3000, function() {
    console.log("Server is up and running on port 3000");
})