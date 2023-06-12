const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    minLength: [5, "Username is too short"],
    match: [/^[A-Za-z0-9]+$/, "Username must be alphanumeric"],
    unique: true,
  },
  password: {
    type: String,
    validate: {
      validator: function (value) {
        return /^[A-Za-z0-9]+$/.test(value);
      },
      message: "Invalid password",
    },
    minLength: [8, "Password must be at least 8 characters long"],
  },
});

userSchema.virtual("repeatPassword").set(function (value) {
  if (value !== this.password) {
    throw new mongoose.MongooseError("Passwords do not match");
  }
});

userSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
