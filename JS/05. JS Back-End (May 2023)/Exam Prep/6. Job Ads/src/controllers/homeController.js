const router = require("express").Router();

// TODO: Replace with real controller
router.get("/", (req, res) => {
  res.render("home", {
    title: "Home Page",
  });
});

router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;