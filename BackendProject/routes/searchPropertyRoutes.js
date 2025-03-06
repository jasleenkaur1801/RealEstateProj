const express = require("express");
const { searchProperties } = require("../controllers/searchPropertyController");

const router = express.Router();

router.get("/", searchProperties); // Search Properties

module.exports = router;
