const router = require("express").Router();
const adService = require("../services/adService");

router.get("/", async (req, res) => {
  let ads = (await adService.getAll()).slice(0, 3);
  res.render("home", {
    title: "Home Page",
    ads,
  });
});

router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;
