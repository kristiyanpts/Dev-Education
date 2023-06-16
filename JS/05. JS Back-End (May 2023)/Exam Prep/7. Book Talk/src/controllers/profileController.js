const router = require("express").Router();
const { hasUser } = require("../middlewares/guards");
const bookService = require("../services/bookService");

router.get("/", hasUser(), async (req, res) => {
  let books = await bookService.getUserWishlist(req.user._id);
  res.render("profile", { books });
});

module.exports = router;
