const { Schema, model, Types } = require("mongoose");
const URL_PATTERN = /^https?:\/\/.+$/i;

const animalSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: [2, "The name must be at least 2 characters long"],
  },
  years: {
    type: Number,
    required: true,
    min: [1, "The years must be between 1 and 100"],
    max: [100, "The years must be between 1 and 100"],
  },
  kind: {
    type: String,
    required: true,
    minLength: [3, "The kind must be at least 3 characters long"],
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
  need: {
    type: String,
    required: true,
    minLength: [
      3,
      "The need must be at least 3 characters long and 20 characters max",
    ],
    maxLength: [
      20,
      "The need must be at least 3 characters long and 20 characters max",
    ],
  },
  location: {
    type: String,
    required: true,
    minLength: [
      5,
      "The location must be at least 5 characters long and 15 characters max",
    ],
    maxLength: [
      15,
      "The location must be at least 5 characters long and 15 characters max",
    ],
  },
  description: {
    type: String,
    required: true,
    minLength: [
      5,
      "The description must be at least 5 characters long and 50 characters max",
    ],
    maxLength: [
      50,
      "The description must be at least 5 characters long and 50 characters max",
    ],
  },
  donations: [{ type: Types.ObjectId, ref: "User" }],
  owner: {
    type: Types.ObjectId,
    ref: "User",
  },
});

const Animal = model("Animal", animalSchema);

module.exports = Animal;
