function solve() {
  const Fighter = (name) => {
    let state = {
      name,
      health: 100,
      stamina: 100,

      fight: function () {
        console.log(`${this.name} slashes at the foe!`);
        this.stamina--;
      },
    };

    return state;
  };

  const Mage = (name) => {
    let state = {
      name,
      health: 100,
      mana: 100,

      cast: function (spell) {
        console.log(`${this.name} cast ${spell}`);
        this.mana--;
      },
    };

    return state;
  };

  return { fighter: Fighter, mage: Mage };
}

let create = solve();

const scorcher = create.mage("Scorcher");

scorcher.cast("fireball");

scorcher.cast("thunder");

scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");

scorcher2.fight();

console.log(scorcher2.stamina);

console.log(scorcher.mana);
