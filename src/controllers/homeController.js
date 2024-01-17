// handler function

const getHomepage = (req, res) => {
  res.send("Hello World! with nodemon");
};

const getEjs = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomepage,
  getEjs,
};
