function Main(cities) {
  let towns = {};

  for (let city of cities) {
    city = city.split(" <-> ");

    if (towns.hasOwnProperty(city[0])) {
      towns[city[0]].population += Number(city[1]);
    } else {
      towns[city[0]] = {
        population: Number(city[1]),
      };
    }
  }

  for (const [town] of Object.entries(towns)) {
    console.log(`${town} : ${towns[town].population}`);
  }
}

Main([
  "Sofia <-> 1200000",

  "Montana <-> 20000",

  "New York <-> 10000000",

  "Washington <-> 2345000",

  "Las Vegas <-> 1000000",
]);
