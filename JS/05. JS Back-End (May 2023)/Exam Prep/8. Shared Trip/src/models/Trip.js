const { Schema, model, Types } = require("mongoose");
const URL_PATTERN = /^https?:\/\/.+$/i;

const tripSchema = new Schema({
  startPoint: {
    type: String,
    required: true,
    minLength: [4, "Starting point must be at least 4 characters long"],
  },
  endPoint: {
    type: String,
    required: true,
    minLength: [4, "Ending point must be at least 4 characters long"],
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  carImage: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return URL_PATTERN.test(value);
      },
      message: "Image URL is invalid",
    },
  },
  carBrand: {
    type: String,
    required: true,
    minLength: [4, "Car brand must be at least 4 characters long"],
  },
  seats: {
    type: Number,
    required: true,
    min: [0, "Seats must be between 0 and 4"],
    max: [4, "Seats must be between 0 and 4"],
  },
  price: {
    type: Number,
    required: true,
    min: [1, "Price must be between 1 and 50"],
    max: [50, "Price must be between 1 and 50"],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, "Description must be at least 10 characters long"],
  },
  creator: {
    type: Types.ObjectId,
    ref: "User",
  },
  buddies: [
    {
      type: Types.ObjectId,
      ref: "User",
    },
  ],
});

const Trip = model("Trip", tripSchema);

module.exports = Trip;
