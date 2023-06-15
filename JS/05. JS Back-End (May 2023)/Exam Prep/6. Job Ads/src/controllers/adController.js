const { hasUser } = require("../middlewares/guards");
const router = require("express").Router();
const adService = require("../services/adService");
const { parseError } = require("../utils/parser");

function getDetailsRoles(user, ad) {
  if (user) ad.isUser = true;

  if (user?._id == ad.author._id) {
    ad.isAuthor = true;
  }

  if (
    user &&
    user._id != ad.author._id &&
    !ad.usersApplied.find((u) => u._id == user._id)
  ) {
    ad.canApply = true;
  }

  return ad;
}

router.get("/", async (req, res) => {
  let ads = await adService.getAll();
  res.render("all-ads", { ads });
});

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", hasUser(), async (req, res) => {
  let ad = {
    headline: req.body.headline,
    location: req.body.location,
    companyName: req.body.companyName,
    companyDescription: req.body.companyDescription,
    author: req.user._id,
  };

  try {
    if (Object.values(ad).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    await adService.create(ad);
    res.redirect("/jobs");
  } catch (error) {
    res.render("create", {
      errors: parseError(error),
      body: ad,
    });
  }
});

router.get("/:id/details", async (req, res) => {
  let adId = req.params.id;
  let ad = await adService
    .getById(adId)
    .populate("author")
    .populate("usersApplied");

  ad = getDetailsRoles(req.user, ad);

  res.render("details", { ad });
});

router.get("/:id/apply", hasUser(), async (req, res) => {
  let adId = req.params.id;
  let ad = await adService
    .getById(adId)
    .populate("author")
    .populate("usersApplied");

  try {
    if (req.user._id == ad.author._id) {
      return res.redirect("/404");
    }

    if (ad.usersApplied.includes(req.user._id))
      throw new Error("You have already applied for this position");

    await adService.apply(adId, req.user._id);
    res.redirect(`/jobs/${adId}/details`);
  } catch (error) {
    ad = getDetailsRoles(req.user, ad);
    res.render("details", { ad, errors: parseError(error) });
  }
});

router.get("/:id/delete", hasUser(), async (req, res) => {
  let adId = req.params.id;
  let ad = await adService.getById(adId);

  if (req.user._id != ad.author) {
    return res.redirect("/404");
  }

  await adService.deleteById(ad);
  res.redirect("/jobs");
});

router.get("/:id/edit", hasUser(), async (req, res) => {
  let adId = req.params.id;
  let ad = await adService.getById(adId);

  if (req.user._id != ad.author) {
    return res.redirect("/404");
  }

  res.render("edit", { ad });
});

router.post("/:id/edit", hasUser(), async (req, res) => {
  let adId = req.params.id;
  let ad = await adService.getById(adId);

  if (req.user._id != ad.author) {
    return res.redirect("/404");
  }

  let adData = {
    headline: req.body.headline,
    location: req.body.location,
    companyName: req.body.companyName,
    companyDescription: req.body.companyDescription,
    author: ad.author,
  };

  try {
    if (Object.values(adData).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    adData.usersApplied = ad.usersApplied;

    await adService.update(adId, adData);
    res.redirect(`/jobs/${adId}/details`);
  } catch (error) {
    res.render("edit", {
      errors: parseError(error),
      ad: adData,
    });
  }
});

router.get("/search", hasUser(), (req, res) => {
  res.render("search");
});

router.post("/search", hasUser(), async (req, res) => {
  let email = req.body.email;
  let ads = await adService.search(email);

  res.render("search", { ads });
});

module.exports = router;
