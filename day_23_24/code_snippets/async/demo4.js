const fs = require("fs");
const axios = require("axios");

axios
  .get("https://www.example.com")
  .then(res => {
    axios
      .get("https://www.norvig.com")
      .then(res2 => {
        fs.writeFile("combined.html", res.data + res2.data, err => {
          if (err) {
            console.log("File write failed");
          }
        });
      })
      .catch(err => {
        console.log("norvig failed");
      });
  })
  .catch(err => {
    console.log("Error");
  });
