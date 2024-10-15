const express = require("express");
const routerAPI = express.Router();
const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleAPI,
} = require("../controllers/apiController");

const {
  postCreateCustomerAPI,
  postCreateArrayCustomerAPI,
  getCustomerAPI,
  putCustomerAPI,
  deleteACustomerAPI,
} = require("../controllers/customerController");

//routes for users
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);

//route for uploading image
routerAPI.post("/file", postUploadSingleAPI);

//route for customers
routerAPI.post("/customers", postCreateCustomerAPI);
routerAPI.post("/customers-many", postCreateArrayCustomerAPI);
routerAPI.get("/customers", getCustomerAPI);
routerAPI.put("/customers", putCustomerAPI);
routerAPI.delete("/customers", deleteACustomerAPI);

module.exports = routerAPI;
