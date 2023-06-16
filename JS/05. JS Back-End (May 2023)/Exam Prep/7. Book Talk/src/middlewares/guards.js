function hasUser() {
  return (req, res, next) => {
    if (req.user) return next();
    res.redirect("/404");
  };
}

function isGuest() {
  return (req, res, next) => {
    if (req.user) return res.redirect("/404");
    next();
  };
}

module.exports = {
  hasUser,
  isGuest,
};
