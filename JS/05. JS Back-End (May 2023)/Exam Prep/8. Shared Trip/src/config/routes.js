const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const tripController = require("../controllers/tripController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", userController);
  app.use("/trips", tripController);
};
