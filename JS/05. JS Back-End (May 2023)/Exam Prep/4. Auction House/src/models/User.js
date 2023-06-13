const { Schema, model } = require("mongoose");

// TODO: Add user properties and validation according to assignment
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email is invalid"],
  },
  password: {
    type: String,
    required: true,
    minLength: [5, "Password must be at least 5 characters long"],
  },
  firstName: {
    type: String,
    required: true,
    minLength: [1, "First name must be at least 1 character long"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [1, "Last name must be at least 1 character long"],
  },
});

const User = model("User", userSchema);

module.exports = User;
