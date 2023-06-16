const Book = require("../models/Book");

exports.create = async (bookData) => {
  await Book.create(bookData);
};

exports.getAll = () => {
  return Book.find({}).lean();
};

exports.getById = (id) => {
  return Book.findById(id).lean();
};

exports.update = async (id, bookData) => {
  let book = await Book.findById(id);

  book.title = bookData.title;
  book.author = bookData.author;
  book.genre = bookData.genre;
  book.stars = bookData.stars;
  book.image = bookData.image;
  book.review = bookData.review;
  book.owner = bookData.owner;
  book.wishlist = bookData.wishlist;

  await book.save();
};

exports.deleteById = async (id) => {
  await Book.findByIdAndDelete(id);
};

exports.wish = async (bookId, userId) => {
  let book = await Book.findById(bookId);
  book.wishlist.push(userId);
  await book.save();
};

exports.getUserWishlist = async (userId) => {
  return await Book.find({ wishlist: userId }).lean();
};
