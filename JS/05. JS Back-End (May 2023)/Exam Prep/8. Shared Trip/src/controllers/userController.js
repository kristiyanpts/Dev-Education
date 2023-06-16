const router = require("express").Router();
const userService = require("../services/userService");
const { parseError } = require("../utils/parser");

router.get("/register", (req, res) => {
  res.render("user/register", { title: "Register Form" });
});

router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    if (
      req.body.email == "" ||
      req.body.password == "" ||
      req.body.gender == ""
    )
      throw new Error("All fields are required");
    if (req.body.password.length < 4)
      throw new Error("Password must be at least 4 characters long");
    if (req.body.password != req.body.repass)
      throw new Error("Passwords do not match");

    const token = await userService.register(
      req.body.email,
      req.body.password,
      req.body.gender
    );

    res.cookie("authToken", token);
    res.redirect("/");
  } catch (error) {
    const errors = parseError(error);
    res.render("user/register", {
      title: "Register Form",
      errors,
      body: {
        email: req.body.email,
      },
    });
  }
});

router.get("/login", (req, res) => {
  res.render("user/login", { title: "Login Form" });
});

router.post("/login", async (req, res) => {
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
      title: "Login Form",
    });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("authToken");
  res.redirect("/");
});

module.exports = router;
