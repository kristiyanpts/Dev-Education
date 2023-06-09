function hasUser() {
  return (req, res, next) => {
    if (req.user) next();
    res.redirect("/auth/login");
  };
}

function isGuest() {
  return (req, res, next) => {
    if (req.user) res.redirect("/"); // TIDO: Check assignment for correct redirect
    next();
  };
}

module.exports = {
  hasUser,
  isGuest,
};
