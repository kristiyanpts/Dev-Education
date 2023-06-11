const router = require("express").Router();
const hotelService = require("../services/hotelService");

// TODO: Replace with real controller
router.get("/", async (req, res) => {
  const hotels = await hotelService.getAll();
  res.render("home", {
    title: "Home Page",
    hotels,
  });
});

module.exports = router;
