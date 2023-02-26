const express = require("express");
const router = express.Router();
const teamController = require("../controllers/teamController");

router.get("/allTeams", teamController.getAllTeams);
router.post("/createTeam", teamController.createTeam);

module.exports = router;
