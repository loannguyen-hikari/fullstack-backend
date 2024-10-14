require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const fileUpload = require("express-fileupload");

const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config file upload
app.use(fileUpload());

//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

//config template engine
configViewEngine(app);

//declare routes
app.use("/", webRoutes);
app.use("/v1/api/", apiRoutes);

//simple query
// connection.query("SELECT * FROM Users u", function (err, results, fields) {
//   console.log("results= ", results);
// });

//Only execute app if connecting DB successfully
(async () => {
  try {
    //test connection
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend app listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>>Error connect to DB");
  }
})();
