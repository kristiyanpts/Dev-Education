const { Schema, model } = require("mongoose");

// TODO: Add user properties and validation according to assignment
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minLength: [5, "Username must be at least 5 characters long"],
  },
  email: {
    type: String,
    required: true,
    minLength: [10, "Email must be at least 10 characters long"],
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);

module.exports = User;
