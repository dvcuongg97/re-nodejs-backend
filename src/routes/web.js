const express = require("express");

// import router form express
const router = express.Router();

// import handler
const {
  getHomepage,
  getEjs,
  postAddUser,
} = require("../controllers/homeController");

// routes
router.get("/", getHomepage);
router.get("/ejs", getEjs);
router.post("/add-user", postAddUser);

// export routers
module.exports = router;
