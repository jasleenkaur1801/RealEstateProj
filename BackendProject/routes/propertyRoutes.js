const express = require("express");
const { addProperty, getProperties } = require("../controllers/propertyController");

const router = express.Router();

router.post("/", addProperty);  // Add Property
router.get("/", getProperties);  // Fetch All Properties

module.exports = router;
