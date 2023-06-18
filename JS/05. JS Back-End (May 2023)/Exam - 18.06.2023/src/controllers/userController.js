const router = require("express").Router();
const { isGuest, hasUser } = require("../middlewares/guards");
const userService = require("../services/userService");
const { parseError } = require("../utils/parser");

router.get("/register", isGuest(), (req, res) => {
  res.render("user/register", { title: "Register Page" });
});

router.post("/register", isGuest(), async (req, res) => {
  try {
    if (
      req.body.email == "" ||
      req.body.password == "" ||
      req.body.repass == ""
    )
      throw new Error("All fields are required");
    if (req.body.password.length < 4)
      throw new Error("The password must be at least 4 characters long");
    if (req.body.password != req.body.repass)
      throw new Error("Passwords do not match");

    const token = await userService.register(req.body.email, req.body.password);

    res.cookie("authToken", token);
    res.redirect("/");
  } catch (error) {
    const errors = parseError(error);
    res.render("user/register", {
      errors,
      body: {
        email: req.body.email,
      },
      title: "Register Page",
    });
  }
});

router.get("/login", isGuest(), (req, res) => {
  res.render("user/login", { title: "Login Page" });
});

router.post("/login", isGuest(), async (req, res) => {
  try {
    if (req.body.email == "" || req.body.password == "")
      throw new Error("All fields are required");

    const token = await userService.login(req.body.email, req.body.password);

    res.cookie("authToken", token);
    res.redirect("/");
  } catch (error) {
    const errors = parseError(error);
    res.render("user/login", {
      errors,
      body: {
        email: req.body.email,
      },
      title: "Login Page",
    });
  }
});

router.get("/logout", hasUser(), (req, res) => {
  res.clearCookie("authToken");
  res.redirect("/");
});

module.exports = router;
