const router = require("express").Router();
const animalService = require("../services/animalService");

router.get("/", async (req, res) => {
  let animals = (await animalService.getAll()).slice(-3);
  res.render("home", {
    title: "Home Page",
    animals,
  });
});

router.get("/404", (req, res) => {
  res.render("404", { title: "Page Not Found" });
});

module.exports = router;
