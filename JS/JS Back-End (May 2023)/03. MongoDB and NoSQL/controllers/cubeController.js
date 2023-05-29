const router = require("express").Router();
const cubeManager = require("../managers/cubeManager");

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  cubeManager.create({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
  });
  res.redirect("/");
});

router.get("/:cubeId/details", (req, res) => {
  let cubeId = req.params.cubeId;
  let cube = cubeManager.getCubeById(cubeId);
  if (!cube) res.redirect("/404");
  res.render("details", cube);
});

router.get("/search", (req, res) => {
  let { search, from, to } = req.body;
  let cubes = cubeManager.searchCube(search, from, to);
  res.render("index", { cubes });
});

module.exports = router;
