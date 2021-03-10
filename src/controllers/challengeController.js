const Challenge = require("../models/Challenge");

const challengeController = {
  async getAllChallenges(req, res) {
    const challenges = await Challenge.find();

    res.json(challenges);
  },
};

module.exports = challengeController;
