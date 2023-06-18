const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const animalController = require("../controllers/animalController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", userController);
  app.use("/dashboard", animalController);
  app.use("*", (req, res) => {
    res.redirect("/404");
  });
};
