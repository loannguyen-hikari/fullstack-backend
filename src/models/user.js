const mongoose = require("mongoose");

//Create scheme
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
});
const User = mongoose.model("User", userSchema);

module.exports = User;
