const express = require("express");
const routerAPI = express.Router();
const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleAPI,
} = require("../controllers/apiController");

const { postCreateCustomerAPI } = require("../controllers/customerController");

//routes for users
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);

//route for uploading image
routerAPI.post("/file", postUploadSingleAPI);

//route for customers
routerAPI.post("/customers", postCreateCustomerAPI);

module.exports = routerAPI;
