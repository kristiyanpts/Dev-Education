const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const bookController = require("../controllers/bookController");
const profileController = require("../controllers/profileController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", userController);
  app.use("/books", bookController);
  app.use("/profile", profileController);
  app.use("*", (req, res) => {
    res.redirect("/404");
  });
};
