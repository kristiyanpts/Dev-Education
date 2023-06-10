const router = require("express").Router();

router.get("/:id/details", (req, res) => {
  res.render("details");
});

router.get("/create", (req, res) => {
  res.render("create");
});

router.get("/:id/edit", (req, res) => {
  res.render("edit");
});

module.exports = router;
