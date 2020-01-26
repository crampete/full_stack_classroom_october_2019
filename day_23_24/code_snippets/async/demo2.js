const fs = require("fs");

// fs.writeFile("index.html", "sdafsadfs", function(err) {
fs.writeFile("index?.html", "sdafsadfs", function(err) {
  if (err) {
    console.log("failed");
  } else {
    console.log("Success");
  }
});

console.log("final line");
