const mongoose = require("mongoose");

var schema = {
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // TODO teach them unique and sparse
  username: { type: String, default: null, sparse: true, unique: true },
  password: { type: String, required: true }
};
var User = mongoose.model("User", schema);

module.exports = User;
