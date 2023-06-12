function Main(carsArr) {
  let cars = {};

  carsArr.forEach((c) => {
    let [carBrand, carModel, producedCars] = c.split(" | ");
    producedCars = Number(producedCars);
    if (cars.hasOwnProperty(carBrand)) {
      let hasCarModel = cars[carBrand].find((m) => m.carModel == carModel);

      if (hasCarModel) {
        hasCarModel.producedCars += producedCars;
      } else {
        cars[carBrand].push({ carModel, producedCars });
      }
    } else {
      cars[carBrand] = [];
      cars[carBrand].push({ carModel, producedCars });
    }
  });

  for (const [carBrand, carsInBrand] of Object.entries(cars)) {
    console.log(carBrand);
    carsInBrand.forEach((c) => {
      console.log(`###${c.carModel} -> ${c.producedCars}`);
    });
  }
}

Main([
  "Audi | Q7 | 1000",

  "Audi | Q6 | 100",

  "BMW | X5 | 1000",

  "BMW | X6 | 100",

  "Citroen | C4 | 123",

  "Volga | GAZ-24 | 1000000",

  "Lada | Niva | 1000000",

  "Lada | Jigula | 1000000",

  "Citroen | C4 | 22",

  "Citroen | C5 | 10",
]);
