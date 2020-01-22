import mongoose from "mongoose";

var User = mongoose.model("User", {
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

export default User;
