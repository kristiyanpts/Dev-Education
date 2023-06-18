const { Schema, model } = require("mongoose");

// TODO: Add user properties and validation according to assignment
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    minLength: [10, "The email must be at least 10 characters long"],
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);

module.exports = User;
