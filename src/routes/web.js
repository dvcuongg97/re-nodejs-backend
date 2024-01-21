const express = require("express");

// import router form express
const router = express.Router();

// import handler
const {
  getHomepage,
  getEjs,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");

// routes
router.get("/", getHomepage);
router.get("/ejs", getEjs);
router.post("/create-user-succeed", postCreateUser);
router.get("/create-user", getCreatePage);

// export routers
module.exports = router;
