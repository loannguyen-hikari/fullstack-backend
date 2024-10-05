const getHomePage = (req, res) => {
  res.send("Hello World Loan with nodemon!");
}

const getTestPage = (req, res) => {
  res.render("sample.ejs");
}
module.exports = {
  getHomePage,
  getTestPage
}