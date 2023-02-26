const express = require("express");
const router = express.Router();
const matchController = require("../controllers/matchController");
const auth = require("../middlewares/authMiddleware");

router.get("/allMatches", matchController.getAllMatches);
router.post("/matchByDate", matchController.getMatchByDate);
router.post("/createMatch", matchController.createMatch);

module.exports = router;
