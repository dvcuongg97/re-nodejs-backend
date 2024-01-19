// handler function
const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};

const getEjs = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  const { email, name, city } = req.body;
  console.log(
    ">>check email ::",
    email,
    ">>check name ::",
    name,
    ">>check city ::",
    city
  );
  // Using placeholders
  connection.query(
    `INSERT INTO
    Users  (email, name, city)
    VALUES(?, ? ,?)`,
    [email, name, city],
    function (err, results) {
      console.log(">>check results ::", results);
      res.send("Created user Succesed");
    }
  );

  // res.send("Create a new users");
};

module.exports = {
  getHomepage,
  getEjs,
  postCreateUser,
};
