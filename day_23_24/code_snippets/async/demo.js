const axios = require("axios");

var output;
axios
  // .get("http://www.exampledfjdkfjdkfjaskdfjsksdsfdsfs.com")
  .get("http://www.example.com")
  .then(res => {
    console.log("success");
    // output = res;
    // console.log(output.data);
  })
  .catch(err => {
    console.log("failed");
  });

console.log("After request");
