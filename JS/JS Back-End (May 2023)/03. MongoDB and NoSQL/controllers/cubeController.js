const router = require("express").Router();
const cubeManager = require("../managers/cubeManager");
const accessoryManager = require("../managers/accessoryManager");

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  await cubeManager.create({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
  });
  res.redirect("/");
});

router.get("/:cubeId/details", async (req, res) => {
  let cubeId = req.params.cubeId;
  let cube = await cubeManager.getCubeById(cubeId).lean();
  if (!cube) res.redirect("/404");
  res.render("details", cube);
});

router.get("/:cubeId/attach-accessory", async (req, res) => {
  let cubeId = req.params.cubeId;
  let cube = await cubeManager.getCubeById(cubeId).lean();
  let accessories = await accessoryManager.getOthers(cube.accessories).lean();
  let hasAccessories = accessories.length > 0;
  if (!cube) res.redirect("/404");
  res.render("accessory/attach", { cube, accessories, hasAccessories });
});

router.post("/:cubeId/attach-accessory", async (req, res) => {
  let accessoryId = req.body.accessory;
  let cubeId = req.params.cubeId;
  await cubeManager.attachAccessory(cubeId, accessoryId);
  res.redirect(`/cubes/${cubeId}/details`);
});

router.get("/search", (req, res) => {
  let { search, from, to } = req.body;
  let cubes = cubeManager.searchCube(search, from, to);
  res.render("index", { cubes });
});

module.exports = router;
