const mongoose = require("mongoose");

const cubeSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [5, "Cube name must be at least 5 characters"],
    match: [/^[A-Za-z0-9\s]+$/, "Invalid characters"],
  },
  description: {
    type: String,
    minLength: [20, "Description must be at least 20 characters"],
    match: [/^[A-Za-z0-9\s]+$/, "Invalid characters"],
  },
  imageUrl: {
    type: String,
    
  },
  difficultyLevel: Number,
  accessories: [{ type: mongoose.Types.ObjectId, ref: "Accessory" }],
  owner: { type: mongoose.Types.ObjectId, ref: "User" },
});

const Cube = mongoose.model("Cube", cubeSchema);

module.exports = Cube;
