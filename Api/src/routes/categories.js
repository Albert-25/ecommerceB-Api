const express = require("express");
const router = express.Router();
const { getCategories } = require("../controllers/categories");

router.get("/", getCategories);
// router.get("/:id", ......);

module.exports = router;