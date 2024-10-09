const connection = require("../config/database");

const { getAllUser, getUserUpdate } = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  let results = await getAllUser();
  return res.render("home.ejs", { listUsers: results });
};

const getTestPage = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  let { email, myname, city } = req.body;
  console.log("email", email);
  console.log("name", myname);
  console.log("city", city);

  // connection.query(
  //   `INSERT INTO
  //   Users (email, name, city)
  //   VALUES (?,?,?)`,
  //   [email, myname, city],
  //   function (err, results) {
  //     console.log(results);
  //     res.send("Created user successfully");
  //   }
  // );

  let [results, fields] = await connection.query(
    `INSERT INTO 
    Users (email, name, city)
    VALUES (?,?,?)`,
    [email, myname, city]
  );

  res.send("Created user successfully");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userID = req.params.id;
  let results = await getUserUpdate(userID);

  let user = results && results.length > 0 ? results[0] : {};
  res.render("edit.ejs", { userEdit: user });
};

module.exports = {
  getHomePage,
  getTestPage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
};
