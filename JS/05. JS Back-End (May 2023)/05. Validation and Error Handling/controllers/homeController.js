const router = require("express").Router();
const cubeManager = require("../managers/cubeManager");

router.get("/", async (req, res) => {
  let cubes = await cubeManager.getAll().lean();
  res.render("index", { cubes });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;
