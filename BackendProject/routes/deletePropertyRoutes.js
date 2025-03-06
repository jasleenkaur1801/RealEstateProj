const express = require("express");
const { deleteProperty } = require("../controllers/deletePropertyController");

const router = express.Router();

router.delete("/:id", deleteProperty); // This will now work with /api/properties/delete/:id

module.exports = router;
