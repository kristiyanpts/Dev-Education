function hasUser() {
  return (req, res, next) => {
    if (req.user) return next();
    res.redirect("/auth/login");
  };
}

function isGuest() {
  return (req, res, next) => {
    if (req.user) return res.redirect("/"); // TIDO: Check assignment for correct redirect
    next();
  };
}

module.exports = {
  hasUser,
  isGuest,
};
