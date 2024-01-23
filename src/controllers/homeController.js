// handler function
const connection = require("../config/database");
const {
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");

// home
const getHomepage = async (req, res) => {
  const listUsers = await getAllUser();
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
  const results = await getUserById(userId);
  let userUpdate = results && results.length > 0 ? results[0] : {};
  res.render("updateUser.ejs", { userUpdate });
};

// update by POST method
const postUpdateUser = async (req, res) => {
  const { id, email, name, city } = req.body;
  await updateUserById(email, name, city, id);
  res.redirect("/");
};
// delete user
const postDeleteUser = async (req, res) => {
  const userId = req.params.userId;
  const results = await getUserById(userId);
  let userDelete = results && results.length > 0 ? results[0] : {};
  res.render("deleteUser.ejs", { userDelete });
};
const postConfirmDeleteUser = async (req, res) => {
  const { id } = req.body;
  await deleteUserById(id);
  res.redirect("/");
};

module.exports = {
  getHomepage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postConfirmDeleteUser,
};
