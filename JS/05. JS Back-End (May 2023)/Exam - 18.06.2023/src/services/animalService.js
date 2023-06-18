const Animal = require("../models/Animal");

exports.create = async (animalData) => {
  await Animal.create(animalData);
};

exports.getAll = () => {
  return Animal.find({}).lean();
};

exports.getById = (id) => {
  return Animal.findById(id).lean();
};

exports.update = async (id, animalData) => {
  return await Animal.findByIdAndUpdate(id, animalData, {
    runValidators: true,
  });
};

exports.deleteById = async (id) => {
  await Animal.findByIdAndDelete(id);
};

exports.donate = async (animalId, userId) => {
  let animal = await Animal.findById(animalId);
  animal.donations.push(userId);
  await animal.save();
};

exports.search = async (locationQuery) => {
  let animals = (await Animal.find({}).lean()).filter(
    (a) => a.location.toLowerCase() === locationQuery.toLowerCase()
  );
  return animals;
};
