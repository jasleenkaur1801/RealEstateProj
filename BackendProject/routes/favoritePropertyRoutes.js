const express = require("express");
const { addFavoriteProperty, getFavoriteProperties } = require("../controllers/favoritePropertyController");

const router = express.Router();

router.post("/", addFavoriteProperty); // Add Favorite Property
router.get("/:userId", getFavoriteProperties); // Get User's Favorite Properties

module.exports = router;
