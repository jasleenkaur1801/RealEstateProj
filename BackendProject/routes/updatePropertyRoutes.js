const express = require("express");
const { updateProperty } = require("../controllers/updatePropertyController");

const router = express.Router();

router.put("/:id", updateProperty); // This will now work with /api/properties/update/:id

module.exports = router;
