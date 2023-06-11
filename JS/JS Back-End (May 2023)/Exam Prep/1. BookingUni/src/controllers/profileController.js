const { hasUser } = require("../middlewares/guards");
const hotelService = require("../services/hotelService");

const router = require("express").Router();

router.get("/", hasUser(), async (req, res) => {
  let bookings = await hotelService.getBookingsByUserId(req.user._id);
  res.render("profile", { user: req.user, bookings });
});

module.exports = router;
