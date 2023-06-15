const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const gameController = require("../controllers/gameController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", userController);
  app.use("/games", gameController);
  app.use("*", (req, res) => {
    res.redirect("/404");
  });
};
