const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email is invalid"],
  },
  password: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: [40, "The description must be 40 characters long at max"],
  },
  ads: {
    type: [{ type: Types.ObjectId, required: true, ref: "Ad" }],
    default: [],
  },
});

const User = model("User", userSchema);

module.exports = User;
