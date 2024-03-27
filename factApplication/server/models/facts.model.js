const mongoose = require("mongoose");

const factSchema = new mongoose.Schema({
  text: String,
  source: String,
  category: String,
  votesInteresting: Number,
  votesFalse: Number,
  votesMindblowing: Number,
  deleted: {
    type: Boolean,
    default: false,
  },
  createdIn: {
    type: Date,
    default: Date.now,
  },
});
const Fact = mongoose.model("Fact", factSchema, "facts");
module.exports = Fact;
