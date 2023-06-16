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
  gender: {
    type: String,
    required: true,
    enum: {
      values: ["Male", "Female"],
      message: "Gender is either male or female",
    },
  },
  trips: [
    {
      type: Types.ObjectId,
      ref: "Trip",
    },
  ],
});

const User = model("User", userSchema);

module.exports = User;
