const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET = "0q8we908qw90e8asdiopaiosduoiqwe089";

exports.register = async (username, password) => {
  const exists = await User.findOne({ username }).collation({
    locale: "en",
    strength: 2,
  });
  if (exists) throw new Error("User is taken");

  password = await bcrypt.hash(password, 10);

  const user = await User.create({ username, password });

  //TODO: Check assignment if registration creates user session
  const token = createSession(user);

  return token;
};

exports.login = async (username, password) => {
  const user = await User.findOne({ username }).collation({
    locale: "en",
    strength: 2,
  });

  if (!user) throw new Error("Incorrect username or password");

  let isPassCorrect = await bcrypt.compare(password, user.password);

  if (isPassCorrect == false) throw new Error("Incorrect username or password");

  return createSession(user);
};

createSession = ({ _id, username }) => {
  const payload = {
    _id,
    username,
  };

  return jwt.sign(payload, SECRET);
};

exports.verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};
