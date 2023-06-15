const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const adController = require("../controllers/adController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", userController);
  app.use("/jobs", adController);
  app.use("*", (req, res) => {
    res.redirect("/404");
  });
};
