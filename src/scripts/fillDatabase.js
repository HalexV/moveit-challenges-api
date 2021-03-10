/*

This script was used to fill out the database with data created manually to serve the challenges to the nextjs app moveit.

*/

require("dotenv").config();

const mongoose = require("mongoose");

const challengesList = require("../../challenges.json");
const Challenge = require("../models/Challenge");

mongoose.connect(
  process.env.MONGO_CONNECTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) console.log(error);
    else console.log("Mongo Connected");
  }
);

const db = mongoose.connection;

db.once("open", async function () {
  for (let challenge of challengesList) {
    let challengeDoc = new Challenge(challenge);
    await challengeDoc.save();
  }

  db.close((err) => {
    if (err) console.log(err);
    else console.log("Mongo connection closed");
  });
});
