const homeController = require("../controllers/homeController");
const cubeController = require("../controllers/cubeController");
const accessoryController = require("../controllers/accessoryController");
const userController = require("../controllers/userController");

module.exports = (app) => {
  app.use(homeController);
  app.use("/cubes", cubeController);
  app.use("/accessories", accessoryController);
  app.use("/users", userController);
  app.get("*", (req, res) => {
    res.redirect("/404");
  });
};
