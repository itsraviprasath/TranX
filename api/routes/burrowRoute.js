const express = require("express");
const router = express.Router();
const burrowController = require("../controllers/burrowController");

router.post("/burrow", burrowController.createBurrow);
router.get("/getburrow", burrowController.getBurrows);
module.exports = router;
