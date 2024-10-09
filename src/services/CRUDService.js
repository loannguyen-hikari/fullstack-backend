const connection = require("../config/database");

const getAllUser = async () => {
  let [results, fields] = await connection.query("SELECT * FROM Users");
  return results;
};

const getUserUpdate = async (userID) => {
  let [results, fields] = await connection.query(
    `SELECT * FROM Users where id = ?`,
    [userID]
  );
  return results;
};

module.exports = {
  getAllUser,
  getUserUpdate,
};
