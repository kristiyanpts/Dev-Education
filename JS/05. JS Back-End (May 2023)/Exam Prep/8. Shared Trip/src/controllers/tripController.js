const { hasUser } = require("../middlewares/guards");
const { parseError } = require("../utils/parser");
const router = require("express").Router();
const tripService = require("../services/tripService");

function getTripProps(user, trip) {
  if (user) {
    trip.isUser = true;
    if (user._id == trip.creator._id) {
      trip.isOwner = true;
    }
    if (trip.seats > 0) {
      if (
        user._id != trip.creator._id &&
        !trip.buddies.find((a) => a._id == user._id)
      ) {
        trip.canJoin = true;
      }
    } else {
      trip.noSeats = true;
    }
  }

  return trip;
}

router.get("/", async (req, res) => {
  let trips = await tripService.getAll();
  res.render("trip/trips", {
    title: "Trips",
    trips,
  });
});

router.get("/create", hasUser(), (req, res) => {
  res.render("trip/create", { title: "Create trip" });
});

router.post("/create", hasUser(), async (req, res) => {
  let trip = { ...req.body, creator: req.user._id };

  try {
    if (Object.values(trip).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    await tripService.create(trip, req.user._id);
    res.redirect("/trips");
  } catch (error) {
    res.render("trip/create", {
      errors: parseError(error),
      body: trip,
    });
  }
});

router.get("/:id/details", async (req, res) => {
  let tripId = req.params.id;
  let trip = await tripService
    .getById(tripId)
    .populate("creator")
    .populate("buddies");

  trip = getTripProps(req.user, trip);

  res.render("trip/details", { trip, title: "Trip Details" });
});

router.get("/:id/join", hasUser(), async (req, res) => {
  let tripId = req.params.id;
  let trip = await tripService
    .getById(tripId)
    .populate("creator")
    .populate("buddies");

  try {
    if (req.user._id == trip.creator._id) {
      return res.redirect("/404");
    }
    if (trip.buddies.find((a) => a._id == req.user._id)) {
      throw new Error("You have already joined this trip");
    }

    await tripService.joinTrip(tripId, req.user._id);
    res.redirect(`/trips/${tripId}/details`);
  } catch (error) {
    trip = getTripProps(req.user, trip);
    res.render("trip/details", {
      trip,
      title: "Trip Details",
      errors: parseError(error),
    });
  }
});

router.get("/:id/delete", hasUser(), async (req, res) => {
  let tripId = req.params.id;
  let trip = await tripService.getById(tripId);

  if (req.user._id != trip.creator) {
    return res.redirect("/404");
  }

  await tripService.deleteById(tripId);
  res.redirect("/trips");
});

router.get("/:id/edit", hasUser(), async (req, res) => {
  let tripId = req.params.id;
  let trip = await tripService.getById(tripId);

  if (req.user._id != trip.creator) {
    return res.redirect("/404");
  }

  res.render("trip/edit", { trip, title: "Edit Trip" });
});

router.post("/:id/edit", hasUser(), async (req, res) => {
  let tripId = req.params.id;
  let trip = await tripService.getById(tripId);

  if (req.user._id != trip.creator) {
    return res.redirect("/404");
  }

  let tripData = { ...req.body, creator: trip.creator };

  try {
    if (Object.values(tripData).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    tripData.buddies = trip.buddies;

    await tripService.update(tripId, tripData);
    res.redirect(`/trips/${tripId}/details`);
  } catch (error) {
    res.render("trip/edit", {
      errors: parseError(error),
      trip,
      title: "Edit Trip",
    });
  }
});

module.exports = router;
