const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const auctionController = require("../controllers/auctionController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", userController);
  app.use("/listings", auctionController);
  app.get("*", (req, res) => {
    res.redirect("/404");
  });
};
