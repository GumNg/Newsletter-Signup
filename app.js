// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { url } = require("inspector");

const app = express();

// path for static files insisde public folder
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

// get route to homepage
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

// post route to homepage
app.post("/", function (req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  // object required for api
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  // parses object data into string in JSON format
  const jsonData = JSON.stringify(data);

  //   url for api
  const url = "https://us12.api.mailchimp.com/3.0/lists/c2d3a63ec5";

  const options = {
    method: "POST",
    auth: "gum1:",
  };
  const request = https.request(url, options, function (response) {
    // response to send user to page based on status code
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

// post route failure to redirect to homepage
app.post("/failure", function (req, res) {
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server is up and running on port 3000");
});
