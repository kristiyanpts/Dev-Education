const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const petsController = require("../controllers/petsController");
const profileController = require("../controllers/profileController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", userController);
  app.use("/pets", petsController);
  app.use("/profile", profileController);
};
