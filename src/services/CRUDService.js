const connection = require("../config/database");

const getAllUser = async () => {
  let [results, fields] = await connection.query("select * from Users");
  return results;
};

const getUserById = async (id) => {
  let [results, fields] = await connection.query(
    "select * from Users where id = ?",
    [id]
  );
  return results;
};

module.exports = {
  getAllUser,
  getUserById,
};
