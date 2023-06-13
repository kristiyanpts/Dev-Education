const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const cryptoController = require("../controllers/cryptoController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", userController);
  app.use("/crypto", cryptoController);
  app.get("*", (req, res) => {
    res.redirect("/404");
  });
};
