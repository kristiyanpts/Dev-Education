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
  return await Book.findByIdAndUpdate(id, bookData, { runValidators: true });
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
