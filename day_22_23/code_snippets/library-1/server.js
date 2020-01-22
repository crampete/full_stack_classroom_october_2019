// https://stackoverflow.com/a/36374920 easiest way I could find native mongo with express
// this has async issues in some cases.

var express = require("express");
var app = express();

var MongoClient = require("mongodb").MongoClient;
var db;

MongoClient.connect("", function(err, database) {
  if (err) {
    console.log("Failed to connect.");
  }
  db = database;
});
