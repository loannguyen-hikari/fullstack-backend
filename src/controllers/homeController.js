const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
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

module.exports = {
  getHomePage,
  getTestPage,
  postCreateUser,
  getCreatePage,
};
