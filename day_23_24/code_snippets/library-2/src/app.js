const express = require("express");
const app = express();
const Book = require("./models/Book");
const User = require("./models/User");
const mongoose = require("mongoose");

app.use(express.json());

mongoose.connect("<uri here>", { useNewUrlParser: true });

// many routes pertaining to multiple resources
// can easily contaminate the file.
// makes it harder to maintain

app.get("/book", (req, res) => {});

app.get("/user", (req, res) => {});

app.get("/book/:isbn", (req, res) => {
  // can name i, isbn or anything
  const i = req.params.isbn;
  console.log(i);
  Book.find({ isbn: i })
    .then(book => {
      console.log(book);
      if (book) {
        return res.send(book);
      } else {
        return res.status(404).send({ data: [] });
      }
    })
    .catch(err => {
      return res.status(500).send({ state: "fail" });
    });
});

app.post("/book", (req, res) => {
  // storing the json body in a variable
  var incomingData = req.body;
  //creating a new Book object
  var a = new Book({
    isbn: incomingData.isbn,
    title: incomingData["title"],
    author: incomingData["author"]
  });

  a.save(function(err, book) {
    // if something goes wrong send appropriate message
    if (err) {
      console.log(err);
      res.status(400);
      return res.send({ state: "Fail" });
    }

    // if nothing wrong send success
    return res.send({ state: "success" });
  });
});

app.listen(3000, () => {
  console.log("Server started");
});

// Simple example showing reusing of views

// const myView = function(name) {
//   return `
//         <!DOCTYPE html>
//         <html>
//             <head><title>${name}</title></head>
//             <body style="background-color: green">
//                 <p>Hi. I'm ${name}</p>
//             </body>
//         </html>

//     `;
// };

// app.get("/prem", (req, res) => {
//   res.send(myView("Prem"));
// });

// app.get("/sai", (req, res) => {
//   res.send(myView("Sai"));
// });
