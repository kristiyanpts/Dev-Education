const { hasUser } = require("../middlewares/guards");
const router = require("express").Router();
const auctionService = require("../services/auctionService");
const { parseError } = require("../utils/parser");
const { generateEditOptions } = require("../utils/viewHelper");

let optionValues = {
  estate: "Real Estate",
  vehicles: "Vehicles",
  furniture: "Furniture",
  electronics: "Electronics",
  other: "Other",
};

router.get("/", async (req, res) => {
  let listings = (await auctionService.getAll()).filter(
    (c) => c.closed == false
  );
  res.render("browse", { listings });
});

router.get("/create", hasUser(), (req, res) => {
  res.render("create");
});

router.post("/create", hasUser(), async (req, res) => {
  let auction = {
    title: req.body.title,
    description: req.body.description,
    category: optionValues[req.body.category],
    image: req.body.image,
    price: req.body.price,
    author: req.user._id,
  };

  try {
    if (Object.values(auction).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    await auctionService.create(auction);
    res.redirect("/listings");
  } catch (error) {
    res.render("create", {
      errors: parseError(error),
      body: auction,
    });
  }
});

router.get("/closed-auctions", hasUser(), async (req, res) => {
  let listings = (
    await auctionService.getAll({ author: req.user._id }).populate("bidder")
  ).filter((a) => a.closed == true);

  res.render("closed-auctions", { listings });
});

router.get("/:id/close", hasUser(), async (req, res) => {
  let listingId = req.params.id;
  let listing = await auctionService.getById(listingId);

  if (req.user._id != listing.author) {
    return res.redirect("/404");
  }

  await auctionService.closeListing(listingId);
  res.redirect("/listings/closed-auctions");
});

function getDetailsRoles(user, listing) {
  if (user) listing.isUser = true;

  if (user?._id == listing.author._id) {
    listing.isOwner = true;
  }
  if (
    user &&
    user._id != listing.author._id &&
    user._id != listing.bidder?._id
  ) {
    listing.canBid = true;
  }

  return listing;
}

router.get("/:id/details", async (req, res) => {
  let listingId = req.params.id;
  let listing = await auctionService
    .getById(listingId)
    .populate("author")
    .populate("bidder");

  listing = getDetailsRoles(req.user, listing);

  res.render("details", { listing });
});

router.get("/:id/edit", hasUser(), async (req, res) => {
  let listingId = req.params.id;
  let listing = await auctionService.getById(listingId);
  let listingOptions = generateEditOptions(listing.category);

  if (req.user._id != listing.author) {
    return res.redirect("/404");
  }

  res.render("edit", { listing, listingOptions });
});

router.post("/:id/edit", hasUser(), async (req, res) => {
  let listingId = req.params.id;
  let listing = await auctionService.getById(listingId);

  if (req.user._id != listing.author) {
    return res.redirect("/404");
  }

  let auction = {
    title: req.body.title,
    description: req.body.description,
    category: optionValues[req.body.category],
    image: req.body.image,
    price: listing.bidder ? listing.price : req.body.price,
    author: req.user._id,
  };

  console.log(req.body);

  try {
    if (Object.values(auction).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    auction.bidder = listing.bidder;

    await auctionService.update(listingId, auction);
    res.redirect(`/listings/${listingId}/details`);
  } catch (error) {
    res.render("edit", {
      listing: auction,
      errors: parseError(error),
    });
  }
});

router.post("/:id/bid", hasUser(), async (req, res) => {
  let listingId = req.params.id;
  let listing = await auctionService
    .getById(listingId)
    .populate("author")
    .populate("bidder");
  let bidAmount = Number(req.body.bid);

  try {
    if (req.user._id == listing.author._id) {
      return res.redirect("/404");
    }

    if (req.user._id == listing.bidder?._id) {
      throw new Error("You are already the highest bidder.");
    }
    if (bidAmount <= listing.price) {
      throw new Error("Price must be greater than the current price.");
    }

    await auctionService.bid(listingId, req.user._id, bidAmount);
    res.redirect(`/listings/${listingId}/details`);
  } catch (error) {
    console.log(error);
    listing = getDetailsRoles(req.user, listing);
    res.render("details", { listing, errors: parseError(error) });
  }
});

router.get("/:id/delete", hasUser(), async (req, res) => {
  let listingId = req.params.id;
  let listing = await auctionService.getById(listingId);

  if (req.user._id != listing.author) {
    return res.redirect("/404");
  }

  await auctionService.deleteById(listingId);
  res.redirect("/listings");
});

module.exports = router;
