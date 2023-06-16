const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minLength: [4, "Username must be at least 4 characters long"],
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
