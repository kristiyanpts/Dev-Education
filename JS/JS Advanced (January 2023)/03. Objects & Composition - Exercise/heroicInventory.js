function Main(Input) {
  var heroes = [];

  for (let hero of Input) {
    hero = hero.split(" / ");
    let heroItems = hero[2] ? hero[2].split(", ") : [];
    heroes.push({
      name: hero[0],
      level: Number(hero[1]),
      items: heroItems,
    });
  }

  console.log(JSON.stringify(heroes));
}

Main([
  "Isacc / 25 / Apple, GravityGun",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);

Main(["Jake / 1000 / Gauss, HolidayGrenade"]);
