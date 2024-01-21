// handler function
const connection = require("../config/database");
const { getAllUser } = require("../services/CRUDService");

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
  console.log(
    ">>check email ::",
    email,
    ">>check name ::",
    name,
    ">>check city ::",
    city
  );
  let [results, fields] = await connection.query(
    `INSERT INTO
    Users  (email, name, city)
    VALUES(?, ? ,?)`,
    [email, name, city]
  );
  console.log(">> check results ::", results);
  res.send("Create new user succeed !!");
};

const getCreatePage = (req, res) => {
  res.render("createUser.ejs");
};

module.exports = {
  getHomepage,
  getEjs,
  postCreateUser,
  getCreatePage,
};
