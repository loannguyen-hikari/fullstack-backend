const connection = require("../config/database");

const getHomePage = (req, res) => {
  let users = [];
  connection.query("SELECT * FROM Users u", function (err, results, fields) {
    users = results;
    console.log("results= ", results);

    console.log("users=", users);
    res.send(JSON.stringify(users));
  });
};

const getTestPage = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomePage,
  getTestPage,
};
