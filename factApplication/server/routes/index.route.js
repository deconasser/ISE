const factRoutes = require("./fact.route");
module.exports = (app) => {
  app.use("/facts", factRoutes);
};
