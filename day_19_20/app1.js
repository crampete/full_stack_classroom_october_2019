const express = require("express");

const app = express();

const myName = "foo";

app.get("/abc", function(req, res) {
  res.status(500);
  res.send("<a href='http://www.google.com'>Google</a>");
});

app.listen(3000, function() {
  console.log("server started");
});
