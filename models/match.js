const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  team1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },

  team2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },

  matchDate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Match", matchSchema);
