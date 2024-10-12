const mongoose = require("mongoose");

//Create scheme
const kittySchema = new mongoose.Schema({
  name: String,
});
const Kitten = mongoose.model("Kitten", kittySchema);

module.exports = Kitten;
