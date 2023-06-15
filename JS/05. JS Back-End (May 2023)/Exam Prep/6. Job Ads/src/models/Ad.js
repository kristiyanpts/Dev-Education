const { Schema, model, Types } = require("mongoose");

const adSchema = new Schema({
  headline: {
    type: String,
    required: true,
    minLength: [4, "The headline must be at least 4 characters long"],
  },
  location: {
    type: String,
    required: true,
    minLength: [8, "The location must be at least 8 characters long"],
  },
  companyName: {
    type: String,
    required: true,
    minLength: [3, "The company name must be at least 3 characters long"],
  },
  companyDescription: {
    type: String,
    required: true,
    maxLength: [40, "The description must be 40 characters long at max"],
  },
  author: {
    type: Types.ObjectId,
    required: true,
    ref: "User",
  },
  usersApplied: {
    type: [{ type: Types.ObjectId, required: true, ref: "User" }],
    default: [],
  },
});

const Ad = model("Ad", adSchema);

module.exports = Ad;
