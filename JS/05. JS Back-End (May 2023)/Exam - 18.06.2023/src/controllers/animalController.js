const { hasUser } = require("../middlewares/guards");
const router = require("express").Router();
const animalService = require("../services/animalService");
const { parseError } = require("../utils/parser");

function getAnimalProperties(user, animal) {
  if (user) {
    animal.isUser = true;
    if (user._id == animal.owner) {
      animal.isOwner = true;
    }
    if (
      user._id != animal.owner &&
      !animal.donations.find((a) => a == user._id)
    ) {
      animal.canDonate = true;
    }
  }

  return animal;
}

router.get("/", async (req, res) => {
  let animals = await animalService.getAll();
  res.render("animals/dashboard", {
    title: "Dashboard",
    animals,
  });
});

router.get("/create", hasUser(), (req, res) => {
  res.render("animals/create", { title: "Add Animal" });
});

router.post("/create", hasUser(), async (req, res) => {
  let animalData = { ...req.body, owner: req.user._id };

  try {
    if (Object.values(animalData).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    await animalService.create(animalData);
    res.redirect("/dashboard");
  } catch (error) {
    res.render("animals/create", {
      errors: parseError(error),
      body: animalData,
      title: "Add Animal",
    });
  }
});

router.get("/:animalId/details", async (req, res) => {
  let animalId = req.params.animalId;
  let animal = await animalService.getById(animalId);

  animal = getAnimalProperties(req.user, animal);

  res.render("animals/details", { animal, title: "Animal Details" });
});

router.get("/:animalId/donate", hasUser(), async (req, res) => {
  let animalId = req.params.animalId;
  let animal = await animalService.getById(animalId);

  try {
    if (req.user._id == animal.owner) {
      return res.redirect("/404");
    }
    if (animal.donations.find((a) => a == req.user._id)) {
      throw new Error("You have already donated to this animal!");
    }

    await animalService.donate(animalId, req.user._id);
    res.redirect(`/dashboard/${animalId}/details`);
  } catch (error) {
    animal = getAnimalProperties(req.user, animal);
    res.render("animals/details", {
      animal,
      errors: parseError(error),
      title: "Animal Details",
    });
  }
});

router.get("/:animalId/delete", hasUser(), async (req, res) => {
  let animalId = req.params.animalId;
  let animal = await animalService.getById(animalId);

  if (req.user._id != animal.owner) {
    return res.redirect("/404");
  }

  await animalService.deleteById(animalId);
  res.redirect("/dashboard");
});

router.get("/:animalId/edit", hasUser(), async (req, res) => {
  let animalId = req.params.animalId;
  let animal = await animalService.getById(animalId);

  if (req.user._id != animal.owner) {
    return res.redirect("/404");
  }

  res.render("animals/edit", { animal, title: "Edit Animal" });
});

router.post("/:animalId/edit", hasUser(), async (req, res) => {
  let animalId = req.params.animalId;
  let animal = await animalService.getById(animalId);

  if (req.user._id != animal.owner) {
    return res.redirect("/404");
  }

  let animalData = { ...req.body, owner: animal.owner };

  try {
    if (Object.values(animalData).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    animalData.donations = animal.donations;

    await animalService.update(animalId, animalData);
    res.redirect(`/dashboard/${animalId}/details`);
  } catch (error) {
    res.render("animals/edit", {
      errors: parseError(error),
      animal,
      title: "Edit Animal",
    });
  }
});

// Bonus

router.get("/search", (req, res) => {
  res.render("animals/search", { title: "Search Animals" });
});

router.post("/search", async (req, res) => {
  let location = req.body.location;
  let animals = await animalService.search(location);
  res.render("animals/search", { location, animals, title: "Search Animals" });
});

module.exports = router;
