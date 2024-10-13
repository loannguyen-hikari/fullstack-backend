const mongoose = require("mongoose");

//Create scheme
const customerSchema = new mongoose.Schema(
  {
    name: {
      require: true,
      type: String,
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  {
    timestamps: true,
  }
);
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
