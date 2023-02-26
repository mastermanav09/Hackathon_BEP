const Match = require("../models/match");

module.exports.createMatch = async (req, res, next) => {
  try {
    const { team1, team2, matchDate } = req.body;

    if (!team1 || !team2 || !matchDate) {
      res
        .status(400)
        .json(errorMessage("team1,team2 and matchDate are required"));
      return;
    }
    var match = await Match.create({ team1, team2, matchDate });
    return res.json(successMessage(match));
  } catch (err) {
    console.log(err);
    return res.status(400).json(errorMessage(err.message));
  }
};

module.exports.getAllMatches = async (req, res, next) => {
  try {
    var allMatches = await Match.find().populate("team1 team2");
    return res.json(successMessage(allMatches));
  } catch (err) {
    console.log(err);
    return res.status(400).json(errorMessage(err.message));
  }
};

module.exports.getMatchByDate = async (req, res, next) => {
  try {
    let { date } = req.body;

    if (!date) {
      const error = new Error("No date found!");
      error.statusCode = 404;
      throw error;
    }

    date = new Date(date);
    let month = date.getUTCMonth() + 1; //months from 1-12
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();

    let matchDate = day + "/" + month + "/" + year;
    const match = await Match.find({ matchDate: matchDate })
      .select("team1 team2")
      .populate("team1 team2");

    console.log(match);
    return res.json(match);
  } catch (err) {
    console.log(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }

    next(err);
  }
};
