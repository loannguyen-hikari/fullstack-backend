const { default: aqp } = require("api-query-params");
const Customer = require("../models/customer");

const createCustomerService = async (customerData) => {
  try {
    let result = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      description: customerData.description,
      image: customerData.image,
    });

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createArrayCustomerService = async (arr) => {
  try {
    let result = await Customer.insertMany(arr);
    return result;
  } catch (error) {
    console.log("check error", error);
    return null;
  }
};

const getCustomerService = async (limit, page, name, queryString) => {
  try {
    let result = null;
    if (limit && page) {
      let skip = (page - 1) * limit;

      const { filter } = aqp(queryString);
      delete filter.page;
      console.log(filter);
      result = await Customer.find(filter).skip(skip).limit(limit).exec();
    } else {
      result = await Customer.find({});
    }
    return result;
  } catch (error) {
    console.log("check error", error);
    return null;
  }
};

const updateCustomerService = async (id, name, email, address) => {
  try {
    let result = await Customer.updateOne(
      { _id: id },
      { name: name, email: email, address: address }
    );
    return result;
  } catch (error) {
    console.log("Error", error);
    return null;
  }
};

const deleteACustomerService = async (id, name, email, address) => {
  try {
    let result = await Customer.deleteById({ _id: id });
    return result;
  } catch (error) {
    console.log("Error", error);
    return null;
  }
};
module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getCustomerService,
  updateCustomerService,
  deleteACustomerService,
};
