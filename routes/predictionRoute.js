const express = require("express");
const router = express.Router();
const predictionController = require("../controllers/predictionController");
const auth = require("../middlewares/authMiddleware");

router.get("/allPredictions", auth, predictionController.getAllPredictions);

router.post("/createPrediction", auth, predictionController.createPrediction);

module.exports = router;
