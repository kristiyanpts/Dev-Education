const Cube = require("../models/Cube");

exports.create = async (cubeData) => {
  let newCube = new Cube(cubeData);
  await newCube.save();
  return newCube;
};

exports.getAll = () => Cube.find();

exports.getCubeById = (cubeId) => Cube.findById(cubeId).populate("accessories");

exports.searchCube = async (qstring, fromDiff, toDiff) => {
  let cubesFound = await this.getAll().lean();
  if (qstring) {
    cubesFound = cubesFound.filter((c) =>
      c.name.toLowerCase().includes(qstring.toLowerCase())
    );
  }
  if (fromDiff) {
    cubesFound = cubesFound.filter(
      (c) => c.difficultyLevel >= Number(fromDiff)
    );
  }
  if (toDiff) {
    cubesFound = cubesFound.filter((c) => c.difficultyLevel <= Number(toDiff));
  }

  return cubesFound;
};

exports.attachAccessory = async (cubeId, accessoryId) => {
  return Cube.findByIdAndUpdate(cubeId, {
    $push: { accessories: accessoryId },
  });
};
