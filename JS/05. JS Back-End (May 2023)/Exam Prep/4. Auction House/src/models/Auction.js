const { Schema, model, Types } = require("mongoose");

const auctionSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: [4, "The title must be at least 4 characters long"],
  },
  description: {
    type: String,
    maxLength: [200, "The description must maximum 200 characters long"],
  },
  category: {
    type: String,
    required: true,
    enum: {
      values: ["Vehicles", "Real Estate", "Electronics", "Furniture", "Other"],
      message: "Category is invalid",
    },
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: [1, "Price must be a positive number"],
  },
  author: {
    type: Types.ObjectId,
    required: true,
    ref: "User",
  },
  bidder: {
    type: Types.ObjectId,
    ref: "User",
  },
  closed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Auction = model("Auction", auctionSchema);

module.exports = Auction;
