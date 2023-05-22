const uniqid = require("uniqid");
const { search } = require("../controllers/homeController");

const cubes = [];

exports.create = (cubeData) => {
  let newCube = { id: uniqid(), ...cubeData };
  cubes.push(newCube);
  return newCube;
};

exports.getAll = () => cubes.slice();

exports.getCubeById = (cubeId) => cubes.find((c) => c.id === cubeId);

exports.searchCube = (qstring, fromDiff, toDiff) => {
  let cubesFound = cubes.slice();
  if (search) {
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
