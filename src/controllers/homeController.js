// handler function
const connection = require("../config/database");
const {
  getAllUser,
  getUserById,
  updateUserById,
} = require("../services/CRUDService");

// home
const getHomepage = async (req, res) => {
  const listUsers = await getAllUser();
  console.log(">> check results::", listUsers);
  return res.render("home.ejs", { listUsers });
};

// create user
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

// update user
// select user by id
const getUpdatePage = async (req, res) => {
  const userId = req.params.userId;
  console.log(">>log userId", userId);

  const results = await getUserById(userId);
  console.log(">>results ::", results);

  let userUpdate = results && results.length > 0 ? results[0] : {};
  res.render("updateUser.ejs", { userUpdate });
};

// update by POST method
const postUpdateUser = async (req, res) => {
  const { id, email, name, city } = req.body;
  await updateUserById(email, name, city, id);
  res.redirect("/");
};

module.exports = {
  getHomepage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
};
