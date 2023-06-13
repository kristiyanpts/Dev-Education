const router = require("express").Router();
const auctionService = require("../services/auctionService");
const { hasUser } = require("../middlewares/guards");

router.get("/", hasUser(), async (req, res) => {
  let listings = (await auctionService.getAll().populate("bidder")).filter(
    (a) => a.closed == true
  );
  res.render("closed-auctions", { listings });
});

module.exports = router;
