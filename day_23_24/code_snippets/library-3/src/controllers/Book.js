var express = require("express");
var router = express.Router();

var Book = require("../models/Book");

//TODO HOMEWORK
router.delete("/:isbn", (req, res) => {});

// TODO HOMEWORK
// THIS ROUTE RETURNS ALL THE BOOKS IN THE DATABASE AS A LIST
router.get("/", (req, res) => {});

router.post("/", (req, res) => {
  // storing the json body in a variable
  var incomingData = req.body;

  console.log(incomingData);
  //creating a new Book object
  var a = new Book({
    isbn: incomingData["isbn"],
    title: incomingData["title"],
    author: incomingData["author"]
  });

  // via callbacks
  a.save(function(err, book) {
    // if something goes wrong send appropriate message
    if (err) {
      console.log(err);
      // TODO if duplicate return 409
      res.status(400);
      return res.send({ state: "Fail" });
    }

    // if nothing wrong send success
    return res.send({ state: "success" });
  });
});

router.get("/:isbn", (req, res) => {
  const i = req.params.isbn;
  console.log(i);
  Book.findOne({ isbn: i })
    .then(book => {
      console.log(book);
      if (book) {
        return res.send(book);
      } else {
        return res.status(404).send({ data: {} });
      }
    })
    .catch(err => {
      return res.status(500).send({ state: "fail" });
    });
});

router.put("/:abc", (req, res) => {
  Book.update({ isbn: req.params.abc }, req.body)
    .then(status => {
      Book.findOne({ isbn: req.params.abc })
        .then(book => {
          res.send(book);
        })
        .catch(err => {
          res.status(500).send({ state: "fail" });
        });
    })
    .catch(err => {
      res.status(500).send({ state: "fail" });
    });
});

module.exports = router;
