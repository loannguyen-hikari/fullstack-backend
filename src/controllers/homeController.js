const connection = require("../config/database");
const User = require("../models/user");

const getHomePage = async (req, res) => {
  let results = await User.find();
  return res.render("home.ejs", { listUsers: results });
};

const getTestPage = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  let { email, myname, city } = req.body;

  await User.create({
    email: email,
    name: myname,
    city: city,
  });

  res.send("Created user successfully");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userID = req.params.id;
  let user = await User.findById(userID);
  res.render("edit.ejs", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  let { email, myname, city, userID } = req.body;
  await User.updateOne(
    { _id: userID },
    { email: email, name: myname, city: city }
  );
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userID = req.params.id;
  let user = await User.findById(userID);
  res.render("delete.ejs", { userEdit: user });
};

const removeUser = async (req, res) => {
  const userID = req.body.userID;
  await User.deleteOne({ _id: userID });
  res.redirect("/");
};

module.exports = {
  getHomePage,
  getTestPage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  removeUser,
};
