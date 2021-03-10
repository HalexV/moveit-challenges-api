const mongoose = require("mongoose");

const challengeSchema = mongoose.Schema({
  type: { type: String, lowercase: true, required: true },
  description: { type: String, required: true },
  amount: { type: Number, min: 1, required: true },
});

module.exports = mongoose.model("Challenge", challengeSchema);
