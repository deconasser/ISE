const express = require("express");
const router = express.Router();
const controller = require("../controllers/fact.controller");

router.get("/", controller.index);
router.patch("/:id", controller.votePatch);
module.exports = router;
