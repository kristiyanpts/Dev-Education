const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", userController);
};
