// handler function
const connection = require("../config/database");
const { getAllUser, getUserById } = require("../services/CRUDService");

const getEjs = (req, res) => {
  res.render("sample.ejs");
};

const getHomepage = async (req, res) => {
  const listUsers = await getAllUser();
  console.log(">> check results::", listUsers);
  return res.render("home.ejs", { listUsers });
};

const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body;
  let [results, fields] = await connection.query(
    `INSERT INTO
    Users  (email, name, city)
    VALUES(?, ? ,?)`,
    [email, name, city]
  );
  res.send("Create new user succeed !!");
};

const getCreatePage = (req, res) => {
  res.render("createUser.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.userId;
  console.log(">>log userId", userId);
  const results = await getUserById(userId);
  console.log(">>results ::", results);
  let userUpdate = results && results.length > 0 ? results[0] : {};
  res.render("updateUser.ejs", { userUpdate });
};

module.exports = {
  getHomepage,
  getEjs,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
};
