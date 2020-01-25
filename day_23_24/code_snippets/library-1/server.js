// https://stackoverflow.com/a/36374920 easiest way I could find native mongo with express
// this has async issues in some cases.

var express = require("express");
var app = express();

app.use(express.json());

var MongoClient = require("mongodb").MongoClient;
var db;

MongoClient.connect("<uri here>", function(err, client) {
  if (err) {
    console.log("Failed to connect.");
  }
  db = client.db("library");
});

app.post("/book", (req, res) => {
  var data = req.body;
  console.log(data);

  // need to code for basic error checks
  if (data["title"] === undefined || data["author"] === undefined) {
    res.status(400);
    return res.send("Missing details");
  }

  db.collection("book").insert(data);

  res.send("success");
});

app.listen(3000, () => {
  console.log("server started");
});
