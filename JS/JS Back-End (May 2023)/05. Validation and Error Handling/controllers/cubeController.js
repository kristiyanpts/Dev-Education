const router = require("express").Router();
const cubeManager = require("../managers/cubeManager");
const accessoryManager = require("../managers/accessoryManager");
const { generateDifficultyOptionsViewData } = require("../utils/viewHelpers");
const { isAuth } = require("../middleware/authMiddleware");

router.get("/:cubeId/details", async (req, res) => {
  let cubeId = req.params.cubeId;
  let cube = await cubeManager.getCubeById(cubeId).lean();
  if (!cube) res.redirect("/404");
  const isOwner = cube.owner == req.user?._id;
  res.render("cube/details", { cube, isOwner });
});

router.use(isAuth);

router.get("/create", (req, res) => {
  res.render("cube/create");
});

router.post("/create", async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  await cubeManager.create({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
    owner: req.user._id,
  });
  res.redirect("/");
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

router.get("/:cubeId/delete", async (req, res) => {
  let cubeId = req.params.cubeId;
  let cube = await cubeManager.getCubeById(cubeId).lean();
  const options = generateDifficultyOptionsViewData(cube.difficultyLevel);

  res.render("cube/delete", { cube, options });
});

router.post("/:cubeId/delete", async (req, res) => {
  let cubeId = req.params.cubeId;
  await cubeManager.deleteCubeById(cubeId);
  res.redirect("/");
});

router.get("/:cubeId/edit", async (req, res) => {
  let cubeId = req.params.cubeId;
  let cube = await cubeManager.getCubeById(cubeId).lean();

  if (cube.owner.toString() !== req.user._id) res.redirect("/404");

  const options = generateDifficultyOptionsViewData(cube.difficultyLevel);
  res.render("cube/edit", { cube, options });
});

router.post("/:cubeId/edit", async (req, res) => {
  let cubeId = req.params.cubeId;
  let cubeData = req.body;
  await cubeManager.updateCubeById(cubeId, cubeData);
  res.redirect(`/cubes/${cubeId}/details`);
});

router.get("/search", (req, res) => {
  let { search, from, to } = req.body;
  let cubes = cubeManager.searchCube(search, from, to);
  res.render("index", { cubes });
});

module.exports = router;
