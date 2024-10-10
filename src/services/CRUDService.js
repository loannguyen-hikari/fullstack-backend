const connection = require("../config/database");

const getAllUser = async () => {
  let [results, fields] = await connection.query("SELECT * FROM Users");
  return results;
};

const getUserByID = async (userID) => {
  let [results, fields] = await connection.query(
    `SELECT * FROM Users where id = ?`,
    [userID]
  );
  return results;
};

const updateUserbyID = async (email, myname, city, userID) => {
  let [results, fields] = await connection.query(
    `UPDATE Users
    SET email = ?, name =?, city =?
    WHERE id = ?
    `,
    [email, myname, city, userID]
  );
};

module.exports = {
  getAllUser,
  getUserByID,
  updateUserbyID,
};
