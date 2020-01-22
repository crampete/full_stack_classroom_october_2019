var mongoose = require("mongoose");
var express = require("express");
var app = express();
var userController = require("./controllers/User");
var bookController = require("./controllers/Book");

mongoose.connect("", { useNewUrlParser: true });
var db = mongoose.connection;

app.use("/user", userController);
app.use("/book", bookController);
