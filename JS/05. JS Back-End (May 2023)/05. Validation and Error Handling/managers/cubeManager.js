const Cube = require("../models/Cube");

exports.create = async (cubeData) => {
  let newCube = new Cube(cubeData);
  await newCube.save();
  return newCube;
};

exports.getAll = () => Cube.find();

exports.getCubeById = (cubeId) => Cube.findById(cubeId).populate("accessories");

exports.deleteCubeById = (cubeId) => Cube.findByIdAndDelete(cubeId);

exports.updateCubeById = (cubeId, cubeData) =>
  Cube.findByIdAndUpdate(cubeId, cubeData);

exports.searchCube = async (qstring, fromDiff, toDiff) => {
  let cubesFound = await this.getAll().lean();
  if (qstring) {
    cubesFound = cubesFound.filter((c) =>
      c.name.toLowerCase().includes(qstring.toLowerCase())
    );
    console.log(`vlizam v ${qstring}: ${cubesFound}`);
  }
  if (fromDiff) {
    cubesFound = cubesFound.filter(
      (c) => c.difficultyLevel >= Number(fromDiff)
    );
    console.log(`vlizam v ${fromDiff}: ${cubesFound}`);
  }
  if (toDiff) {
    cubesFound = cubesFound.filter((c) => c.difficultyLevel <= Number(toDiff));
    console.log(`vlizam v ${toDiff}: ${cubesFound}`);
  }

  return cubesFound;
};

exports.attachAccessory = async (cubeId, accessoryId) => {
  return Cube.findByIdAndUpdate(cubeId, {
    $push: { accessories: accessoryId },
  });
};
