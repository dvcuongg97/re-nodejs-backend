// handler function
const connection = require("../config/database");

const getHomepage = (req, res) => {
  // let users = [];
  // A simple SELECT query
  connection.query("select * from Users u", function (err, results, fields) {
    // users = results;
    // jsonUser = JSON.stringify(users);
    // res.send("Hello Database");
    res.send(JSON.stringify(results));
    console.log("results :::", users); // results contains rows returned by server
  });
};

const getEjs = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomepage,
  getEjs,
};
