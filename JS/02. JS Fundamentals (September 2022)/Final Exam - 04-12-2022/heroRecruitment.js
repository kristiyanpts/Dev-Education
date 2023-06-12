function Main(Input) {
  let Heroes = {};
  let commandInfo = Input.shift().split(" ");

  while (commandInfo[0] !== "End") {
    let heroName = commandInfo[1];
    let spellName = commandInfo[2];
    switch (commandInfo[0]) {
      case "Enroll":
        if (Heroes.hasOwnProperty(heroName)) {
          console.log(`${heroName} is already enrolled.`);
        } else {
          Heroes[heroName] = {
            spells: [],
          };
        }
        break;
      case "Learn":
        if (Heroes.hasOwnProperty(heroName)) {
          if (Heroes[heroName].spells.includes(spellName)) {
            console.log(`${heroName} has already learnt ${spellName}.`);
          } else {
            Heroes[heroName].spells.push(spellName);
          }
        } else {
          console.log(`${heroName} doesn't exist.`);
        }
        break;
      case "Unlearn":
        if (Heroes.hasOwnProperty(heroName)) {
          if (!Heroes[heroName].spells.includes(spellName)) {
            console.log(`${heroName} doesn't know ${spellName}.`);
          } else {
            Heroes[heroName].spells.splice(
              Heroes[heroName].spells.indexOf(spellName),
              1
            );
          }
        } else {
          console.log(`${heroName} doesn't exist.`);
        }
        break;
      default:
        break;
    }

    commandInfo = Input.shift().split(" ");
  }

  console.log("Heroes:");
  for (const [hero, heroInfo] of Object.entries(Heroes)) {
    console.log(`== ${hero}: ${heroInfo.spells.join(", ")}`);
  }
}

Main([
  "Enroll Stefan",
  "Enroll Peter",
  "Enroll John",
  "Learn Stefan Spell",
  "Learn Peter Dispel",
  "End",
]);
