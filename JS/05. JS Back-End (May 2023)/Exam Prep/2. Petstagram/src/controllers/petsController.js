const { hasUser } = require("../middlewares/guards");

const router = require("express").Router();
const petService = require("../services/petService");
const { parseError } = require("../utils/parser");

router.get("/", async (req, res) => {
  let photos = await petService.getAll().populate("owner");
  console.log(photos);
  res.render("catalog", { photos });
});

router.get("/:id/details", async (req, res) => {
  let photoId = req.params.id;
  let photo = await petService.getPostComments(photoId);

  console.log(photo);

  if (req.user?.username == photo.owner.username) {
    photo.isCreator = true;
  }
  if (req.user && req.user.username != photo.owner.username) {
    photo.canComment = true;
  }

  res.render("details", { photo });
});

router.get("/:id/delete", hasUser(), async (req, res) => {
  let photoId = req.params.id;
  let photo = await petService.getById(photoId);

  if (req.user._id != photo.owner) {
    res.redirect("/auth/login");
  }

  await petService.deleteById(photoId);
  res.redirect("/pets");
});

router.get("/:id/edit", hasUser(), async (req, res) => {
  let photoId = req.params.id;
  let photo = await petService.getById(photoId);

  if (req.user._id != photo.owner) {
    res.redirect("/auth/login");
  }

  res.render("edit", { photo });
});

router.post("/:id/edit", hasUser(), async (req, res) => {
  let photoId = req.params.id;
  let photo = await petService.getById(photoId);

  if (req.user._id != photo.owner) {
    res.redirect("/auth/login");
  }

  let photoData = {
    name: req.body.name,
    image: req.body.image,
    age: Number(req.body.age),
    description: req.body.description,
    location: req.body.location,
    owner: photo.owner,
  };

  try {
    if (Object.values(photoData).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    await petService.update(photoId, photoData);
    res.redirect(`/pets/${photoId}/details`);
  } catch (error) {
    res.render("edit", {
      photo: photoData,
      errors: parseError(error),
    });
  }
});

router.post("/:id/comment", hasUser(), async (req, res) => {
  let photoId = req.params.id;
  let commentText = req.body.comment;
  let photo = await petService.getById(photoId);

  try {
    if (req.user._id == photo.owner) {
      throw new Error("Cannot comment on your own post");
    }

    await petService.comment(photoId, req.user._id, commentText);
    res.redirect(`/pets/${photoId}/details`);
  } catch (error) {
    res.render("details", { photo, errors: parseError(error) });
  }
});

router.get("/add", hasUser(), (req, res) => {
  res.render("create");
});

router.post("/add", hasUser(), async (req, res) => {
  let photoData = {
    name: req.body.name,
    image: req.body.image,
    age: Number(req.body.age),
    description: req.body.description,
    location: req.body.location,
    owner: req.user._id,
  };

  try {
    if (Object.values(photoData).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    await petService.create(photoData);
    res.redirect("/pets");
  } catch (error) {
    res.render("create", {
      errors: parseError(error),
      body: photoData,
    });
  }
});

module.exports = router;
