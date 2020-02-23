const User = require("../models/User");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

router.get("/self", (req, res) => {
  let incomingToken = req.headers.authorization.substring(7);
  jwt.verify(incomingToken, "topsecretkeepitsafe", (err, decoded) => {
    if (err) {
      res.status(401).send({ message: "unauthorised" });
    } else {
      let emailFromToken = decoded.email;
      User.findOne({ email: emailFromToken })
        .then(foundUser => {
          // either use spread operator or _.omit or anything else
          // this isn't a good way.
          foundUser.password = null;
          res.send(foundUser);
        })
        .catch(err => {
          res.status(500).send({ message: "Something went wrong" });
        });
    }
  });
});

router.post("/signin", (req, res) => {
  // let email = req.body.email;
  let incomingEmail = req.body.email;
  let password = req.body.password;

  // mongoose email mapped to email sent via postman
  User.findOne({ email: incomingEmail })
    .then(user => {
      if (!user)
        return res.status(400).send({ message: "Wrong email or password." });

      bcrypt
        .compare(password, user.password)
        .then(result => {
          if (result) {
            jwt.sign(
              { email: user.email },
              "topsecretkeepitsafe",
              {
                expiresIn: 60 * 60 * 48
              },
              function(err, token) {
                if (err) {
                  res.status(500).send("Server issue");
                } else {
                  res.send({
                    message: "successs",
                    token: token
                  });
                }
              }
            );
          } else {
            return res
              .status(400)
              .send({ message: "wrong email or password." });
          }
        })
        .catch(err => {
          console.log("compare failed", err);
          return res.status(500).send({ message: "Something went wrong." });
        });
    })

    .catch(err => {
      console.log(err);
      res.status(500).send({ message: "Server issue." });
    });
});

router.post("/", (req, res) => {
  bcrypt
    .hash(req.body.password, 7)
    .then(function(hash) {
      var newUser = new User({
        fullname: req.body.fullname,
        email: req.body.email,
        username: req.body.username,
        password: hash
      });

      newUser
        .save()
        .then(user => {
          return res
            .status(201)
            .send({ data: user, message: "Successfully created." });
        })
        .catch(err => {
          // TODO VALIDATION 409 o r 500 and so on
          console.log(err);
          return res
            .status(500)
            .send({ message: "Something went wrong mongo" });
        });
    })
    .catch(err => {
      res.status(500).send({ message: "something went wrong hash" });
    });
});

router.get("/:uname", (req, res) => {
  User.findOne({ username: req.params.uname })
    .then(user => {
      if (!user) return res.status(404).send({ message: "Not Found." });
      return res.status(200).send({ data: user, message: "Successfull" });
    })
    .catch(err => {
      return res.status(500).send({ message: "Something went wrong." });
    });
});

router.put("/", auth, (req, res) => {
  req.user.fullname = req.body.fullname;

  req.user.save().then(res => {
    // todo omit password while sending.
    res.send(req.user);
  });
});

module.exports = router;
