const router = require("express").Router();
const hotelService = require("../services/hotelService");
const { parseError } = require("../utils/parser");

router.get("/:id/details", async (req, res) => {
  let hotel = await hotelService.getById(req.params.id);

  if (hotel.owner == req.user._id) {
    hotel.isOwner = true;
  } else if (
    hotel.bookings.map((b) => b.toString()).includes(req.user._id.toString())
  ) {
    hotel.isBooked = true;
  }

  res.render("details", { hotel });
});

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", async (req, res) => {
  let hotel = {
    name: req.body.name,
    city: req.body.city,
    imageUrl: req.body.imageUrl,
    rooms: Number(req.body.rooms),
    owner: req.user._id,
  };

  try {
    if (Object.values(hotel).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    await hotelService.create(hotel);
    res.redirect("/");
  } catch (error) {
    res.render("create", {
      body: hotel,
      errors: parseError(error),
    });
  }
});

router.get("/:id/edit", async (req, res) => {
  let hotel = await hotelService.getById(req.params.id);

  if (hotel.owner != req.user._id) {
    return res.redirect("/auth/login");
  }

  res.render("edit", { hotel });
});

router.post("/:id/edit", async (req, res) => {
  let hotel = await hotelService.getById(req.params.id);

  if (hotel.owner != req.user._id) {
    return res.redirect("/auth/login");
  }

  let editedHotel = {
    name: req.body.name,
    city: req.body.city,
    imageUrl: req.body.imageUrl,
    rooms: Number(req.body.rooms),
  };

  try {
    if (Object.values(editedHotel).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    await hotelService.update(req.params.id, editedHotel);
    res.redirect(`/hotel/${req.params.id}/details`);
  } catch (error) {
    res.render("edit", {
      hotel: Object.assign(editedHotel, { _id: req.params.id }),
      errors: parseError(error),
    });
  }
});

router.get("/:id/delete", async (req, res) => {
  let hotel = await hotelService.getById(req.params.id);

  if (hotel.owner != req.user._id) {
    return res.redirect("/auth/login");
  }

  await hotelService.deleteById(req.params.id);
  res.redirect("/");
});

router.get("/:id/book", async (req, res) => {
  let hotel = await hotelService.getById(req.params.id);

  try {
    if (hotel.owner == req.user._id) {
      hotel.isOwner = true;
      throw new Error("Cannot book your own hotel");
    }

    await hotelService.bookRoom(req.params.id, req.user._id);
    res.redirect(`/hotel/${req.params.id}/details`);
  } catch (error) {
    res.render("details", { hotel, errors: parseError(error) });
  }
});

module.exports = router;
