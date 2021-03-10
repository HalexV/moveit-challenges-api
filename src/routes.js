const routes = require("express").Router();
const challengeController = require("./controllers/challengeController");

routes.get("/all", challengeController.getAllChallenges);

module.exports = routes;
