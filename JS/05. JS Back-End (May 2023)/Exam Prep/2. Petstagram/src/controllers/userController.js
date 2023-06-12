const router = require("express").Router();
const userService = require("../services/userService");
const { parseError } = require("../utils/parser");

router.get("/register", (req, res) => {
  // TODO: Replace with actual register view
  res.render("register");
});

router.post("/register", async (req, res) => {
  try {
    if (req.body.username == "" || req.body.password == "")
      throw new Error("All fields are required");
    if (req.body.password != req.body.repass)
      throw new Error("Passwords do not match");

    const token = await userService.register(
      req.body.username,
      req.body.password
    );

    // TODO: Check assignment to see if register creates session
    res.cookie("authToken", token);
    res.redirect("/"); // TODO: Replace with redirect by assignment
  } catch (error) {
    console.log(error);
    const errors = parseError(error);
    // TODO: Add error display to actual template
    res.render("register", {
      errors,
      body: {
        username: req.body.username,
      },
    });
  }
});

router.get("/login", (req, res) => {
  // TODO: Replace with actual register view
  res.render("login");
});

router.post("/login", async (req, res) => {
  try {
    if (req.body.username == "" || req.body.password == "")
      throw new Error("All fields are required");

    const token = await userService.login(req.body.username, req.body.password);

    res.cookie("authToken", token);
    res.redirect("/"); // TODO: Replace with redirect by assignment
  } catch (error) {
    const errors = parseError(error);
    // TODO: Add error display to actual template
    res.render("login", {
      errors,
      body: {
        username: req.body.username,
      },
    });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("authToken");
  res.redirect("/");
});

module.exports = router;
