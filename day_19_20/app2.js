const express = require("express");
const app = express();
const port = 5000;

app.get("/books", (req, res) => {
  res.status(500);
  res.send("harry potter, lord of the rings, percy jackson");
});

app.get("/user", (req, res) => {
  res.send("prem, sai, asif");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// const foo = (req, resp) => {
//   console.log(req, resp);
// };
