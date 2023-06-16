const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home", {
    title: "Home Page",
  });
});

router.get("/profile", (req, res) => {
  res.render("user/profile", { title: `Profile: ${req.user.email}` });
});

module.exports = router;
