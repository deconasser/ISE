//[GET] /facts
const Fact = require("../models/facts.model");
module.exports.index = async (req, res) => {
  let find = {
    category: "society",
  };
  const facts = await Fact.find(find);
  console.log(facts);
  res.json(facts);
};
//[PATCH] /facts/:id
module.exports.votePatch = async (req, res) => {
  res.json(req.body);
};
