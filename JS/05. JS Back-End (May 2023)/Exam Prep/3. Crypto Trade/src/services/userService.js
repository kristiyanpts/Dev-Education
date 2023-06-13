const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET = "0q8we908qw90e8asdiopaiosduoiqwe089";

exports.register = async (username, email, password) => {
  const existsUsername = await User.findOne({ username }).collation({
    locale: "en",
    strength: 2,
  });
  if (existsUsername) throw new Error("Username is taken");

  const existsEmail = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });
  if (existsEmail) throw new Error("Email is already registered");

  password = await bcrypt.hash(password, 10);

  const user = await User.create({ username, email, password });

  return user;
};

exports.login = async (email, password) => {
  const user = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });

  if (!user) throw new Error("Incorrect email or password");

  let isPassCorrect = await bcrypt.compare(password, user.password);

  if (isPassCorrect == false) throw new Error("Incorrect email or password");

  return createSession(user);
};

createSession = ({ _id, email, username }) => {
  const payload = {
    _id,
    email,
    username,
  };

  return jwt.sign(payload, SECRET);
};

exports.verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};
