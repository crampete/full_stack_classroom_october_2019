const express = require("express");
const app = express();

app.use(express.json());

var data = {};

app.get("/book", (req, res) => {
  console.log("GET /book");
  // res.send("Book details read successfully");
  res.send(data);
});

// app.get("/book/1")

// app.get("/book/2")

app.get("/book/:id", (req, res) => {
  const bookId = req.params.id;
  res.send(data[bookId]);
});

app.post("/book", function(req, res) {
  console.log("POST /book");
  console.log(req.body);
  data[req.body.id] = req.body;
  res.send("Book successfully created");
});

app.put("/book/:id", (req, res) => {
  console.log("PUT /book");
  res.send("Book successfully updated");
});

app.delete("/book/:id", function(req, res) {
  console.log("DELETE /book");
  res.send("Book successfully deleted.");
});

app.listen(3000, function() {
  console.log("server started");
});
