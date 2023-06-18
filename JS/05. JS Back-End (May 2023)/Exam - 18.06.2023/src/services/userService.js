const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET = "0q8we908qw90e8asdiopaiosduoiqwe089";

exports.register = async (email, password) => {
  const exists = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });
  if (exists) throw new Error("Email is already registered");

  password = await bcrypt.hash(password, 10);

  const user = await User.create({ email, password });

  const token = createSession(user);

  return token;
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

createSession = ({ _id, email }) => {
  const payload = {
    _id,
    email,
  };

  return jwt.sign(payload, SECRET);
};

exports.verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};
