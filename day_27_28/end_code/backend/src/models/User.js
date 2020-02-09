const mongoose = require("mongoose");

var User = mongoose.model("User", {
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
  username: { type: String, default: null, sparse: true, unique: true }
  // TODO teach them unique and sparse
});

module.exports = User;
