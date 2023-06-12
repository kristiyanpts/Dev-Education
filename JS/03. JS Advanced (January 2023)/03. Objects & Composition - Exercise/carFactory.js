function Main(car) {
  if (car.power <= 90) {
    delete car.power;
    car.engine = {
      power: 90,
      volume: 1800,
    };
  } else if (car.power <= 120) {
    delete car.power;
    car.engine = {
      power: 120,
      volume: 2400,
    };
  } else if (car.power <= 200) {
    delete car.power;
    car.engine = {
      power: 200,
      volume: 3500,
    };
  }

  if (car.carriage === "hatchback") {
    car.carriage = {
      type: "hatchback",
      color: car.color,
    };
    delete car.color;
  } else if (car.carriage === "coupe") {
    car.carriage = {
      type: "coupe",
      color: car.color,
    };
    delete car.color;
  }

  let size = car.wheelsize % 2 === 0 ? car.wheelsize - 1 : car.wheelsize;
  let wheels = [size, size, size, size];
  car.wheels = wheels;
  delete car.wheelsize;

  return car;
}

Main({
  model: "VW Golf II",

  power: 90,

  color: "blue",

  carriage: "hatchback",

  wheelsize: 14,
});

Main({
  model: "Opel Vectra",

  power: 110,

  color: "grey",

  carriage: "coupe",

  wheelsize: 17,
});
