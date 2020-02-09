const User = require("../models/User");
const express = require("express");
const router = express.Router();

// route to get all users
// todo pagination in this route maybe?
router.get("/", (req, res) => {});

router.post("/", (req, res) => {
  var newUser = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    dob: req.body.dob
  });

  newUser
    .save()
    .then(user => {
      return res
        .status(201)
        .send({ data: user, message: "Successfully created." });
    })
    .catch(err => {
      // TODO VALIDATION
      return res.status(500).send({ message: "Something went wrong" });
    });
});

router.get("/:uname", (req, res) => {
  User.findOne({ username: req.params.uname })
    .then(user => {
      return res
        .status(200)
        .send({ data: user, message: "Successfully updated." });
    })
    .catch(err => {
      return res.status(500).send({ message: "Something went wrong." });
    });
});

router.put("/:uname", (req, res) => {
  User.update({ username: req.params.uname }, req.body)
    .then(updatedUser => {
      User.findOne({ username: req.params.username })
        .then(foundUser => {
          return res
            .status(200)
            .send({ data: foundUser, message: "Successfully updated user." });
        })
        .catch(err => {
          return res.status(500).send({ message: "Something went wrong." });
        });
    })
    .catch(err => {
      return res.status(500).send({ message: "Something went wrong." });
    });
});

module.exports = router;
