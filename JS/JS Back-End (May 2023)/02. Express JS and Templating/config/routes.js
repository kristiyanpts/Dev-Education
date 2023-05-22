const homeController = require("../controllers/homeController");
const cubeController = require("../controllers/cubeController");

module.exports = (app) => {
  app.use(homeController);
  app.use("/cubes", cubeController);
  app.get("*", (req, res) => {
    res.redirect("/404");
  });
};
