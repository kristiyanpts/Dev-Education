const jwt = require("../lib/jwt");
const { SECRET } = require("../config/config");

exports.auth = async (req, res, next) => {
  const token = req.cookies["auth"];

  if (token) {
    try {
      let user = await jwt.verify(token, SECRET);

      req.user = user;
      res.locals.user = user;
      res.locals.isAuthenticated = true;

      next();
    } catch (error) {
      res.clearCookie("auth");
      return res.redirect("/users/login");
    }
  } else {
    next();
  }
};

exports.isAuth = async (req, res, next) => {
  if (!req.user) res.redirect("/users/login");
  next();
};
