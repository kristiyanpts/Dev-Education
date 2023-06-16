const { Schema, model, Types } = require("mongoose");
const URL_PATTERN = /^https?:\/\/.+$/i;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: [2, "Title must be at least 2 characters long"],
  },
  author: {
    type: String,
    required: true,
    minLength: [5, "Author must be at least 5 characters long"],
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return URL_PATTERN.test(value);
      },
      message: "Image URL is invalid",
    },
  },
  review: {
    type: String,
    required: true,
    minLength: [10, "Review must be at least 10 characters long"],
  },
  genre: {
    type: String,
    required: true,
    minLength: [3, "Genre must be at least 3 characters long"],
  },
  stars: {
    type: Number,
    required: true,
    min: [1, "Stats must be between 1 and 5"],
    max: [5, "Stats must be between 1 and 5"],
  },
  wishlist: {
    type: [{ type: Types.ObjectId, required: true, ref: "User" }],
    default: [],
  },
  owner: {
    type: Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Book = model("Book", bookSchema);

module.exports = Book;
