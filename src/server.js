const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// config template engine
// app.set("views", "./views/sample.ejs");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/ejs", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
