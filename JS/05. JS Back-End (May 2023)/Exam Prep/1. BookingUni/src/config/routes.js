const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const hotelController = require("../controllers/hotelController");
const profileController = require("../controllers/profileController");
const { hasUser } = require("../middlewares/guards");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", userController);
  app.use("/hotel", hasUser(), hotelController);
  app.use("/profile", profileController);
};
