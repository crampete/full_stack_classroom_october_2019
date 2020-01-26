const axios = require("axios");
const fs = require("fs");

axios
  .get("https://www.example.com")
  .then(res => {
    fs.writeFile("example.html", res.data, function(err) {
      if (err) {
        console.log("file write failed");
      }
    });
  })
  .catch(err => {
    console.log(err);
  });
