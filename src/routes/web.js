const express = require("express");

// import router form express
const router = express.Router();

// import handler
const {
  getHomepage,
  getCreatePage,
  postCreateUser,
  getUpdatePage,
  postUpdateUser,
} = require("../controllers/homeController");

// home router
router.get("/", getHomepage);
// create user router
router.get("/create-user", getCreatePage);
router.post("/create-user-succeed", postCreateUser);
// update user router
router.get("/update-user/:userId", getUpdatePage);
router.post("/update-user-succeed", postUpdateUser);

// export routers
module.exports = router;
