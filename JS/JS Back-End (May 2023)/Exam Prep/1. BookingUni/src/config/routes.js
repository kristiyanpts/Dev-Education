const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const hotelController = require("../controllers/hotelController");
const profileController = require("../controllers/profileController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", userController);
  app.use("/hotel", hotelController);
  app.use("/profile", profileController);
};
