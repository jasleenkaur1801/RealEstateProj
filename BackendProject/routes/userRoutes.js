const express = require("express");
const { getUser, updateUser } = require("../controllers/userController"); 

const router = express.Router();

router.get("/:id", getUser);  // Fetch User
router.put("/:id", updateUser); // Update User

module.exports = router;
