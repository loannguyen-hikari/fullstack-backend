const express = require("express");
const {
  getHomePage,
  getTestPage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  removeUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);

router.get("/test", getTestPage);
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);

router.get("/update/:id", getUpdatePage);
router.post("/update-user", postUpdateUser);

router.post("/delete-user/:id", postDeleteUser);
router.post("/delete-user", removeUser);
module.exports = router;
