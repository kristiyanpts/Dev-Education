const Game = require("../models/Game");

exports.create = async (gameData) => {
  await Game.create(gameData);
};

exports.getAll = () => {
  return Game.find({}).lean();
};

exports.getById = (id) => {
  return Game.findById(id).lean();
};

exports.update = async (id, gameData) => {
  return await Game.findByIdAndUpdate(id, gameData);
};

exports.deleteById = async (id) => {
  await Game.findByIdAndDelete(id);
};

exports.buy = async (gameId, userId) => {
  let game = await Game.findById(gameId);
  game.boughtBy.push(userId);
  await game.save();
};

exports.search = async (name, platform) => {
  if (name == "" || platform == "") return await Game.find({}).lean();

  return (await Game.find({ platform }).lean()).filter(
    (g) => g.name.toLowerCase() == name.toLowerCase()
  );
};
