const { hasUser } = require("../middlewares/guards");
const router = require("express").Router();
const cryptoService = require("../services/cryptoService");
const { parseError } = require("../utils/parser");
const { generateEditOptions } = require("../utils/viewHelper");

router.get("/", async (req, res) => {
  let cryptos = await cryptoService.getAll();
  res.render("catalog", { cryptos });
});

router.get("/create", hasUser(), (req, res) => {
  res.render("create");
});

router.post("/create", hasUser(), async (req, res) => {
  let crypto = {
    name: req.body.name,
    image: req.body.image,
    price: Number(req.body.price),
    description: req.body.description,
    paymentMethod: req.body.paymentMethod,
    owner: req.user._id,
  };

  try {
    if (Object.values(crypto).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    await cryptoService.create(crypto);
    res.redirect("/crypto");
  } catch (error) {
    res.render("create", {
      errors: parseError(error),
      body: crypto,
    });
  }
});

router.get("/search", async (req, res) => {
  let cryptos = await cryptoService.getAll();
  res.render("search", { cryptos });
});

router.post("/search", async (req, res) => {
  let { name, paymentMethod } = req.body;

  let cryptos = await cryptoService.search(name, paymentMethod);

  res.render("search", { cryptos });
});

router.get("/:id/details", async (req, res) => {
  let cryptoId = req.params.id;
  let crypto = await cryptoService.getById(cryptoId);

  if (req.user) crypto.isUser = true;
  if (req.user?._id == crypto.owner) {
    crypto.isOwner = true;
  }
  if (
    req.user &&
    req.user._id != crypto.owner &&
    !crypto.bought.find((c) => c == req.user._id)
  ) {
    crypto.canBuy = true;
  }

  res.render("details", { crypto });
});

router.get("/:id/edit", hasUser(), async (req, res) => {
  let cryptoId = req.params.id;
  let crypto = await cryptoService.getById(cryptoId);
  let cryptoOptions = generateEditOptions(crypto.paymentMethod);

  if (req.user._id != crypto.owner) {
    return res.redirect("/404");
  }

  res.render("edit", { crypto, cryptoOptions });
});

router.post("/:id/edit", hasUser(), async (req, res) => {
  let cryptoId = req.params.id;
  let crypto = await cryptoService.getById(cryptoId);

  if (req.user._id != crypto.owner) {
    return res.redirect("/404");
  }

  let cryptoData = {
    name: req.body.name,
    image: req.body.image,
    price: Number(req.body.price),
    description: req.body.description,
    paymentMethod: req.body.paymentMethod,
    owner: req.user._id,
  };

  try {
    if (Object.values(cryptoData).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    await cryptoService.update(cryptoId, cryptoData);
    res.redirect(`/crypto/${cryptoId}/details`);
  } catch (error) {
    res.render("edit", {
      crypto: cryptoData,
      errors: parseError(error),
    });
  }
});

router.get("/:id/buy", hasUser(), async (req, res) => {
  let cryptoId = req.params.id;
  let crypto = await cryptoService.getById(cryptoId);

  try {
    if (req.user._id == crypto.owner) {
      return res.redirect("/404");
    }

    await cryptoService.buy(cryptoId, req.user._id);
    res.redirect(`/crypto/${cryptoId}/details`);
  } catch (error) {
    res.render("details", { crypto, errors: parseError(error) });
  }
});

router.get("/:id/delete", hasUser(), async (req, res) => {
  let cryptoId = req.params.id;
  let crypto = await cryptoService.getById(cryptoId);

  if (req.user._id != crypto.owner) {
    return res.redirect("/404");
  }

  await cryptoService.deleteById(cryptoId);
  res.redirect("/crypto");
});

module.exports = router;
