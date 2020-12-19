// Initializes the `refill-coins` service on path `/refill-coins`
const { RefillCoins } = require("./refill-coins.class");
const createModel = require("../../models/refill-coins.model");
const hooks = require("./refill-coins.hooks");

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
    whitelist: ["$populate", "$regex", "$options"],
  };

  // Initialize our service with any options it requires
  app.use("/refill-coins", new RefillCoins(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("refill-coins");

  service.hooks(hooks);
};
