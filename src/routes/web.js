const express = require("express");

// import router form express
const router = express.Router();

// import handler
const {
  getHomepage,
  getEjs,
  postCreateUser,
} = require("../controllers/homeController");

// routes
router.get("/", getHomepage);
router.get("/ejs", getEjs);
router.post("/add-user", postCreateUser);

// export routers
module.exports = router;
