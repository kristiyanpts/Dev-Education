const Ad = require("../models/Ad");

exports.create = async (adData) => {
  await Ad.create(adData);
};

exports.getAll = () => {
  return Ad.find({}).lean();
};

exports.getById = (id) => {
  return Ad.findById(id).lean();
};

exports.update = async (id, adData) => {
  return await Ad.findByIdAndUpdate(id, adData);
};

exports.deleteById = async (id) => {
  await Ad.findByIdAndDelete(id);
};

exports.apply = async (adId, userId) => {
  let ad = await Ad.findById(adId);
  ad.usersApplied.push(userId);
  await ad.save();
};

exports.search = async (email) => {
  return (await Ad.find({}).lean().populate("author")).filter(
    (a) => a.author.email.toLowerCase() == email.toLowerCase()
  );
};
