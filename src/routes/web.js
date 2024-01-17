const express = require("express");

// import router form express
const router = express.Router();

// import handler
const { getHomepage, getEjs } = require("../controllers/homeController");

// routes
router.get("/", getHomepage);
router.get("/ejs", getEjs);

// export routers
module.exports = router;
