const User = require("../models/user");
const { uploadSingleFile } = require("../services/fileService");

const getUsersAPI = async (req, res) => {
  let results = await User.find();

  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};

const postCreateUserAPI = async (req, res) => {
  let { email, myname, city } = req.body;

  let user = await User.create({
    email: email,
    name: myname,
    city: city,
  });

  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

const putUpdateUserAPI = async (req, res) => {
  let { email, myname, city, userID } = req.body;
  let user = await User.updateOne(
    { _id: userID },
    { email: email, name: myname, city: city }
  );
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

const deleteUserAPI = async (req, res) => {
  const userID = req.body.userID;
  let result = await User.deleteOne({ _id: userID });
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

const postUploadSingleAPI = async (req, res) => {
  console.log("req.files = ", req.files);
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  let result = await uploadSingleFile(req.files.image);
  console.log("check result", result);
  return res.send("ok single");
};

module.exports = {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleAPI,
};
