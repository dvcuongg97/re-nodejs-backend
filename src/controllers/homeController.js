// handler function
const connection = require("../config/database");

const getHomepage = (req, res) => {
  // A simple SELECT query
  // connection.query("select * from Users u", function (err, results, fields) {

  //   res.send(JSON.stringify(results));
  //   console.log("results :::", users); // results contains rows returned by server
  // });
  return res.render("home.ejs");
};

const getEjs = (req, res) => {
  res.render("sample.ejs");
};

const postAddUser = (req, res) => {
  console.log("req.body :::", req.body);
  res.send("Create a new users");
};

module.exports = {
  getHomepage,
  getEjs,
  postAddUser,
};
