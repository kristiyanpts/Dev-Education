const { Schema, model } = require("mongoose");

// TODO: Add user properties and validation according to assignment
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[A-Za-z0-9]+$/i,
      "Username may only contain english letters and numbers",
    ],
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.index(
  { username: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

userSchema.index(
  { email: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
