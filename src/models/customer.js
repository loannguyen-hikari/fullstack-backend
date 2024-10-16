const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
//Create scheme
const customerSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);
// Override all methods
customerSchema.plugin(mongoose_delete, { overrideMethods: "all" });
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
