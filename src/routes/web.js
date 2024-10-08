const express = require("express");
const {
  getHomePage,
  getTestPage,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);

router.get("/test", getTestPage);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);

module.exports = router;
