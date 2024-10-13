const express = require("express");
const routerAPI = express.Router();
const { getUsersAPI } = require("../controllers/apiController");

routerAPI.get("/", (req, res) => {
  res.send("Hello");
});

routerAPI.get("/users", getUsersAPI);

module.exports = routerAPI;
