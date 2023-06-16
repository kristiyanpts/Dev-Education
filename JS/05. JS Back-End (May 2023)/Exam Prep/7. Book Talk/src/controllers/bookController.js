const { hasUser } = require("../middlewares/guards");
const router = require("express").Router();
const bookService = require("../services/bookService");
const { parseError } = require("../utils/parser");

function getBookProps(user, book) {
  if (user) {
    book.isUser = true;
    if (user._id == book.owner) {
      book.isOwner = true;
    }
    if (user._id != book.owner && !book.wishlist.find((a) => a == user._id)) {
      book.canWishlist = true;
    }
  }

  return book;
}

router.get("/", async (req, res) => {
  let books = await bookService.getAll();
  res.render("catalog", { books });
});

router.get("/create", hasUser(), (req, res) => {
  res.render("create");
});

router.post("/create", hasUser(), async (req, res) => {
  let book = {
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    review: req.body.review,
    genre: req.body.genre,
    stars: Number(req.body.stars),
    owner: req.user._id,
  };

  try {
    if (Object.values(book).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    await bookService.create(book);
    res.redirect("/books");
  } catch (error) {
    res.render("create", {
      errors: parseError(error),
      body: book,
    });
  }
});

router.get("/:id/details", async (req, res) => {
  let bookId = req.params.id;
  let book = await bookService.getById(bookId);

  book = getBookProps(req.user, book);

  res.render("details", { book });
});

router.get("/:id/wishlist", hasUser(), async (req, res) => {
  let bookId = req.params.id;
  let book = await bookService.getById(bookId);

  try {
    if (req.user._id == book.owner) {
      return res.redirect("/404");
    }

    if (book.wishlist.find((a) => a == req.user._id)) {
      throw new Error("You have already wishlisted this book");
    }

    await bookService.wish(bookId, req.user._id);
    res.redirect(`/books/${bookId}/details`);
  } catch (error) {
    book = getBookProps(req.user, book);
    res.render("details", { book, errors: parseError(error) });
  }
});

router.get("/:id/delete", hasUser(), async (req, res) => {
  let bookId = req.params.id;
  let book = await bookService.getById(bookId);

  if (req.user._id != book.owner) {
    return res.redirect("/404");
  }

  await bookService.deleteById(bookId);
  res.redirect("/books");
});

router.get("/:id/edit", hasUser(), async (req, res) => {
  let bookId = req.params.id;
  let book = await bookService.getById(bookId);

  if (req.user._id != book.owner) {
    return res.redirect("/404");
  }

  res.render("edit", { book });
});

router.post("/:id/edit", hasUser(), async (req, res) => {
  let bookId = req.params.id;
  let book = await bookService.getById(bookId);

  if (req.user._id != book.owner) {
    return res.redirect("/404");
  }

  let bookData = {
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    review: req.body.review,
    genre: req.body.genre,
    stars: Number(req.body.stars),
    owner: book.owner,
  };

  try {
    if (Object.values(bookData).some((v) => !v)) {
      throw new Error("All fields are required");
    }

    bookData.wishlist = book.wishlist;

    await bookService.update(bookId, bookData);
    res.redirect(`/books/${bookId}/details`);
  } catch (error) {
    res.render("edit", {
      errors: parseError(error),
      book,
    });
  }
});

module.exports = router;
